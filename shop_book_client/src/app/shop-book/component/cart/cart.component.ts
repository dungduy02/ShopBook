import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { TokenStorageService } from '../../service/token-storage.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartObj: any = [];
  cartTotalPrice: any
  pay_type = "cash_on_delivery";
  delivery_address = "";
  constructor(private router: Router, private http: TokenStorageService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartDetailsByUser();
    //below function will be triggerd from when removing and qty  is changing..
    this.cartService.cartServiceEvent.subscribe(data => {
      this.cartObj = this.cartService.getCartOBj();
      this.cartTotalPrice = this.cartService.cartTotalPrice;
    });
  }
  qtyChange(qty: any, cartObj: any) {
    var request = {
      "cartId": cartObj.id,
      "qty": qty,
      "price": (cartObj.price) * (qty)
    }
    this.http.postRequestWithToken("api/cart/updateQtyForCart", request).subscribe((data: any) => {
      this.cartService.getCartDetailsByUser();//for updating in the application..
    }, error => {

    })
  }
  removeItem(cartObj: any) {
    if (confirm("Are you sure want to delete..?")) {
      let id = cartObj.id;
      this.cartService.removeCart(id);

    }
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
      let request = {
        "total_price": this.cartTotalPrice,
        "pay_type": "COD",
        "deliveryAddress": "abc"
      }
      this.http.postRequestWithToken("api/order/checkout_order", request).subscribe((data: any) => {
        alert("checkout process completed.Your Order is processed..");
        this.cartService.getCartDetailsByUser();
        this.router.navigate(['/shopping']);
      }, error => {
        alert("Error while fetching the cart Details");
      })
  }
  decrementQty(qty: any, cartObj: any) {
    var quantity: any;
    var priceString: any;
    var priceString1: any;
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


      this.cartService.removeCart(cartObj.id);





    }
    this.http.postRequestWithToken("api/cart/updateQtyForCart", request).subscribe((data: any) => {
      this.cartService.getCartDetailsByUser();//for updating in the application..
    }, error => {
      alert("Error while fetching the cart Details");
    })
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
  
}
