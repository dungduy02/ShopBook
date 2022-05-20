import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 12;
  listBooks : any[]=[];
  id :any;
  sizeId =1 ;
  constructor(private bookService:BookService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.show();
    
   this.route.paramMap.subscribe(params =>{
     this.id = params.get('id');
   })
   this.getProductById(this.id);
  }
  show(){
    this.bookService.getBooks().subscribe
    (data=>{
      this.listBooks=data;
    })
  }
  tabSize(event: number) {
    this.page = event;
    this.show();
  }
  searchThis(data:any){
    if (data == "") {
      this.ngOnInit();
    } else {
      this.listBooks = this.listBooks.filter(res => {
        return res.name.toLocaleLowerCase().match(data.toLocaleLowerCase());
      })
    }
  }
  getProductById(id:any){
    this.bookService.getABook(id).subscribe((res)=>{
      this.listBooks=res;
    })
  }

}
