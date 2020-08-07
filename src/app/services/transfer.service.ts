import { TransferComponent } from "./../transfer/transfer.component";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TransferService {
  transferStatus = new Subject<boolean>();
  transferMoney = new Subject<boolean>();

  openConfirm() {
    this.transferStatus.next(true);
  }

  confirmTransfer() {
    this.transferMoney.next(true);
  }

  closeConfirm() {
    this.transferStatus.next(false);
  }

  constructor() {}
}
