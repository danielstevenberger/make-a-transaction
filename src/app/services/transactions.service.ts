import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Transaction } from "../models/transaction.model";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  //Used to know which type to sort by and when it is switched
  type = new Subject<string>();
  //Used to know when to switch between ascending and descending
  order = new Subject<string>();
  //used to know when text is being entered in the search field.
  search = new Subject<string>();
  //used to know when a transaction is being added.
  transaction = new Subject<Transaction[]>();

  constructor() {}

  //notiefies the order
  orderBy(order: string) {
    this.order.next(order);
  }

  //notifies how to sort
  sortBy(type: string) {
    this.type.next(type);
  }

  //notifies what to search
  searchBy(search: string) {
    this.search.next(search);
  }

  //notifies a new transaction
  newTransaction(data: Transaction[]) {
    this.transaction.next(data);
  }

  //converts the amount as a string in a transaction to a number
  convertCopy(data: Transaction[]) {
    data.forEach((transaction: Transaction) => {
      transaction.amount = +transaction.amount;
    });
  }
}
