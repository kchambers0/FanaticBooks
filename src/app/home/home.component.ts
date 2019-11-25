import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
	books;
	currencyCode: string = "USD";
  	constructor(private dataService:DataService) { }

  	ngOnInit() {
  		this.dataService.getBooks().subscribe((books) => this.books = books)
  	}

}
