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
import { HomeAdminComponent } from './component/admin/home-admin/home-admin.component';
import { ProductAdminComponent } from './component/admin/product/product-admin/product-admin.component';
import { AddProductAdminComponent } from './component/admin/product/add-product-admin/add-product-admin.component';
import { StaffAdminComponent } from './component/admin/staff/staff-admin/staff-admin.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'header',component:HeaderComponent},
  {path:'menu/:searchTerm', component:ShoppingComponent},
  {path:'category',component:CategoryComponent},
  {path:'profile',component:ProfileComponent},
  {path:'shopping',component:ShoppingComponent},
  {path:'product-detail/:id',component:ProductDetailComponent},
  {path:'productDetail',component:ProductDetailComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin/home',component:HomeAdminComponent},
  {path:'admin/product',component:ProductAdminComponent},
  {path:'admin/product/add',component:AddProductAdminComponent},
  {path:'admin/staff',component:StaffAdminComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),NgxPaginationModule],
  exports: [RouterModule,NgxPaginationModule]
})
export class ShopBookRoutingModule { }
