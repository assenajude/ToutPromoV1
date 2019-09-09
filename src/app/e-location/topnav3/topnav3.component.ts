import { Component, OnInit } from '@angular/core';
import {NewEspaceComponent} from "../../e-commerce/modals/new-espace/new-espace.component";
import {NewProduitComponent} from "../../e-commerce/modals/new-produit/new-produit.component";
import {DialogService} from "primeng/api";

@Component({
  selector: 'app-topnav3',
  templateUrl: './topnav3.component.html',
  styleUrls: ['./topnav3.component.scss'],
  providers:[DialogService],
})
export class Topnav3Component implements OnInit {

  constructor(public dialogService:DialogService) { }

  ngOnInit() {
  }
  openEspaceModal() {
    const ref = this.dialogService.open(NewEspaceComponent, {
      header: 'Nouvel Espace',
      contentStyle: {"overflow": "auto"}
    });
  }

  openProduitModal() {
    const ref = this.dialogService.open(NewProduitComponent, {
      header: 'Nouveau Produit',
      contentStyle: {"overflow": "auto"}
    });
  }
}
