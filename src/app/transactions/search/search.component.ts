import { TransactionsService } from "./../../services/transactions.service";
import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  //Ascending Descending character
  order = "\u25BC";

  //The current active button
  active = "date";

  //Whats in the search field.
  search = "";

  constructor(private transactionService: TransactionsService) {}

  //clears the search field.
  clear() {
    this.search = "";
    this.searchBy();
  }

  //Notifies the transaction service what is being entered in the search field.
  searchBy() {
    this.transactionService.searchBy(this.search);
  }

  //Determines what button is active and whether its descending or ascending.
  sortBy(type: string) {
    if (this.active == type) {
      if (this.order == "\u25B2") {
        this.order = "\u25BC";
        this.transactionService.orderBy("desc");
      } else {
        this.order = "\u25B2";
        this.transactionService.orderBy("asc");
      }
    }
    this.active = type;
    this.transactionService.sortBy(type);
  }

  ngOnInit(): void {}
}
