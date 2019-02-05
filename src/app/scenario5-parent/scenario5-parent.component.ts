import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-parent',
  templateUrl: './scenario5-parent.component.html',
  styleUrls: ['./scenario5-parent.component.css']
})
export class Scenario5ParentComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  message:string;

  receiveMessage($event) {
    this.message = $event
    this.messageEvent.emit(this.message)
  }
}
