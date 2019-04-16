import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-child",
  template: `
    <div class="notification is-primary">
      <h3>Child</h3>
      Say {{message}}
      <button class="btn btn-primary" (click)="sendMessage()">Send Message</button>
    </div>
  `,
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {

  //@Input() message: string;
  message: String = "Hola Mundo!";

  @Output() messageEvent = new EventEmitter<String>();

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  sendMessage() {
    // this.messageEvent.emit(this.message);
  }
}
