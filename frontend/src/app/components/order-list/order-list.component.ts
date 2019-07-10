import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../_services/api.service'
import {Order} from '../../_models/orders'
import {Router} from '@angular/router'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  private columns = ['id','reference']

  private rows : Array<Order>;

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.apiService.get("orders").subscribe((data: Order[])=> {
      console.log(data);
      this.rows = data;
    });
  }

  private delete(id:string) {
    console.log("delete: "+id);
    var path = 'orders/'+id;
    this.apiService.delete(path).subscribe((r)=> {

      this.rows = this.rows.filter((p,i)=>{
        if(Number(id) === p.id) {
          return false;

        }
        return true;
      },this.rows)
    });

  }

  private update(id:string){
    console.log("update: "+id);
    this.router.navigateByUrl('/orders/add/'+id);
  }

}
