import { Component, OnInit, Input } from "@angular/core";
import { Transaction } from "src/app/models/transaction.model";

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.css"],
})
export class TransactionComponent implements OnInit {
  //Input that recieves a transaction from the transactions
  @Input() transaction: Transaction;

  constructor() {}

  ngOnInit(): void {}
}
