import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {

	book;
  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
  	let id = parseInt(this.route.snapshot.paramMap.get('id'));

  	this.dataService.getBook(id).subscribe((book) => {
  		this.book = book
  	})
  }

}
