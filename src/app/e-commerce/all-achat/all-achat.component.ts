import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-achat',
  templateUrl: './all-achat.component.html',
  styleUrls: ['./all-achat.component.scss']
})
export class AllAchatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
/*


import { Component, OnInit } from '@angular/core';
import {DialogService, MenuItem} from "primeng/api";
import {NzModalService} from "ng-zorro-antd";
import {NewProduitComponent} from "../modals/new-produit/new-produit.component";
import {first} from "rxjs/operators";
import {EcommerceService} from "../services/ecommerce.service";
import {$} from "protractor";

@Component({
  selector: 'app-achat-produit',
  templateUrl: './achat-produit.component.html',
  styleUrls: ['./achat-produit.component.scss'],
  providers: [DialogService]

})
export class AchatProduitComponent implements OnInit {

  percent=100;
  promoProds:any;
  totalElements:number;
  totalPage:number;
  currentPage=0;
  pageSize=5;
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  constructor(private ecommerceService:EcommerceService,  private modalService:NzModalService, public dialogService:DialogService) {


  }

  carouselSize(array, size) {
    let results = [];
    results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }

  ngOnInit() {
    this.carouselController();
    this.ecommerceService.getAllProdByEspace(3).subscribe(
      data => {
        this.promoProds = this.carouselSize(data,5);
        /!* let last = this.promoProds[this.promoProds.length-1].length;
         if(this.promoProds.length > 1 && last < 4) {
           this.promoProds[this.promoProds.length-1] = [ ...this.promoProds[this.promoProds.length-1] , ...this.promoProds[0].slice(0, 4-last) ];
         }*!/
      });


  }




  openProduitModal() {
    const ref = this.dialogService.open(NewProduitComponent, {
      header: 'Nouveau produit',
      contentStyle: {"overflow": "auto"}
    });
  }

  carouselController (){
    let carouselLength = ('.carousel-item').length - 1;

// If there is more than one item
    if (carouselLength) {
      $('.carousel-control-next').removeClass('d-none');
    }

    $('.carousel').carousel({
      interval: false,
      wrap: false
    }).on('slide.bs.carousel', function (e) {
      // First one
      if (e.to == 0) {
        $('.carousel-control-prev').addClass('d-none');
        $('.carousel-control-next').removeClass('d-none');
      } // Last one
      else if (e.to == carouselLength) {
        $('.carousel-control-prev').removeClass('d-none');
        $('.carousel-control-next').addClass('d-none');
      } // The rest
      else {
        $('.carousel-control-prev').removeClass('d-none');
        $('.carousel-control-next').removeClass('d-none');
      }
    });
  }

}
*/
