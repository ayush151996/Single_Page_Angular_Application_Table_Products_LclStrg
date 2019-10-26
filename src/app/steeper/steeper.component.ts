import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-steeper',
  templateUrl: './steeper.component.html',
  styleUrls: ['./steeper.component.css']
})
export class SteeperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  sanu: any = {};
  

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  }
  add_nm(){
    this.sanu.fname = this.firstFormGroup.value.firstCtrl;
    console.log(this.sanu.fname);
  }
  add_prc(){
    this.sanu.prc = this.secondFormGroup.value.secondCtrl;
    console.log(this.sanu.prc);
    let products = JSON.parse(localStorage.getItem('prdcts')) || [];
    products.push(this.sanu);
    localStorage.setItem("prdcts", JSON.stringify(products))
  }

}
