import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsharedService {

  constructor() { }
  sharedProducts = new BehaviorSubject(null);
  currentProducts = this.sharedProducts.asObservable();

  add(prod:any){
    this.sharedProducts.next(prod)
  }
  
}
