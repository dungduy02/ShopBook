import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { UserService } from '../../service/user.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  roles: string[] = [];
  cartObj: any = [];
 
  isLoggedIn = false;
  cart_qty = 0;
  cartTotalPrice = 0;
  mainDialogType = "";
  showAdminBoard = false;
  showModeratorBoard = false;
  username!: string;
  content: any;
  pendingOrderLength!: number;
  constructor( private router:Router, private cartService: CartService, private userService: UserService, private tokenStorageService: TokenStorageService) {
    this.cartService.cartServiceEvent.subscribe(data=>{
      this.cart_qty = this.cartService.getQty();
    })
   }

  ngOnInit(): void {
    

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {

      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }

  }
  checkout_btn(){
    this.router.navigate(['checkout']);
   }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  closeDialog() {
    this.mainDialogType = "";
  }
 
  openCheckoutModel(){
    this.cartObj =  this.cartService.getCartOBj();
    this.cartTotalPrice  = this.cartService.cartTotalPrice;
    this.mainDialogType = "checkout";
  }
}
