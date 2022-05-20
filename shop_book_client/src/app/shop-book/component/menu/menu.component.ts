import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() searchword:any;
  @Output() searchcriteria = new EventEmitter<String>();
 
  searchThis() {
      this.searchcriteria.emit(this.searchword)
  }
  constructor() { }

  ngOnInit(): void {
    
  }


}
