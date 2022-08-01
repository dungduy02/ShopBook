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
import { SliderComponent } from './component/slider/slider.component';
import { BlogComponent } from './component/blog/blog.component';
import { FooterComponent } from './component/footer/footer.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ContactComponent } from './component/contact/contact.component';
import { CartComponent } from './component/cart/cart.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { FilterPipe } from './filter.pipe';
import { LoginAdminComponent } from './component/admin/login-admin/login-admin.component';
import { HeaderAdminComponent } from './component/admin/header-admin/header-admin.component';
import { SideBarAdminComponent } from './component/admin/side-bar-admin/side-bar-admin.component';
import { HomeAdminComponent } from './component/admin/home-admin/home-admin.component';
import { ProductAdminComponent } from './component/admin/product/product-admin/product-admin.component';
import { AddProductAdminComponent } from './component/admin/product/add-product-admin/add-product-admin.component';
import { StaffAdminComponent } from './component/admin/staff/staff-admin/staff-admin.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AddStaffAdminComponent } from './component/admin/staff/add-staff-admin/add-staff-admin.component';
import { OrderComponent } from './component/admin/order/order.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MenuComponent,
    ProfileComponent,
    CategoryComponent,
    SliderComponent,
    BlogComponent,
    FooterComponent,
    ShoppingComponent,
    ProductDetailComponent,
    ContactComponent,
    CartComponent,
    SearchFilterPipe,
    FilterPipe,
    LoginAdminComponent,
    HeaderAdminComponent,
    SideBarAdminComponent,
    HomeAdminComponent,
    ProductAdminComponent,
    AddProductAdminComponent,
    StaffAdminComponent,
    CheckoutComponent,
    AddStaffAdminComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    ShopBookRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [

  ]
})
export class ShopBookModule { }
