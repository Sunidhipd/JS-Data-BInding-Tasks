import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario5-grand-parent',
  templateUrl: './scenario5-grand-parent.component.html',
  styleUrls: ['./scenario5-grand-parent.component.css']
})
export class Scenario5GrandParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message:string;
  receiveMessage($event) {
    this.message = $event
  }
}
