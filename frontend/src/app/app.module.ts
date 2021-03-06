import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from './_services/api.service';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { OrderAddComponent } from './components/order-add/order-add.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    OrderAddComponent,
    CustomerAddComponent,
    ProductListComponent,
    OrderListComponent,
    CustomerListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
