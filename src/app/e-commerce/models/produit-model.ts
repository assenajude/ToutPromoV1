import {EspaceModel} from "./espace-model";

export class ProduitModel {
  idProd:number;
  designProd:string;
  descripProd:string;
  prixProd:number;
  prixminProd:number;
  prixmaxProd:number;
  qteStockProd:number;
  infosMarque:string;
  totalVotant:number;
  currentVotant:number;
  percent:number;
  goSpin:boolean=false;
  panelCollapsed=true;
  expirationDate:Date;
  nomImage:string;
  lienImage:string;
  espace :EspaceModel;



  constructor(idProd: number, designProd: string, descripProd: string, prixProd: number,
              prixminProd: number, prixmaxProd: number, qteStockProd: number,
              infosMarque: string, totalVotant:number, currentVotant:number, percent:number,
              goSpin:boolean, panelCollapsed:boolean, expirationDate: Date, nomImage: string,
              lienImage: string, espace: EspaceModel) {
    this.idProd = idProd;
    this.designProd = designProd;
    this.descripProd = descripProd;
    this.prixProd = prixProd;
    this.prixminProd = prixminProd;
    this.prixmaxProd = prixmaxProd;
    this.qteStockProd = qteStockProd;
    this.infosMarque = infosMarque;
    this.totalVotant=totalVotant;
    this.currentVotant=currentVotant;
    this.percent=percent;
    this.expirationDate = expirationDate;
    this.nomImage = nomImage;
    this.lienImage = lienImage;
    this.espace = espace;
    this.goSpin=goSpin;
    this.panelCollapsed=panelCollapsed;

  }

}

/*
produitResquest
private Long idProd;
private String designProd;
private String descripProd;
private double prixProd;
private double prixminProd;
private double prixmaxProd;
private int qteStockProd;
private String infosMarque;
private int totalVotant;
private int currentVotant=0;
private double percent=0;
private boolean goSpin=false;
private String nomImage;
private String lienImage;
private ProduitTimeLength timeLenght;
private Espace espace;*/
