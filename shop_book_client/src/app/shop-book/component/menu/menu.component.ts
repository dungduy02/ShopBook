import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mainDialogType = "";
  currentDropDownMenu = "";
  cartObj: any = [];
  cart_qty = 0;
  cartTotalPrice = 0;

  constructor(private router: Router, private cartService: CartService) {
    this.cartService.cartServiceEvent.subscribe(data=>{
      this.cart_qty = this.cartService.getQty();
    })
  }
  ngOnInit() {
  }


  openCheckoutModel() {
    this.cartObj =  this.cartService.getCartOBj();
    this.cartTotalPrice  = this.cartService.cartTotalPrice;
    this.mainDialogType = "checkout";
  }

  closeDialog1() {
    this.mainDialogType = "";
  }
  checkout_btn() {
    this.router.navigate(['/checkout']);
  }
  closeDialog() {
    this.mainDialogType = "";
  }
  curentDropDown(currentDropdownMenuName:any) {
    if (this.currentDropDownMenu == currentDropdownMenuName) {
      this.currentDropDownMenu = "";
    } else {
      this.currentDropDownMenu = currentDropdownMenuName;
    }

  }
}
