import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsharedService } from '../productshared.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private http: HttpClient, private sharedService :ProductsharedService) { }

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe(success => {
      this.products = success;
      console.log(this.products)
    }, (error) => {
      console.log(error)
    
    })
  }

  addToCart(prod:any){
    this.sharedService.add(prod)
  }
}


