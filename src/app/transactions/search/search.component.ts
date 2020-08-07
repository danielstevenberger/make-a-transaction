import { TransactionsService } from "./../../services/transactions.service";
import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  order = "\u25BC";
  active = "date";
  search = "";

  constructor(private transactionService: TransactionsService) {}

  searchBy() {
    this.transactionService.searchBy(this.search);
  }

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
