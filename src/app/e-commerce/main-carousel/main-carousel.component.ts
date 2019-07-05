import { Component, OnInit } from '@angular/core';
import {Carousel} from "primeng/primeng";
import {EcommerceService} from "../services/ecommerce.service";
import {Subscription} from "rxjs";
import {ProduitModel} from "../models/produit-model";

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
  array = [1, 2, 3, 4];
  constructor(private ecommerceService:EcommerceService) {


  }

  ngOnInit() {

    this.sub=this.ecommerceService.getProduitsByEspace(4,0,10).subscribe(data=>{
        this.produits=data.content;
      console.log(this.produits)
      },
      error1 => {
        console.log("Produits introuvable")
      })

  }

}
