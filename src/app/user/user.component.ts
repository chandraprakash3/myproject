import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  myUsers:any = []

  url = 'https://dummyjson.com/users'
  constructor(private http:HttpClient){
  
    this.http.get(this.url).subscribe(response=>{
        console.log(response)
        this.myUsers=response;
    })

    console.log(this.myUsers.users)
  }


  deleteUser(index:any){
    alert(index);
    this.myUsers.users.splice(index,1)
  }

}