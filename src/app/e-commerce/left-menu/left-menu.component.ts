import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  images:any[];


  constructor() {
    this.images = [];
    this.images.push({source:'assets/images/polologo.jpg', thumbnail: 'assets/images/polologo.jpg', title:'la marque POLO'});

    this.images.push({source:'assets/images/clarks1.jpg', thumbnail: 'assets/images/clarks1.jpg', title:' chaussure homme'});

  }

  ngOnInit() {
  }

}
