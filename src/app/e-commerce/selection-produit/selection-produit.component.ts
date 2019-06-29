import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EcommerceService} from "../services/ecommerce.service";
import {EspaceModel} from "../models/espace-model";
import {ProduitModel} from "../models/produit-model";
import {first} from "rxjs/operators";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {LigneCommandeModel} from "../models/ligneCommande-model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NzModalRef, NzModalService} from "ng-zorro-antd";
import {NewProduitComponent} from "../modals/new-produit/new-produit.component";

@Component({
  selector: 'app-selection-produit',
  templateUrl: './selection-produit.component.html',
  styleUrls: ['./selection-produit.component.scss']
})
export class SelectionProduitComponent implements OnInit {
  isVisible= false;
  currentFile:File;
  selectedFiles:FileList;
  mode = 0;
  fileForm: FormGroup;
  produitForm: FormGroup;
  produit:ProduitModel;
  espaces:EspaceModel[]=[];
  selecProds: any;
  currentPage=0;
  pageSize=5;
  totalElements:number;
  totalPage:number;
  visible=false;
  imageAjoute:any;
  descripAjoute:string;
  espace2:EspaceModel;
  sub:Subscription;

  produitLength: { days: 1, hours: 0};
  days = Array.from(Array(31).keys());
  hours = Array.from(Array(24).keys());
  defaultDayOption = '1';

  constructor( private fb:FormBuilder,
               private ecommerceService:EcommerceService,
               private shopcartService:ShoppingCartService,
               private route:ActivatedRoute,
               private router:Router,
               private modalService:NzModalService) {
    this.sub=this.ecommerceService.getEspace(2).subscribe(data=>{
      this.espace2=data;
      console.log(this.espace2)
    })

    this.fileForm=this.fb.group({
      image:[null, Validators.required]
    });

    this.produitForm=this.fb.group({
      idProd:null,
      designProd:'',
      descripProd:'',
      prixProd:'',
      prixminProd:'',
      prixmaxProd:'',
      qteStockProd:null,
      infosMarque: '',
      totalVotant:'',
      days:null,
      hours:null,
      nomImage: '',
      lienImage:'',
      espace:null

    });
    this.f.days.setValue(1, {onlySelf: true});
    this.f.hours.setValue(0, {onlySelf: true});
  }

  ngOnInit() {
    this.getProdBySelectEsp();
  }
get f(){return this.produitForm.controls;}
  openSelectModal() {
    this.isVisible=true;

  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.isVisible = false;
  }

  getEspaces(){
    return  this.ecommerceService.getEspaces().subscribe(data=>
      {
        console.log(data);
        this.espaces=data;
      },
      error=>{
        console.log(error)
      })
  }

  getEspaceSelect(){
    let id=1;
    this.ecommerceService.getEspace(id)
      .subscribe(data=>{
          console.log(data)
        },
        error=>{
          console.log(error)
        })
  }


  onFileFormSubmit() {
    this.currentFile = this.selectedFiles.item(0);
    this.ecommerceService.addProduitFile(this.currentFile)
      .subscribe(data=>{
          this.produit=data;
          this.getEspaces();
          this.produitForm.get('idProd').setValue(this.produit.idProd);
          this.produitForm.get('nomImage').setValue(this.produit.nomImage);
          this.produitForm.get('lienImage').setValue(this.produit.lienImage);


        },
        error=>{
          console.log(error);

        })

    this.mode=1;
  }

  onFileChange(event) {
    this.selectedFiles=event.target.files;

  }


  onProduitFormSubmit() {
    this.ecommerceService.updateProduit(this.produitForm.value)
      .pipe(first())
      .subscribe(data=>{
          alert("produit ajouter avec succès!")
          console.log(data);

        },
        error1 => {
          console.log(error1)
          alert("impossible d'ajouter le produit!")
        })
    this.produitForm.reset();
    this.mode=0;
    this.getEspaceSelect();
  }


  changeEspace(event) {
    this.produitForm.get('_espace').setValue(event.target.value, {
      onlySelf:true

    })

  }

  increase(produit){
    produit.percent= produit.percent + 100/produit.totalVotant;
    produit.currentVotant++;
    if (produit.percent >100 || produit.currentVotant==produit.totalVotant) {
      produit.percent = 100;
      produit.currentVotant=produit.totalVotant;
      produit.panelCollapsed=true;
      produit.goSpin=true;

      let votedProduit={
        'idProd':produit.idProd,
      'designProd':produit.designProd,
      'descripProd':produit.descripProd,
      'prixProd':produit.prixProd,
      'prixminProd':produit.prixminProd,
      'prixmaxProd':produit.prixmaxProd,
      'qteStockProd':produit.qteStockProd,
      'infosMarque':produit.infosMarque,
      'totalVotant':produit.totalVotant,
      'currentVotant':produit.currentVotant,
      'percent':produit.percent,
        'goSpin':false,
        'panelCollapses':false,
      'days':30,
        'hours':0,
      'nomImage':produit.nomImage,
      'lienImage':produit.lienImage,
      'espace':this.espace2
      };
      this.ecommerceService.updateProduit(votedProduit).subscribe(data=>{
        console.log(data)
      });
    }
  }
  decline(produit): void {
    produit.percent = produit.percent - 100/produit.totalVotant;
    produit.currentVotant--;
    if (produit.percent<= 0) {
      produit.percent = 0;
      produit.currentVotant=0;
    }
  }

  getTimeRemaining = (select) => {
    const expirationTime = new Date(select.expirationDate).getTime();
    const currentTime = new Date().getTime();

    var difference_ms = expirationTime - currentTime;
    var seconds = Math.floor( (difference_ms/1000) % 60 );
    var minutes = Math.floor( (difference_ms/1000/60) % 60 );
    var hours = Math.floor( (difference_ms/(1000*60*60)) % 24 );
    var days = Math.floor( difference_ms/(1000*60*60*24) );

    let timeRemaining=days+"J"+ hours +"H"+ minutes +"min";

   /* if(days > 0) {
      timeRemaining = days + " days left";
    } else if (hours > 0) {
      timeRemaining = hours + " hours left";
    } else if (minutes > 0) {
      timeRemaining = minutes + " minutes left";
    } else if(seconds > 0) {
      timeRemaining = seconds + " seconds left";
    } else {
      timeRemaining = "less than a second left";
    }*/

    return timeRemaining;
  }


  getProdBySelectEsp() {
    let id=1;
    this.ecommerceService.getProduitsByEspace(id, this.currentPage, this.pageSize)
      .pipe(first())
      .subscribe(data=>{
          this.selecProds=data;
          this.totalElements=data.totalElements;
          this.totalPage = data.totalPages;
          console.log(this.selecProds);
        },
        error=>{
          console.log(error)
        })

  }

  addToCart(cmd: ProduitModel) {
    let item=this.shopcartService.findItem(cmd.idProd);

    if (item) {
      alert('ce produit existe deja dans le panier!');
      //item.produit=cmd;
      item.quantite++;
      this.shopcartService.ItemInCartChanged.subscribe();
    }
    else
    {
      let quantite = 1;
      let ligneCommande = new LigneCommandeModel(cmd.idProd, cmd, quantite);
      this.shopcartService.addToCart(ligneCommande);
      this.visible=true;
      this.imageAjoute=ligneCommande.produit.lienImage;
      this.descripAjoute=ligneCommande.produit.designProd;
    }

  }

  poursuivreAchat() {
this.visible=false;
  }

  allerPanier() {
this.visible=false;
this.router.navigateByUrl("/ecommerce/panier");

  }
}
