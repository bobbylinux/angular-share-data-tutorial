import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  template: `<h1>Parent</h1>
            Message: {{message}}
            <app-child (messageEvent)="receiveMessage($event)"></app-child>`,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit/*, AfterViewInit*/ {
  
  //@ViewChild(ChildComponent) child; 
  
  message: String = "hello world";
  
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  
  /*ngAfterViewInit(){
    this.message = this.child.message; 
  }*/
  
  receiveMessage($event) {
    this.message = $event;
  }

}
