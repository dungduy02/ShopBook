import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';
const API_URL = 'http://localhost:8080/api/public/books/';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient,private cartService:CartService) { }
  getBooks(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }
  getABook(id: any) :Observable<any> {
    return this.http.get(API_URL + 'find/' + id);
  }
  // addToCart(book: any) {
  //   /* PENDING ORDER ITEMS */
  //   let pendingOrders: any[] = JSON.parse(
  //     localStorage['pendingOrders'] || '[]'
  //   );
  //   let foundPendingOrder: any | undefined = pendingOrders.find(
  //     (pendingOrderItem) => {
  //       return pendingOrderItem.book.id === book.id;
  //     }
  //   );
  //   /* foundPendingOrder is same reference to pendingOrders */
  //   if (foundPendingOrder) {
  //     foundPendingOrder.quantity++;
  //   } else {
  //     foundPendingOrder = {
  //       book: book,
  //       quantity: 1,
  //     };
  //     pendingOrders.push(foundPendingOrder);
  //   }
  //   const { priceToBuy } = foundPendingOrder.book;
  //   const { quantity } = foundPendingOrder;
  //   foundPendingOrder.totalPrice = priceToBuy * quantity;
  //   localStorage['pendingOrders'] = JSON.stringify(pendingOrders);
  //   /* change state */
  //   this.store.dispatch(addProductIntoOrder());
  //   /* add pendingOrderItem to server */
  //   this.cartService.updateCart('add', foundPendingOrder)?.subscribe();
  //   /* show a dialog to notify */
  //   // this.dialog.open(AdditionDialog, {
  //   //   width: '450px',
  //   //   data: 'CART',
  //   // });
  // }
}
