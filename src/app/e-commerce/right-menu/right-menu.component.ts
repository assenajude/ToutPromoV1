import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {
  isCollapsed=true;

  constructor() { }

  ngOnInit() {
    this.toggleCollapsed();

  }


  toggleCollapsed():void {
    this.isCollapsed=!this.isCollapsed;
  }
}
