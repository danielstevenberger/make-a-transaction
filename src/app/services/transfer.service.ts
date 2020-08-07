import { Transfer } from "./../interfaces/transfer.interface";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TransferService {
  transferStatus = new Subject<boolean>();
  transferMoney = new Subject<boolean>();
  transferInfo = new Subject<Transfer>();

  openConfirm(fromAccount: string, toAccount: string, amount: number) {
    this.transferStatus.next(true);
    this.transferInfo.next({ fromAccount, toAccount, amount });
  }

  confirmTransfer() {
    this.transferMoney.next(true);
  }

  closeConfirm() {
    this.transferStatus.next(false);
  }

  constructor() {}
}
