import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { TokenStorageService } from '../../service/token-storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public cartObj: any = [];
  cartTotalPrice: any
  noteCheckout = "";
  pay_type = "cash_on_delivery";
  delivery_address = "";
  cartqty = 0;
  userName: any;
  email: any;
  phone: any;
  constructor(private router: Router, private http: TokenStorageService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartDetailsByUser();
    const user = this.http.getUser();
    this.userName = user.username;
    this.email = user.email;
    this.phone = user.phone;
    //below function will be triggerd from when removing and qty  is changing..
    this.cartService.cartServiceEvent.subscribe(data => {
      this.cartObj = this.cartService.getCartOBj();
      this.cartqty = this.cartService.getQty();
      this.cartTotalPrice = this.cartService.cartTotalPrice;
    });
  }

  getTotalAmounOfTheCart() {
    let obj = this.cartObj;
    let totalPrice = 0;
    for (var o in obj) {
      totalPrice = totalPrice + parseFloat(obj[o].price);
    }
    return totalPrice.toFixed(2);
  }

  getCartDetailsByUser() {
    this.http.postRequestWithToken("api/cart/getCartsByUserId", {}).subscribe((data: any) => {
      this.cartObj = data;
      this.cartTotalPrice = this.getTotalAmounOfTheCart();
    }, error => {

    })
  }
  checkoutCart() {
    if (this.delivery_address == "") {
      alert("Delivery address should not be empty");
      return;
    }
    if (this.noteCheckout == "") {
      this.noteCheckout = "no note";
    }
    if (this.pay_type = "cash_on_delivery") {
      let request = {
        "total_price": this.cartTotalPrice,
        "pay_type": "COD",
        "note": this.noteCheckout,
        "deliveryAddress": this.delivery_address
      }
      console.log(request);
      this.http.postRequestWithToken("api/order/checkout_order", request).subscribe((data: any) => {
        alert("checkout process completed.Your Order is processed..");
        this.cartService.getCartDetailsByUser();
        this.router.navigate(['/shopping']);
      }, error => {
        alert("Error while fetching the cart Details");
      })

    } else {
      alert("Payment Integration is not yet completed.")
    }
  }
}
