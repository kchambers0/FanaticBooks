import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string = 'assets/';

  constructor(private http: HttpClient) {

   }

   getSubcategories() {
   	return this.http.get(this.baseUrl + 'subcategories.json')
   		.pipe(
   			catchError(this.handleError)
   		);
   }

   getBooks() {
    return this.http.get(this.baseUrl + 'books.json')
      .pipe(
        catchError(this.handleError)
      )
   }

   getBook(id:number) {
    return this.http.get(this.baseUrl + 'books.json')
      .pipe(
        map(books => {
          //flatten weird object array for filtering.
          let booksArray = [].concat.apply([], Object.values(books));
          let book = booksArray.filter((bk) => bk.id == id);
          return (book && book.length) ? book[0] : null;
        }),
        catchError(this.handleError)
      );
   }

  private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
      }
      return Observable.throw(error || 'Unknown server error');
    }
}
