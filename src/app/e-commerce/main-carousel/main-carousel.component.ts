import { Component, OnInit } from '@angular/core';
import {Carousel} from "primeng/primeng";

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {
 produitImage:Carousel[];
 items:any[];
  constructor() { }

  ngOnInit() {
    this.items=[];

    this.items.push({source:'assets/images/t-shirtp1.jpg', alt:'T-shirt Polo 100% coton', title:'5000 FCFA'});
    this.items.push({source:'assets/images/damech.jpg', alt:'Talon dame de très haute qualité', title:'10000 FCFA'});
    this.items.push({source:'assets/images/bag1.jpg', alt:'Sac à dos intelligent', title:'16000 FCFA'});
    this.items.push({source:'assets/images/basketclass2.jpg', alt:'Basket classe pour homme', title:'18000 FCFA'});
    this.items.push({source:'assets/images/basketclass1.jpg', alt:'Basket classe pour homme', title:'17000 FCFA'});

  }

}
