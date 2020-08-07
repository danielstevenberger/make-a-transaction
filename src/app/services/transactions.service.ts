import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  type = new Subject<string>();
  order = new Subject<string>();
  search = new Subject<string>();

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
}
