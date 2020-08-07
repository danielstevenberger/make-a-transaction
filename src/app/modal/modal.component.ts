import { TransferService } from "./../services/transfer.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  constructor(private transferService: TransferService) {}
  @Input() toAccount: string;
  @Input() fromAccount: string;
  @Input() amount: number;

  ngOnInit(): void {}

  onCancel() {
    this.transferService.closeConfirm();
  }
  onTransfer() {
    this.transferService.confirmTransfer();
    this.transferService.closeConfirm();
  }
}
