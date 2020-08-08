import { TransferService } from "./../services/transfer.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  constructor(private transferService: TransferService) {}

  //3 inputs that recieve data from the home component.
  @Input() toAccount: string;
  @Input() fromAccount: string;
  @Input() amount: number;

  ngOnInit(): void {}

  //If the user clicks the cancel button. A function from the transfer service is called to cancel the transfer..
  onCancel() {
    this.transferService.closeConfirm();
  }

  //If the user clicks the transfer button. A function from from the transfer service is called make the transfer happen. After the modal is closed/
  onTransfer() {
    this.transferService.confirmTransfer();
    this.transferService.closeConfirm();
  }
}
