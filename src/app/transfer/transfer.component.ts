import { TransactionsService } from "./../services/transactions.service";
import { Transaction } from "src/app/models/transaction.model";
import { HttpClient } from "@angular/common/http";
import { AccountService } from "./../services/account.service";
import { Account } from "./../models/account.model";
import { TransferService } from "./../services/transfer.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-transfer",
  templateUrl: "./transfer.component.html",
  styleUrls: ["./transfer.component.css"],
})
export class TransferComponent implements OnInit {
  constructor(
    private transferService: TransferService,
    private accountService: AccountService,
    private httpClient: HttpClient,
    private transactionsService: TransactionsService
  ) {}

  data: Transaction[];
  errorMessage = false;
  account: Account;
  overdrawn = false;

  transferForm = new FormGroup({
    toAccount: new FormControl("", Validators.required),
    amount: new FormControl("", [Validators.required, Validators.min(0)]),
  });

  onSubmit() {
    if (!this.transferForm.valid) {
      this.errorMessage = true;
      this.overdrawn = false;
    }
    if (
      this.transferForm.valid &&
      this.accountService.getBalance() - this.transferForm.get("amount").value <
        -500
    ) {
      this.overdrawn = true;
      this.errorMessage = false;
    }
    if (
      this.transferForm.valid &&
      this.accountService.getBalance() -
        this.transferForm.get("amount").value >=
        -500
    ) {
      this.transferService.openConfirm(
        this.account.accountName,
        this.transferForm.get("toAccount").value,
        this.transferForm.get("amount").value
      );
      this.overdrawn = false;
    }
  }

  ngOnInit(): void {
    this.account = this.accountService.getAccount();

    this.transferService.transferMoney.subscribe((transferMoney: boolean) => {
      this.accountService.subtractBalance(
        this.transferForm.get("amount").value
      );
      let transaction: Transaction = {
        categoryCode: "#c12020",
        transactionDate: new Date().valueOf(),
        merchantLogo: "https://via.placeholder.com/150",
        merchant: this.transferForm.get("toAccount").value,
        transactionType: "Online Transfer",
        amount: this.transferForm.get("amount").value,
      };

      this.data.push(transaction);
      this.transactionsService.newTransaction(this.data);
      this.transferForm.reset();
      this.errorMessage = false;
    });

    this.httpClient
      .get("../../assets/transaction-data/transactions.json")
      .subscribe((data) => {
        this.data = data["data"];
      });
  }
}
