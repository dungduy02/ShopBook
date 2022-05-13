import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ShopBookRoutingModule } from './shop-book-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';
import { CategoryComponent } from './component/category/category.component';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MenuComponent,
    ProfileComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShopBookRoutingModule,
    ReactiveFormsModule
  ],
  providers: [

  ]
})
export class ShopBookModule { }