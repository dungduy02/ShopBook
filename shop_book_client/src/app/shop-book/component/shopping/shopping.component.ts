import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { OrderPipe } from 'ngx-order-pipe';
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
  listBooks: any[] = [];
  id: any;
  sizeId = 1;
  searchText: any = '';
  searchKey: any = '';
  constructor(private orderpipe: OrderPipe, private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.show();

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
    this.getProductById(this.id);
  }
  checkboxArray: any = [
    {
      id: 1,
      type: "checkbox",
      category: "Tieu Thuyet"
    },
    {
      id: 2,
      type: "checkbox",
      category: "Kinh Di"
    },
    {
      id: 3,
      type: "checkbox",
      category: "Trinh Tham"
    }
  ]
  arrays: any = [];
  show() {
    this.bookService.getBooks().subscribe
      (data => {
        // console.log(data);
        this.listBooks = this.orderpipe.transform(data, 'name');
        this.arrays = data;
        console.log(this.arrays);

      })
  }
  tabSize(event: number) {
    this.page = event;
    this.show();
  }
  searchThis(data: any) {
    if (data == "") {
      this.ngOnInit();
    } else {
      this.listBooks = this.listBooks.filter(res => {
        return res.name.toLocaleLowerCase().match(data.toLocaleLowerCase());
      })
    }
  }
  getProductById(id: any) {
    this.bookService.getABook(id).subscribe((res) => {
      this.listBooks = res;
    })
  }
  tempArray: any = [];
  newArray: any = [];

  onChange(event: any) {
    if (event.target.checked) {
      this.tempArray = this.arrays.filter((e: any) => e.category == event.target.value);
      this.listBooks = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          this.listBooks.push(obj);
          console.log(obj);
        }

      }
    } else {
      this.tempArray = this.listBooks.filter((e: any) => e.category != event.target.value);
      this.newArray = [];
      this.listBooks = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          this.listBooks.push(obj);
          
        }
      }
      console.log(this.newArray);
    }
  }

}
