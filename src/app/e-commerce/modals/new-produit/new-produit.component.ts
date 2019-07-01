import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EcommerceService} from "../../services/ecommerce.service";
import {ProduitModel} from "../../models/produit-model";
import {EspaceModel} from "../../models/espace-model";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.scss']
})
export class NewProduitComponent implements OnInit {
  mode=0;
  isVisible= false;
  fileForm: FormGroup;
  produitForm: FormGroup;
  currentFile:File;
  selectedFiles:FileList;
  produit:ProduitModel;
  espaces:EspaceModel[]=[];

  produitLength: { days: 1, hours: 0};
  days = Array.from(Array(31).keys());
  hours = Array.from(Array(24).keys());
  defaultDayOption = '1';

  constructor(public ref:DynamicDialogRef, public config:DynamicDialogConfig,
              private ecommerceService:EcommerceService, private fb:FormBuilder) {

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
  }

  get f(){return this.produitForm.controls;}
  openSelectModal() {
    this.isVisible=true;
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
    this.selectedFiles = event.target.files;
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
    //this.getEspaceSelect();
  }

  getEspaceSelect(){
    let id=2;
    this.ecommerceService.getEspace(id)
      .subscribe(data=>{
          console.log(data)
        },
        error=>{
          console.log(error)
        })
  }


  changeEspace(event) {
    this.produitForm.get('_espace').setValue(event.target.value, {
      onlySelf:true

    })
  }
}
