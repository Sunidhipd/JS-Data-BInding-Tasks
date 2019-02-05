import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  Apptitle: string='Data Binding Tasks'
  constructor() { }

  ngOnInit() {
  }
  print(value){
    console.log(value);
  }
}
