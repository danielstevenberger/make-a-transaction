import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  //3 inputs to receive data from card-container and generate cards
  @Input() cardTitle: string;
  @Input() cardImage: string;
  @Input() cardType: string;

  constructor() {}

  ngOnInit(): void {}
}
