import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5child',
  templateUrl: './scenario5child.component.html',
  styleUrls: ['./scenario5child.component.css']
})
export class Scenario5childComponent implements OnInit {

  message: string="Here's your grand child"
  @Output() messageEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.messageEvent.emit(this.message)
  }

}
