import { TransferService } from "./../services/transfer.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private transferService: TransferService) {}

  modal = false;

  ngOnInit(): void {
    this.transferService.transferStatus.subscribe((status: boolean) => {
      this.modal = status;
    });
  }
}
