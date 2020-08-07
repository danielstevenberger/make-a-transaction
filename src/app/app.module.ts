import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarLogoComponent } from "./navbar/navbar-logo/navbar-logo.component";
import { CardContainerComponent } from "./card-container/card-container.component";
import { CardComponent } from "./card-container/card/card.component";
import { TransferComponent } from "./transfer/transfer.component";
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionComponent } from './transactions/transaction/transaction.component';
import { SearchComponent } from './transactions/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLogoComponent,
    CardContainerComponent,
    CardComponent,
    TransferComponent,
    ModalComponent,
    HomeComponent,
    TransactionsComponent,
    TransactionComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
