import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { CartService } from '../../service/cart.service';
import { TokenStorageService } from '../../service/token-storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  detailBook: any;
  constructor(private cartService:
    CartService,private bookService: BookService,private router:Router,
     private route: ActivatedRoute,private http:TokenStorageService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
    this.showDetail(this.id);
  }
  public showDetail(id: any) {
    this.bookService.getABook(id).subscribe((res => {
      this.detailBook = res;
    }))
  }
  addCart(cartProductObj:any){
    var cartObj = {
      "bookId":cartProductObj.id,
      "qty":"1",
      "price":cartProductObj.price
    }
    if(this.http.getToken()){
    this.cartService.addCart(cartObj);
    }else{
      alert("vui lòng đăng nhập để mua hàng")
    }
  }
  
}
