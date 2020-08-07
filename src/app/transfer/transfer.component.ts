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
    private accountService: AccountService
  ) {}

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
      // console.log(this.transferForm.value);
      // this.transferForm.reset();
      // this.errorMessage = false;
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

      this.transferForm.reset();
      this.errorMessage = false;
    });
  }
}
