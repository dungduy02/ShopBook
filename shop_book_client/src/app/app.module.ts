import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import { HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ShopBookComponent } from './shop-book/shop-book.component';
import { ShopBookModule } from "./shop-book/shop-book.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ShopBookModule, RouterModule,HttpClientModule, ReactiveFormsModule, NgbModule
  ],
  providers: [],
  exports : [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }