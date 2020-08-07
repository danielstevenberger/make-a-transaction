import { Component, OnInit } from "@angular/core";
import { Transaction } from "../models/transaction.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"],
})
export class TransactionsComponent implements OnInit {
  test: Transaction[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get("../../assets/transaction-data/transactions.json")
      .subscribe((data) => {
        this.test = data["data"];
      });
  }
}
