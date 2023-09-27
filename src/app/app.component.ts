import { Component } from '@angular/core';
import { ProductsharedService } from './productshared.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  prod: any = [];
  total = 0;
  constructor(private sharedServive: ProductsharedService) {
    this.sharedServive.sharedProducts.subscribe(data => {
      if (data !== null) {
        this.prod.push(data);

        this.total = this.prod.reduce((a: any, v: any) => a + v.price, 0);

      }
      console.log(this.prod)
    })
  }
  delete(index: any) {
    this.prod.splice(index, 1);
    this.total = this.prod.reduce((a: any, v: any) => a + v.price, 0);

  }
}
