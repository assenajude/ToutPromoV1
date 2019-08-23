import { Component, OnInit } from '@angular/core';
import {NewProduitComponent} from "../modals/new-produit/new-produit.component";
import {DialogService} from "primeng/api";
import {NewEspaceComponent} from "../modals/new-espace/new-espace.component";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  providers: [DialogService]
})
export class MenuBarComponent implements OnInit {

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
