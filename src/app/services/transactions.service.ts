import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Transaction } from "../models/transaction.model";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  type = new Subject<string>();
  order = new Subject<string>();
  search = new Subject<string>();
  transaction = new Subject<Transaction[]>();

  constructor() {}

  orderBy(order: string) {
    this.order.next(order);
  }

  sortBy(type: string) {
    this.type.next(type);
  }

  searchBy(search: string) {
    this.search.next(search);
  }

  newTransaction(data: Transaction[]) {
    this.transaction.next(data);
  }

  convertCopy(data: Transaction[]) {
    data.forEach((transaction: Transaction) => {
      transaction.amount = +transaction.amount;
    });
  }
}
