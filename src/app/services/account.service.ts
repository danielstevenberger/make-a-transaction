import { Injectable } from "@angular/core";
import { Account } from "./../models/account.model";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  private account: Account = {
    accountName: "Free Checking(4692)",
    balance: 5824.76,
  };

  getAccount() {
    return this.account;
  }

  getBalance() {
    return this.account.balance;
  }

  subtractBalance(amount: number) {
    this.account.balance =
      Math.round((this.account.balance - amount) * 100) / 100;
  }

  constructor() {}
}
