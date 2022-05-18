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

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'header',component:HeaderComponent},
  {path:'menu',component:MenuComponent},
  {path:'category',component:CategoryComponent},
  {path:'profile',component:ProfileComponent},
  {path:'shopping',component:ShoppingComponent},
  {path:'productDetail',component:ProductDetailComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopBookRoutingModule { }
