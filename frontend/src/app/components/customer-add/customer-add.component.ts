import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../_services/api.service';
import {Customer} from '../../_models/customer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  public customer: Customer = new Customer();

  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: any)=>{
      console.log(data.id);
      if(data && data.id) {
        this.apiService.get("customers/"+data.id).subscribe((data: Customer)=>{
          this.customer = data;
        });
      }
      else
      {
        this.customer = new Customer();
      }
    }
    )
  }

  public onSubmit(){
    console.log("Adding new Customer" +this.customer.name);
    if(this.customer.id){
      this.apiService.update("customers/"+this.customer.id,this.customer).subscribe((r)=>{
        console.log(r);
        alert("Customer updated !");
      })
      }
      else {
        this.apiService.post("customers",this.customer).subscribe((r)=>{
          console.log(r);
          this.customer = new Customer();
          alert("Customer added!");
        });
      
    }
  }

}
