import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartServiceEvent = new BehaviorSubject({});
  cartQty = 0;
  cartObj :any = [];
 public cartTotalPrice :any;

  constructor(private http:TokenStorageService) {

   this.getCartDetailsByUser(); 
   }

   getCartDetailsByUser(){
     this.http.postRequestWithToken("api/cart/getCartsByUserId",{}).subscribe((data:any)=>{
      //alert("Error while fetching the cart Details");
      this.cartObj = data;
      this.cartQty = data.length;
     this.cartTotalPrice = this.getTotalAmounOfTheCart();
      this.cartServiceEvent.next({"status":"completed"})//emitter
     },error=>{
      //  alert("Error while fetching the cart Details");
     })
   }


  addCart(obj:any){
    //this.cartServiceEvent.next({"status":"completed"})//emitter
    var request  = {
      "bookId":obj.bookId,
      "qty":obj.qty,
      "price":obj.price
    }
    this.http.postRequestWithToken("api/cart/addProduct",request).subscribe((data:any)=>{
      this.getCartDetailsByUser()
    },
    error=>{
      //if the products is already in cart
        alert("Error in AddCart API "+error.message);
    })
  }
  getCartOBj(){
    return this.cartObj;
  }
  getTotalAmounOfTheCart(){
    let obj = this.cartObj;
    let totalPrice  = 0;
   
    for(var o in obj ){      
      totalPrice = totalPrice +parseFloat(obj[o].price);
    }

    return totalPrice.toFixed(2);
  }
  getQty(){
    return this.cartQty;
  }


  removeCart(cartId:any){
      var request = {
          "bookId":"dummy_val",
          "cartId":cartId,
      }
      this.http.postRequestWithToken("api/cart/removeProductFromCart",request).subscribe((data:any)=>{
          this.getCartDetailsByUser();
      },error=>{
        alert("Error while fetching the cart Details");
      })
  }
  
}
