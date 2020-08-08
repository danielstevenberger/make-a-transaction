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

  //returns the account
  getAccount() {
    return this.account;
  }

  //returns the balance of the account
  getBalance() {
    return this.account.balance;
  }

  //Subtracts the amount being transferred from the account
  subtractBalance(amount: number) {
    this.account.balance =
      Math.round((this.account.balance - amount) * 100) / 100;
  }

  constructor() {}
}
