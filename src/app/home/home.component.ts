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

  //Used to determine if the modal is open
  modal = false;

  //Used to send information to the modal component
  fromAccount: string;
  toAccount: string;
  amount: number;

  ngOnInit(): void {
    //Subcribes to get notified when the modal is open. Other option could have been using an Output and an EventEmitter
    this.transferService.transferStatus.subscribe((status: boolean) => {
      this.modal = status;
    });

    //Recieves the data from the transfer component when a user hits submit. This data then is viewd in the modal component.
    this.transferService.transferInfo.subscribe((transferInfo: Transfer) => {
      this.fromAccount = transferInfo.fromAccount;
      this.toAccount = transferInfo.toAccount;
      this.amount = transferInfo.amount;
    });
  }
}
