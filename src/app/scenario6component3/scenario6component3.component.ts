import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario6component3',
  templateUrl: './scenario6component3.component.html',
  styleUrls: ['./scenario6component3.component.css']
})
export class Scenario6component3Component implements OnInit {
  @Input() childMessage:string;

  constructor() { }

  ngOnInit() {
  }

}
