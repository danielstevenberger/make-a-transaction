import { TransactionsService } from "./../services/transactions.service";
import { Component, OnInit } from "@angular/core";
import { Transaction } from "../models/transaction.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"],
})
export class TransactionsComponent implements OnInit {
  data: Transaction[];

  constructor(
    private httpClient: HttpClient,
    private transactionService: TransactionsService
  ) {}

  order: string;
  reverse: boolean = false;

  sortBy = "date";
  oderBy = "desc";
  searchBy = "";

  ngOnInit(): void {
    this.transactionService.search.subscribe((search: string) => {
      this.searchBy = search;
    });
    this.transactionService.order.subscribe((order: string) => {
      this.oderBy = order;
      if (order == "desc") {
        this.reverse = false;
      } else {
        this.reverse = true;
      }
    });
    this.transactionService.type.subscribe((type: string) => {
      this.sortBy = type;
      if (type == "beneficiary") {
        this.order = "merchant";
      } else {
        this.order = type;
      }
    });
    this.httpClient
      .get("../../assets/transaction-data/transactions.json")
      .subscribe((data) => {
        this.data = [...data["data"]];
        this.transactionService.convertCopy(this.data);
      });
    this.transactionService.transaction.subscribe((data: any) => {
      this.data = data;
      this.transactionService.convertCopy(this.data);
    });
  }
}
