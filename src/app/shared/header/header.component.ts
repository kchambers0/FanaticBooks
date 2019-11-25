import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  categories;
	fullCategories=[
      "Biography",
      "Business",
      "Cookbooks",
      "Fiction",
      "Health & Fitness",
      "History",
      "Religion & Inspiration",
      "Self-Improvement"
    ];
    subcategories;
    user = "Kevin";
  	constructor(private dataService:DataService) { }

  	ngOnInit() {
  		this.categories=[
  			"Biography",
  			"Fiction",
        "Inspiration",
  			"History"
  		]

      this.dataService.getSubcategories().subscribe((subcats) => this.subcategories = subcats)
  }

}
