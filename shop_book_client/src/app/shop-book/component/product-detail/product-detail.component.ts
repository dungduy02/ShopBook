import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id:any;
  detailBook:any;
  constructor(private bookService:BookService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
        this.id = params.get('id');
    })
    this.showDetail(this.id);
  }
  public showDetail(id:any){
  this.bookService.getABook(id).subscribe((res=>{
    this.detailBook = res;
  }))
    }
}
