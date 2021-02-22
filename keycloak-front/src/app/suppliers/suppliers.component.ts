import { SuppliersService } from './../service/suppliers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  public suppliers:any;

  constructor(private suppleiresService:SuppliersService) { }

  ngOnInit(): void {
  
    this.suppleiresService.getsuppliers()
    .subscribe(data=>{
      this.suppliers=data
      console.log(this.suppliers)
    },err=>{
      console.log(err);
    })

  }


}
