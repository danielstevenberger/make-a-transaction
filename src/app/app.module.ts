import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarLogoComponent } from './navbar/navbar-logo/navbar-logo.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NavbarLogoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
