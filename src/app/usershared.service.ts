import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {

  constructor() { }
  sharedUsers = new BehaviorSubject(null);
  currentusers = this.sharedUsers.asObservable();

  add(users:any){
    this.sharedUsers.next(users)
  }
  
}
