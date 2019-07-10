import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../_services/api.service'
import {Product} from '../../_models/product'
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public columns = ['id','name']

  public rows : Array<Product>;

  constructor(public apiService: ApiService, public router: Router) { }

  

  ngOnInit() {
    this.apiService.get("products").subscribe((data: Product[])=> {
      console.log(data);
      this.rows = data;
    });
  }

  public delete(id:string) {
    console.log("delete: "+id);
    var path = 'products/'+id;
    this.apiService.delete(path).subscribe((r)=> {

      this.rows = this.rows.filter((p,i)=>{
        if(Number(id) === p.id) {
          return false;

        }
        return true;
      },this.rows)
    });

  }

  public update(id:string){
    console.log("update: "+id);
    this.router.navigateByUrl('/products/add/'+id);
  }

}
