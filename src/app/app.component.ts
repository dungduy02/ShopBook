import { Component, OnInit } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
}
