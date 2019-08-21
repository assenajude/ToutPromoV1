import { Component, OnInit } from '@angular/core';
import {DialogService, MenuItem} from "primeng/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EcommerceService} from "./services/ecommerce.service";
import {Observable} from "rxjs";
import {LigneCommandeModel} from "./models/ligneCommande-model";
import {ShoppingCartService} from "./services/shopping-cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EspaceModel} from "./models/espace-model";
import {NewProduitComponent} from "./modals/new-produit/new-produit.component";

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
  providers: [DialogService]
})
export class ECommerceComponent implements OnInit {
  submitted=false;
  espaceForm: FormGroup;
  public cartItems:Observable<LigneCommandeModel[]>;
  nbItem:number;
items:MenuItem[];
  isVisible=false;
  espace:EspaceModel;
  constructor(private fb:FormBuilder, private ecommerceService:EcommerceService,
              private shopcartService:ShoppingCartService,
              private route:ActivatedRoute,
              private router:Router,
              public dialogService:DialogService) {



    this.cartItems = this.shopcartService.getItems();
    this.cartItems.subscribe(_=>_);
    this.shopcartService.getTotalQuantite().subscribe(resp=>{
      this.nbItem=resp
      console.log(this.nbItem)
    })
  }

  ngOnInit() {
    this.items = [
      {
        label:'Accueil', icon:'pi pi-home',
        command:()=>{this.router.navigateByUrl("/ecommerce")}

      },
      {
        label: 'Collection', icon: 'pi pi-clone',
        items: [
          [
            {
              label: 'TV 1',
              items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
            },
            {
              label: 'TV 2',
              items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
            }
          ],
          [
            {
              label: 'TV 3',
              items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
            },
            {
              label: 'TV 4',
              items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
            }
          ]
        ]
      },
      {
        label: 'Accessoires', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
            },
            {
              label: 'Sports 2',
              items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
            },

          ],
          [
            {
              label: 'Sports 3',
              items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
            },
            {
              label: 'Sports 4',
              items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
            },
            {
              label: 'Sports 6',
              items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
            }
          ]
        ]
      },
      {
        label: 'Nos Magasin', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
            },
            {
              label: 'Sports 2',
              items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
            },

          ],
          [
            {
              label: 'Sports 3',
              items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
            },
            {
              label: 'Sports 4',
              items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
            },
            {
              label: 'Sports 6',
              items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
            }
          ]
        ]
      },
      {
        label: 'Bientôt dans ToutPromo', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
            },
            {
              label: 'Sports 2',
              items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
            },

          ],
          [
            {
              label: 'Sports 3',
              items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
            },
            {
              label: 'Sports 4',
              items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
            },
            {
              label: 'Sports 6',
              items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
            }
          ]
        ]
      },
      {
        label: 'En famille', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
            },
            {
              label: 'Sports 2',
              items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
            },

          ],
          [
            {
              label: 'Sports 3',
              items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
            },
            {
              label: 'Sports 4',
              items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
            },
            {
              label: 'Sports 6',
              items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
            }
          ]
        ]
      },
      {
        label: 'Fichier', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Espace',
              items:
                [{label: 'Nouveau',
                  command:()=>{this.isVisible=true}
              },{label: 'Editer'}]
            },
            {
              label: 'Client',
              items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
            },

          ],
          [
            {
              label: 'Produit',
              items: [{label: 'Nouveau', command:()=> {
                    const ref = this.dialogService.open(NewProduitComponent, {
                      header: 'Nouveau produit',
                      contentStyle: {"overflow": "auto"}
                    });
                }

                },
                {label: 'Editer'}]
            },
            {
              label: 'Sports 4',
              items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
            },
            {
              label: 'Sports 6',
              items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
            }
          ]
        ]
      }
    ];

  }

  handleCancel() {
    this.isVisible=false;
  }

  handleOk() {
    this.isVisible=false;
  }

  fe() {
    return this.espaceForm.controls;
  }


/*
  $(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready

// breakpoint and up
    $(window).resize(function(){
      if ($(window).width() >= 980){

        // when you hover a toggle show its dropdown menu
        $(".navbar .dropdown-toggle").hover(function () {
          $(this).parent().toggleClass("show");
          $(this).parent().find(".dropdown-menu").toggleClass("show");
        });

        // hide the menu when the mouse leaves the dropdown
        $( ".navbar .dropdown-menu" ).mouseleave(function() {
          $(this).removeClass("show");
        });

        // do something here
      }
    });



// document ready
  });*/
}
