import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSharedService } from '../usershared.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  url='https://fakestoreapi.com/users';
  constructor(private http:HttpClient, private sharedService :UserSharedService) { }

  ngOnInit(): void {
   this.http.get(this.url).subscribe(success => {
      this.users = success;
      console.log(this.users)
    }, (error) => {
      console.log(error)

    })
  }
  addToCart(users:any){
    this.sharedService.add(users)
  }
}
