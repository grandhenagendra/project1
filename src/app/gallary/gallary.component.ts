import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit{
users:any;
url='https://fakestoreapi.com/users';
constructor(private http:HttpClient, private router:Router){}
ngOnInit(): void {
  this.http.get(this.url).subscribe(success =>
  {
    this.users = success;
    console.log(this.users)
  },(error)=>{
    console.log(error)
  })

    
}
login() {
   
  this.router.navigate(['/products']);
}
}
