import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
 products:any = []
 addedProducts:any = []

 url='https://fakestoreapi.com/products'

 constructor(private http:HttpClient){
    this.http.get(this.url).subscribe(res=>{
      console.log(res);
      this.products=res
    })
    console.log(this.products)

    }
    addData(list:any){
      alert(list?.title)
      this.addedProducts.push(list);
      console.log(this.addedProducts)
    }
    deleteUser(list:any){
      alert(list?.title);
      this.addedProducts.splice(list,1)
    }
 }

