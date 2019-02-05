import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario4-parent',
  templateUrl: './scenario4-parent.component.html',
  styleUrls: ['./scenario4-parent.component.css']
})
export class Scenario4ParentComponent implements OnInit {

  Message: string;

  constructor() { }

  ngOnInit() {
  }
  messageChildHandler(value : string){
    this.Message=value;
  }

}
