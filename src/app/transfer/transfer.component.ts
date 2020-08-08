import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { TransactionsService } from "./../services/transactions.service";
import { AccountService } from "./../services/account.service";
import { TransferService } from "./../services/transfer.service";
import { Transaction } from "src/app/models/transaction.model";
import { Account } from "./../models/account.model";

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

  //used so the transfer can be pushed to the transaction list
  data: Transaction[];
  //boolean to notify a warning message
  errorMessage = false;
  //The account. Object contains an account name and balance.
  account: Account;
  //boolean to notify and overdraw over $500
  overdrawn = false;

  //Creates the reactive form with validators.
  transferForm = new FormGroup({
    toAccount: new FormControl("", Validators.required),
    amount: new FormControl("", [Validators.required, Validators.min(0)]),
  });

  //When the user submits the form
  onSubmit() {
    //If the form is not valid and not overdrawn
    if (!this.transferForm.valid) {
      this.errorMessage = true;
      this.overdrawn = false;
    }
    //If the form is valid and the account is overdrawn
    if (
      this.transferForm.valid &&
      this.accountService.getBalance() - this.transferForm.get("amount").value <
        -500
    ) {
      this.overdrawn = true;
      this.errorMessage = false;
    }
    //If the form is valid and not overdrawn
    if (
      this.transferForm.valid &&
      this.accountService.getBalance() -
        this.transferForm.get("amount").value >=
        -500
    ) {
      //Notifies the modal to open and sends the form data to it.
      this.transferService.openConfirm(
        this.account.accountName,
        this.transferForm.get("toAccount").value,
        this.transferForm.get("amount").value
      );
      //resets the overdraw warning
      this.overdrawn = false;
      //resets the error message
      this.errorMessage = false;
    }
  }

  ngOnInit(): void {
    // recieves the data about the account
    this.account = this.accountService.getAccount();

    //Subscribes to the transfer service to know if a transfer has been confirmed.
    this.transferService.transferMoney.subscribe((transferMoney: boolean) => {
      this.accountService.subtractBalance(
        this.transferForm.get("amount").value
      );
      //Creates a new transaction
      let transaction: Transaction = {
        categoryCode: "#c12020",
        transactionDate: new Date().valueOf(),
        merchantLogo:
          "https://cdn.pixabay.com/photo/2016/03/31/21/41/cash-1296584_960_720.png",
        merchant: this.transferForm.get("toAccount").value,
        transactionType: "Online Transfer",
        amount: this.transferForm.get("amount").value.toString(),
      };

      //adds the transaction to the beggining of the tranasactoin list
      this.data.unshift(transaction);
      //Notifies the transaction service a transaction happened
      this.transactionsService.newTransaction(this.data);
      //resets the form
      this.transferForm.reset();
      //resets the error message.
    });

    //Uses httpClient to get the data from the .json file.
    this.httpClient
      .get("../../assets/transaction-data/transactions.json")
      .subscribe((data) => {
        this.data = [...data["data"]];
      });
  }
}
