import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../_services/api.service'
import {Customer} from '../../_models/customer'
import {Router} from '@angular/router'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private columns = ['id','name']

  private rows : Array<Customer>;

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.apiService.get("customers").subscribe((data: Customer[])=> {
      console.log(data);
      this.rows = data;
    });
  }

  private delete(id:string) {
    console.log("delete: "+id);
    var path = 'customers/'+id;
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
    this.router.navigateByUrl('/customers/add/'+id);
  }

}
