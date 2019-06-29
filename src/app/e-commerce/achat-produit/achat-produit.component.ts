import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-achat-produit',
  templateUrl: './achat-produit.component.html',
  styleUrls: ['./achat-produit.component.scss']
})
export class AchatProduitComponent implements OnInit {

percent=100;

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  constructor() {
   
  }

  ngOnInit() {

  }



}
