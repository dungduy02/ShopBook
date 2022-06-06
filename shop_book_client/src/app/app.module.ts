import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShopBookComponent } from './shop-book/shop-book.component';
import { ShopBookModule } from "./shop-book/shop-book.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from "ngx-order-pipe";
import { FilterPipeModule } from "ngx-filter-pipe";
import { Ng2SearchPipeModule } from "ng2-search-filter";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    OrderModule,
    FilterPipeModule,
    FormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    AppRoutingModule, ShopBookModule, NgxPaginationModule, RouterModule, HttpClientModule, ReactiveFormsModule, NgbModule
  ],
  providers: [],
  exports: [HttpClientModule, NgxPaginationModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
