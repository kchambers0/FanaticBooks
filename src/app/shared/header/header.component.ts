import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isHidden=true;

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

    open(e){
      e.stopPropagation()
      this.isHidden=false;
    }
    close(e){
      e.stopPropagation()
      this.isHidden=true;
    }

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
