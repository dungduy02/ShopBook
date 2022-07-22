import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartqty = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.cartServiceEvent.subscribe(data =>{
      this.cartqty = this.cartService.getQty();
      
    })
  }

}
