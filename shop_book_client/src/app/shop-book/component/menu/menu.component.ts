import { Component, Input, OnInit, Output, EventEmitter, Query } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { TokenStorageService } from '../../service/token-storage.service';

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

  constructor(private http: TokenStorageService, private router: Router, private cartService: CartService) {
    this.cartService.cartServiceEvent.subscribe(data => {
      this.cart_qty = this.cartService.getQty();
    })
  }
  ngOnInit() {
    // this.reloadComponent();
  }
  decrementQty(qty: any, cartObj: any) {
    var quantity: any;
    var priceString: any;
    var priceString1:any;
    // quantity = qty-1;
    quantity = qty - 1;
    priceString = (cartObj.price) - (cartObj.price / qty)
    priceString1 = cartObj.price;
    var request = {
      "cartId": cartObj.id,
      "qty": quantity,
      "price": priceString
    }
    cartObj.qty = request.qty;
    cartObj.price = request.price;
    // var quantity2 = parseInt(request.qty)
    if (cartObj.qty < 1) {
      // cartObj.price = request.price;
        if(confirm("Are you sure want to delete..?")){
          
        let id = cartObj.id;
        this.cartService.removeCart(id);
        this.reloadComponent();
        this.openCheckoutModel();

      }else{
        qty = 1;
        cartObj.qty = 1;
        request.qty =1;
        cartObj.price = priceString1;
        request.price = priceString
      }


    }
    console.log(request);
    this.http.postRequestWithToken("api/cart/updateQtyForCart", request).subscribe((data: any) => {
      this.cartService.getCartDetailsByUser();//for updating in the application..
    }, error => {
      alert("Error while fetching the cart Details");
    })
  }
  removeItem(cartObj: any) {
    if (confirm("Are you sure want to delete..?")) {
      let id = cartObj.id;
      this.cartService.removeCart(id);
      this.reloadComponent();
    }
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    this.mainDialogType = "checkout";
  }
  incrementQty(qty: any, cartObj: any) {
    var quantity: any;
    var priceString: any;
   
    quantity = qty + 1;
    priceString = (cartObj.price) + (cartObj.price / qty)
  
    var request = {
      "cartId": cartObj.id,
      "qty": quantity,
      "price": priceString
    }
    cartObj.qty = request.qty;
    cartObj.price = request.price;
    // var quantity2 = parseInt(request.qty)
    
    console.log(request);
    this.http.postRequestWithToken("api/cart/updateQtyForCart", request).subscribe((data: any) => {
      this.cartService.getCartDetailsByUser();//for updating in the application..
    }, error => {
      alert("Error while fetching the cart Details");
    })
  }

  openCheckoutModel() {
    this.cartObj = this.cartService.getCartOBj();
    this.cartTotalPrice = this.cartService.cartTotalPrice;
    this.mainDialogType = "checkout";
  }

  closeDialog1() {
    this.mainDialogType = "";
  }
  checkout_btn() {
    this.router.navigate(['/cart']);
  }
  closeDialog() {
    this.mainDialogType = "";
  }
  curentDropDown(currentDropdownMenuName: any) {
    if (this.currentDropDownMenu == currentDropdownMenuName) {
      this.currentDropDownMenu = "";
    } else {
      this.currentDropDownMenu = currentDropdownMenuName;
    }

  }
  
  
}
