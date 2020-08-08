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

  //determines ascending or descending for order pipe npm
  reverse: boolean = false;

  //Determines what to sort by. Starts with date.
  sortBy = "date";

  //Will contain what the user types in the search field
  searchBy: string;

  ngOnInit(): void {
    //Subcrices to the transaction service to get notified when text is being entered in the search field.
    this.transactionService.search.subscribe((search: string) => {
      this.searchBy = search;
    });
    //Subcribes to the transaction service to get notified whether it should be ascending or descending.
    this.transactionService.order.subscribe((order: string) => {
      if (order == "desc") {
        this.reverse = false;
      } else {
        this.reverse = true;
      }
    });
    //Subcribes to the transaction service to get notified what to sort by
    this.transactionService.type.subscribe((type: string) => {
      this.sortBy = type;
      if (type == "beneficiary") {
        this.sortBy = "merchant";
      } else {
        this.sortBy = type;
      }
    });
    //Subctrices to the transaciton service to get notified if a transaction happened
    this.transactionService.transaction.subscribe((data: any) => {
      this.data = data;
      //Changes the amount from strings to numbers so they can be sorted ascending and descending
      this.transactionService.convertCopy(this.data);
    });
    //Uses httpClient to recieve the data from the .json file
    this.httpClient
      .get("../../assets/transaction-data/transactions.json")
      .subscribe((data) => {
        this.data = [...data["data"]];
        //Changes the amount from strings to numbers so they can be sorted ascending and descending
        this.transactionService.convertCopy(this.data);
      });
  }
}
