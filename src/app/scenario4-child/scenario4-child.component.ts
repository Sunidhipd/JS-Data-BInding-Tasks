import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-child',
  templateUrl: './scenario4-child.component.html',
  styleUrls: ['./scenario4-child.component.css']
})
export class Scenario4ChildComponent implements OnInit {

  message: String;

  @Output() messageChild=new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  // onSubmit(){
  //   this.messageChild.emit(this.message)
  // }

}
