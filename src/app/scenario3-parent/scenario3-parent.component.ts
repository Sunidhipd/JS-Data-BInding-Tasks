import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario3-parent',
  templateUrl: './scenario3-parent.component.html',
  styleUrls: ['./scenario3-parent.component.css']
})
export class Scenario3ParentComponent implements OnInit {

  valueParent: string;
  constructor() { }

  ngOnInit() {
  }
  print(msg){
    this.valueParent=msg;
  }


}
