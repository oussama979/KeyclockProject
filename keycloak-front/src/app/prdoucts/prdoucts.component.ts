import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prdoucts',
  templateUrl: './prdoucts.component.html',
  styleUrls: ['./prdoucts.component.css']
})
export class PrdouctsComponent implements OnInit {

  products;

  constructor() { }

  ngOnInit(): void {
    this.products=[
      {id:1,name:"mehdi",email:"mehdi@gmail.com"},
      {id:2,name:"wassim",email:"wassim@gmail.com"},
      {id:3,name:"soufiane",email:"soufiane@gmail.com"}
    ]
  }

}
