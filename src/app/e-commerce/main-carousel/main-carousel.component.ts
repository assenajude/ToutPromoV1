import { Component, OnInit } from '@angular/core';
import {Carousel} from "primeng/primeng";
import {EcommerceService} from "../services/ecommerce.service";
import {Subscription} from "rxjs";
import {ProduitModel} from "../models/produit-model";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {
  play=true;
 produitImage:Carousel[];
  position: 'right';
  produits:any[];
  sub:Subscription;

 /* customOptions: OwlOptions = {
    items:1,
    loop: false,
    autoplay:true,
    //autoplayTimeout:500,
    autoplayHoverPause:true,
    autoplaySpeed:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag:true,
    dots:true,
    dotsEach:true,
    dotsData:true,
    center:true,
    rewind:true,
    animateOut: 'fadeOut',
    navSpeed:400,
    //navText: ['<i nz-icon nzType="left" nzTheme="outline"></i>', '<i nz-icon nzType="right" nzTheme="outline"></i>'],

    margin:30,
    stagePadding:30,
    //nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  }*/
  constructor(private ecommerceService:EcommerceService) {

  }


  ngOnInit() {
/*
    this.sub=this.ecommerceService.getProduitsByEspace(4,0,10).subscribe(data=>{
        this.produits=data.content;
      console.log(this.produits)
      },
      error1 => {
        console.log("Produits introuvable")
      })*/

  }

}
