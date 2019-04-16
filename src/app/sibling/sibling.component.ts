import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-sibling",
  template: `
    <h1>Sibling</h1>
    {{message}}
    <button class="btn btn-warning" (click)="newMessage()">New Message</button>`,
  styleUrls: ["./sibling.component.css"]
})
export class SiblingComponent implements OnInit {
  constructor(private data: DataService) {}

  message: String;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage("Hello From Sibling");
  }
}
