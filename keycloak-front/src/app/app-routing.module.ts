import { SuppliersComponent } from './suppliers/suppliers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrdouctsComponent } from './prdoucts/prdoucts.component';

const routes:Routes=[
  {path:"products",component:PrdouctsComponent},
  {path:"suppliers",component:SuppliersComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
