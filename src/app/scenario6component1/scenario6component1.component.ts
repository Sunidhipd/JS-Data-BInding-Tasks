import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario6component1',
  templateUrl: './scenario6component1.component.html',
  styleUrls: ['./scenario6component1.component.css']
})
export class Scenario6component1Component implements OnInit {
  message:string;

  receiveMessage($event) {
    this.message = $event
  }

  constructor() { }

  ngOnInit() {
  }

}
