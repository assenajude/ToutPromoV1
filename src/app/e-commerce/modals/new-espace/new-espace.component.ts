import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EcommerceService} from "../../services/ecommerce.service";
import {EspaceModel} from "../../models/espace-model";

@Component({
  selector: 'app-new-espace',
  templateUrl: './new-espace.component.html',
  styleUrls: ['./new-espace.component.scss']
})
export class NewEspaceComponent implements OnInit {
  espaceForm: FormGroup;
  submitted=false;
  espace:EspaceModel;
  constructor(public ref:DynamicDialogRef,
              public config:DynamicDialogConfig, private fb:FormBuilder,
              private ecommerceService:EcommerceService) {

    this.espaceForm = this.fb.group({
      espaceName : '',
      espaceDescrip : '',
    });
  }

  ngOnInit() {
  }


  fe() {
    return this.espaceForm.controls;
  }

  onEspaceFormSubmit() {
    this.submitted=true;
    this.ecommerceService.addEspace(this.espaceForm.value)
      .subscribe(data=>{
          this.espace=data;
          window.alert("l'espace"+this.espace.espaceName+" a été ajouté avec succès!")
          console.log(data);
        },
        error=>{
          console.log(error);
        })

    this.espaceForm.reset();

  }

}
