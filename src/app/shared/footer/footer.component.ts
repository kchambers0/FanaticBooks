import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  categories=[
      "Biography",
      "Business",
      "Cookbooks",
      "Fiction",
      "Health & Fitness",
      "History",
      "Religion & Inspiration",
      "Self-Improvement"
    ];
  	constructor() { }

  	ngOnInit() {
  	
  }

}
