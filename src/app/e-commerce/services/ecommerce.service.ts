import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EspaceModel} from "../models/espace-model";
import {Observable} from "rxjs";
import {ProduitModel} from "../models/produit-model";
import {LigneCommandesModel} from "../models/ligneCommandes-model";
import {LigneCommandeModel} from "../models/ligneCommande-model";

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  private ecomHost: string = "http://localhost:8082/api/";
  private espaceHost: string = "http://localhost:8082/api/espaces";
  private prodHost: string = "http://localhost:8082/api/produits";
  private prodFileHost: string = "http://localhost:8082/api/files/upload";
  private prodByEspHost: string = "http://localhost:8082/api/produits/espace";


  constructor(private http: HttpClient) { }

  addEspace(espace:EspaceModel):Observable<any>{
    return this.http.post(this.espaceHost,espace);
  }

  addProduitFile(file:File):Observable<any>{
    let formData:FormData = new FormData();
    formData.append('file',file);
    return this.http.post(this.prodFileHost,formData);
  }

  updateProduit(produit):Observable<any>{
    let produitRequest={
      idProd:produit.idProd,
      designProd:produit.designProd,
      descripProd:produit.descripProd,
      prixProd:produit.prixProd,
      prixminProd:produit.prixminProd,
      prixmaxProd:produit.prixmaxProd,
      qteStockProd:produit.qteStockProd,
      infosMarque: produit.infosMarque,
      totalVotant:produit.totalVotant,
      timeLenght:{
        days:produit.days,
        hours:produit.hours,
      },
      nomImage:produit.nomImage,
      lienImage:produit.lienImage,
      espace:produit.espace
    }
    return this.http.put(`${this.prodHost}/${produit.idProd}`,produitRequest);
  }

  getEspace(idEsp:number):Observable<EspaceModel>{

    return this.http.get<EspaceModel>(`${this.espaceHost}/${idEsp}`);
  }

  getEspaces():Observable<EspaceModel[]>{
    return this.http.get<EspaceModel[]>(this.espaceHost);
  }

  getProduitsByEspace(idEsp:number, page:number, size:number){

    return this.http.get<any>(`${this.prodByEspHost}/${idEsp}?page=${page}&size=${size}`);
  }


  saveLigneCommmande(ligneCommande:LigneCommandeModel){
    return this.http.post(`${this.ecomHost}ligneCommandes`, ligneCommande);

  }
}
