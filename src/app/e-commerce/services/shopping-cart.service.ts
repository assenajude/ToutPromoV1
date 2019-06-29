import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {LigneCommandeModel} from "../models/ligneCommande-model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  private itemsInCartSubject: BehaviorSubject<LigneCommandeModel[]> = new BehaviorSubject([]);
  private itemsInCart: LigneCommandeModel[] = [];

  private totalItem: number;
  private totalAmount:number;

  ItemInCartChanged=this.itemsInCartSubject.asObservable();

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }


  public addToCart(item:LigneCommandeModel) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getItems(): Observable<LigneCommandeModel[]> {
    return this.itemsInCartSubject.asObservable();
  }

  findItem(id: number): LigneCommandeModel {
    return this.itemsInCart[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: number) {
    for (var i = 0; i < this.itemsInCart.length; i++) {
      if (this.itemsInCart[i].produit.idProd == id) {
        return i;
      }
    }
    return -1;
  }

  public removeFromCart(item: LigneCommandeModel) {
    let currentItems = [...this.itemsInCart];
    let itemsWithoutRemoved = currentItems.filter(_ => _.idLc !== item.idLc);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

  public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.pipe(map((items: LigneCommandeModel[]) => {
      return items.reduce((prev, curr: LigneCommandeModel) => {
        return prev + curr.produit.prixProd;
      }, 0);
    }));
  }

  public getTotalQuantite(): Observable<number> {
    return this.itemsInCartSubject.pipe(map((items: LigneCommandeModel[]) => {
      return items.reduce((prev, curr: LigneCommandeModel) => {
        return prev + curr.quantite;
      }, 0);
    }));
  }
}
