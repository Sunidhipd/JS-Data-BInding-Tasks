import { Component, EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-scenario6component2',
  templateUrl: './scenario6component2.component.html',
  styleUrls: ['./scenario6component2.component.css']
})
export class Scenario6component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  message: string = "Component 2!"
  @Output() messageEvent= new EventEmitter<string>();
 
  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}
