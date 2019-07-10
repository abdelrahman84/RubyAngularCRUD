import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../_services/api.service';
import {Product} from '../../_models/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

    public product: Product = new Product();

  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
     this.activatedRoute.params.subscribe((data: any)=>{
       console.log(data.id);
       if(data && data.id) {
         this.apiService.get("products/"+data.id).subscribe((data: Product)=>{
           this.product = data;
         });
       }
       else
       {
         this.product = new Product();
       }
     }
     )
  }

  public onSubmit(){
    console.log("Adding a Product" +this.product.name);
    if(this.product.id){
      this.apiService.update("products/"+this.product.id,this.product).subscribe((r)=>{
        console.log(r);
        alert("Product updated !");
      })
      }
      else {
        this.apiService.post("products",this.product).subscribe((r)=>{
          console.log(r);
          this.product = new Product();
          alert("Product added!");
        });
      
    }
  }

}
