import { Component, OnInit } from '@angular/core';
import {Observable, of, Subscription} from "rxjs";
import {LigneCommandeModel} from "../models/ligneCommande-model";
import {EcommerceService} from "../services/ecommerce.service";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  public shoppingCartItems$: Observable<LigneCommandeModel[]> = of([]);
  public shoppingCartItems: LigneCommandeModel[] = [];

  orderFinished: boolean;
  selectProds: any;
  total: number;
  sub: Subscription;
  totalGeneral:number;
  totalItem:number;

  constructor(private ecommerceService:EcommerceService,
              private shopcartService:ShoppingCartService,
              private route:ActivatedRoute,
              private router:Router) {

    this.total = 0;
    this.orderFinished = false;

    this.shoppingCartItems$ = this.shopcartService.getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    this.shopcartService.getTotalAmount().subscribe(resp=>{this.totalGeneral=resp});
    this.shopcartService.getTotalQuantite().subscribe(res=>{this.totalItem=res});
  }

  ngOnInit() {
  }

  delete(item: LigneCommandeModel) {
    this.shopcartService.removeFromCart(item);
  }

  envie(item: LigneCommandeModel) {

  }

  changeQuantite(event){
    this.shopcartService.ItemInCartChanged.subscribe();

  }

  finishOrder() {
    this.orderFinished = true;
  }
}
