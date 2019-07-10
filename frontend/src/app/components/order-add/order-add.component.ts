import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../_services/api.service';
import {Order} from '../../_models/orders';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  public order: Order = new Order();

  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: any)=>{
      console.log(data.id);
      if(data && data.id) {
        this.apiService.get("orders/"+data.id).subscribe((data: Order)=>{
          this.order = data;
        });
      }
      else
      {
        this.order = new Order();
      }
    }
    )
  }

  public onSubmit(){
    console.log("Adding an Order" +this.order.reference);
    if(this.order.id){
      this.apiService.update("orders/"+this.order.id,this.order).subscribe((r)=>{
        console.log(r);
        alert("Order updated !");
      })
      }
      else {
        this.apiService.post("orders",this.order).subscribe((r)=>{
          console.log(r);
          this.order = new Order();
          alert("Order added!");
        });
      
    }
  }

}
