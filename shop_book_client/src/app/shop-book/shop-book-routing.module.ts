import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CategoryComponent } from './component/category/category.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import {NgxPaginationModule} from 'ngx-pagination';
const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'header',component:HeaderComponent},
  {path:'menu/:searchTerm', component:ShoppingComponent},
  {path:'category',component:CategoryComponent},
  {path:'profile',component:ProfileComponent},
  {path:'shopping',component:ShoppingComponent},
  {path:'product-detail/:id',component:ProductDetailComponent}
  {path:'productDetail',component:ProductDetailComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),NgxPaginationModule],
  exports: [RouterModule,NgxPaginationModule]
})
export class ShopBookRoutingModule { }
