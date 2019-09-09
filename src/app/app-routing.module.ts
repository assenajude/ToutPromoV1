import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ELocationComponent} from "./e-location/e-location.component";
import {ECommerceComponent} from "./e-commerce/e-commerce.component";
import {DashboardComponent} from "./e-commerce/dashboard/dashboard.component";
import {CommandeComponent} from "./e-commerce/commande/commande.component";
import {PanierComponent} from "./e-commerce/panier/panier.component";
import {DetailImageComponent} from "./e-commerce/detail-image/detail-image.component";
import {SelectionProduitComponent} from "./e-commerce/selection-produit/selection-produit.component";
import {VotePrixComponent} from "./e-commerce/vote-prix/vote-prix.component";
import {AchatProduitComponent} from "./e-commerce/achat-produit/achat-produit.component";
import {AllAchatComponent} from "./e-commerce/all-achat/all-achat.component";
import {AllSelectionComponent} from "./e-commerce/all-selection/all-selection.component";
import {AllPrixComponent} from "./e-commerce/all-prix/all-prix.component";
import {RightMenuComponent} from "./e-commerce/right-menu/right-menu.component";
import {DemarrerComponent} from "./demarrer/demarrer.component";
import {Topnav1Component} from "./e-location/topnav1/topnav1.component";
import {Topnav2Component} from "./e-location/topnav2/topnav2.component";
import {Topnav3Component} from "./e-location/topnav3/topnav3.component";

const routes: Routes = [
  {path: 'ecommerce', component: ECommerceComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'commande', component: CommandeComponent},
      {path: 'panier', component: PanierComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'detail', component: DetailImageComponent},
      {path: 'selection', component: SelectionProduitComponent},
      {path: 'vote', component: VotePrixComponent},
      {path: 'achat', component: AchatProduitComponent},
      {path: 'allachat', component: AllAchatComponent},
      {path: 'allselection', component: AllSelectionComponent},
      {path: 'allprix', component: AllPrixComponent},
      {path: 'rightmenu', component: RightMenuComponent},

    ],
    runGuardsAndResolvers: 'always'},
  {path: 'elocation', component: ELocationComponent,
   children:[
     {path:'topnav1',component:Topnav1Component},
     {path:'topnav2', component:Topnav2Component},
     {path:'topnav3', component:Topnav3Component},
   ]},

  {path:'demarrer', component:DemarrerComponent},
  {path: '', redirectTo: '/demarrer', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
