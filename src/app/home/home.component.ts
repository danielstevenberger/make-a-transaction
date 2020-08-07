import { Transfer } from "./../interfaces/transfer.interface";
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
  fromAccount: string;
  toAccount: string;
  amount: number;

  ngOnInit(): void {
    this.transferService.transferStatus.subscribe((status: boolean) => {
      this.modal = status;
    });
    this.transferService.transferInfo.subscribe((transferInfo: Transfer) => {
      this.fromAccount = transferInfo.fromAccount;
      this.toAccount = transferInfo.toAccount;
      this.amount = transferInfo.amount;
    });
  }
}
