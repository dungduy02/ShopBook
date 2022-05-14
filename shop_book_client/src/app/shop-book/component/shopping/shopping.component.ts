import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  listBooks : any[]=[];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe
    (data=>{
      this.listBooks=data;
    })
    
  }

}
