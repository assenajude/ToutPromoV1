import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {
  en_US, NgZorroAntdModule, NZ_CAROUSEL_CUSTOM_STRATEGIES, NZ_I18N, NzAvatarModule, NzBadgeModule,
  NzCarouselModule
} from "ng-zorro-antd";
import{NzDropDownModule} from "ng-zorro-antd/dropdown";
import { ELocationComponent } from './e-location/e-location.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { DashboardComponent } from './e-commerce/dashboard/dashboard.component';
import { CommandeComponent } from './e-commerce/commande/commande.component';
import { PanierComponent } from './e-commerce/panier/panier.component';
import { DetailImageComponent } from './e-commerce/detail-image/detail-image.component';
import { SelectionProduitComponent } from './e-commerce/selection-produit/selection-produit.component';
import { VotePrixComponent } from './e-commerce/vote-prix/vote-prix.component';
import { AchatProduitComponent } from './e-commerce/achat-produit/achat-produit.component';
import { AllAchatComponent } from './e-commerce/all-achat/all-achat.component';
import { AllSelectionComponent } from './e-commerce/all-selection/all-selection.component';
import { RightMenuComponent } from './e-commerce/right-menu/right-menu.component';
import { AllPrixComponent } from './e-commerce/all-prix/all-prix.component';
import { NewEspaceComponent } from './e-commerce/modals/new-espace/new-espace.component';
import { NewProduitComponent } from './e-commerce/modals/new-produit/new-produit.component';
import { MainCarouselComponent } from './e-commerce/main-carousel/main-carousel.component';
import { LeftMenuComponent } from './e-commerce/left-menu/left-menu.component';
import {PanelModule} from "primeng/panel";

import {
  CarouselModule,
  ChartModule,
  EditorModule,
  GalleriaModule, LightboxModule,
  MegaMenuModule,
  PaginatorModule, TabMenuModule
} from "primeng/primeng";
import { FooterComponent } from './e-commerce/footer/footer.component';
import {DynamicDialogComponent, DynamicDialogModule} from "primeng/dynamicdialog";
import {FlipStrategy} from "./flip-strategy";

@NgModule({
  declarations: [
    AppComponent,
    ELocationComponent,
    ECommerceComponent,
    DashboardComponent,
    CommandeComponent,
    PanierComponent,
    DetailImageComponent,
    SelectionProduitComponent,
    VotePrixComponent,
    AchatProduitComponent,
    AllAchatComponent,
    AllSelectionComponent,
    RightMenuComponent,
    AllPrixComponent,
    NewEspaceComponent,
    NewProduitComponent,
    MainCarouselComponent,
    LeftMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
    PanelModule,
    PaginatorModule,
    MegaMenuModule,
    ChartModule,
    EditorModule,
    CarouselModule,
    GalleriaModule,
    NzAvatarModule,
    NzBadgeModule,
    TabMenuModule,
    DynamicDialogModule,
    NzCarouselModule

  ],
  entryComponents: [
    NewProduitComponent
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: NZ_CAROUSEL_CUSTOM_STRATEGIES,
      useValue: [
        {
          name: 'flip',
          strategy: FlipStrategy,
        },
      ],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
