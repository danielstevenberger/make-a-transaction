import { Transfer } from "./../interfaces/transfer.interface";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TransferService {
  //status of the modal
  transferStatus = new Subject<boolean>();
  //used to notify that a transfer has been confirmed
  transferMoney = new Subject<boolean>();
  //used to send data from the transter component to the modal
  transferInfo = new Subject<Transfer>();

  //Used to notify that the modal shoul open and sends the data to the modal through the homecomponent..
  openConfirm(fromAccount: string, toAccount: string, amount: number) {
    this.transferStatus.next(true);
    this.transferInfo.next({ fromAccount, toAccount, amount });
  }

  //used to confirms that a transfer has happened
  confirmTransfer() {
    this.transferMoney.next(true);
  }

  //used to cancel the transfer and close the modal
  closeConfirm() {
    this.transferStatus.next(false);
  }

  constructor() {}
}
