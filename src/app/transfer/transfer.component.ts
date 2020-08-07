import { TransferService } from "./../services/transfer.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-transfer",
  templateUrl: "./transfer.component.html",
  styleUrls: ["./transfer.component.css"],
})
export class TransferComponent implements OnInit {
  constructor(private transferService: TransferService) {}

  errorMessage = false;

  transferForm = new FormGroup({
    toAccount: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
  });

  onSubmit() {
    if (!this.transferForm.valid) this.errorMessage = true;
    if (this.transferForm.valid) {
      // console.log(this.transferForm.value);
      // this.transferForm.reset();
      // this.errorMessage = false;
      this.transferService.openConfirm();
    }
  }

  ngOnInit(): void {
    this.transferService.transferMoney.subscribe((transferMoney: boolean) => {
      this.transferForm.reset();
      this.errorMessage = false;
    });
  }
}
