import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductAddComponent} from './components/product-add/product-add.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {OrderAddComponent} from './components/order-add/order-add.component'
import {CustomerAddComponent} from './components/customer-add/customer-add.component'
import {OrderListComponent} from './components/order-list/order-list.component'
import {CustomerListComponent} from './components/customer-list/customer-list.component'




const routes: Routes = [
  { path: 'products', component: ProductListComponent
  },
  {path: 'orders', component: OrderListComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'products/add', component: ProductAddComponent},
  {path: 'products/add/:id', component: ProductAddComponent},
  {path: 'orders/add/:id', component: OrderAddComponent},
  {path: 'customers/add', component: CustomerAddComponent},
  {path: 'customers/add/:id', component: CustomerAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
