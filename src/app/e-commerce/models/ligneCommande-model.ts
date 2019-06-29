import {ProduitModel} from "./produit-model";

export class LigneCommandeModel {
  idLc:number;
  produit:ProduitModel;
  quantite:number;


  constructor(idLc: number, produit: ProduitModel, quantite: number) {
    this.idLc = idLc;
    this.produit = produit;
    this.quantite = quantite;
  }
}
