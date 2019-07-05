import { Component, OnInit } from '@angular/core';
import {EcommerceService} from "../services/ecommerce.service";
import {Subscription} from "rxjs";
import {ProduitModel} from "../models/produit-model";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  images:any[];
  items: any[];
  produits:ProduitModel[]=[];
sub:Subscription;

  constructor(private ecommerceService:EcommerceService) {

  this.sub=this.ecommerceService.getProduitsByEspace(5,0,30).subscribe(data=>{
    this.produits=data;
  },
    error1 => {
    console.log("produit introuvable")
    })
  }

  ngOnInit() {
    this.items=[];

  /*  for(let item of this.produits){
      this.items.push({source:item.lienImage,alt:item.designProd, title:item.prixProd})
    }*/
    this.items.push({source:'assets/images/live1.jpg', alt:'T-shirt Polo 100% coton', title:'5000 FCFA'});
    this.items.push({source:'assets/images/live2.jpg', alt:'Talon dame de très haute qualité', title:'10000 FCFA'});
    this.items.push({source:'assets/images/live3.jpg', alt:'Sac à dos intelligent', title:'16000 FCFA'});
    this.items.push({source:'assets/images/live4.jpg', alt:'Basket classe pour homme', title:'18000 FCFA'});

  }

}
