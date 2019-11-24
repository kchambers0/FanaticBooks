import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
	subcategories;
  constructor(private dataService:DataService) { }

  ngOnInit() {
  	this.dataService.getSubcategories().subscribe((subcats) => this.subcategories = subcats)
  }

}
