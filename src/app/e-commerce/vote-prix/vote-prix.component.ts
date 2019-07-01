import { Component, OnInit } from '@angular/core';
import {DialogService} from "primeng/api";
import {NewProduitComponent} from "../modals/new-produit/new-produit.component";

@Component({
  selector: 'app-vote-prix',
  templateUrl: './vote-prix.component.html',
  styleUrls: ['./vote-prix.component.scss'],
  providers: [DialogService]
})
export class VotePrixComponent implements OnInit {
  percent=100;
  dynamic: number;
  type: string;

  constructor(public dialogService:DialogService) { }

  ngOnInit() {
  }

  increase(): void {
    this.percent = this.percent + 10;
    if (this.percent > 100) {
      this.percent = 100;
    }
  }
  decline(): void {
    this.percent = this.percent - 10;
    if (this.percent < 0) {
      this.percent = 0;
    }
  }


  showProduitModal() {
    const ref = this.dialogService.open(NewProduitComponent, {
      header: 'Nouveau produit',
      contentStyle: {"overflow": "auto"}
    });
  }
}
