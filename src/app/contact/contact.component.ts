import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = '';
  phone = '';
  email = '';
  address = '';
  contactlist: any = [
    { 'name': 'Nagendra', 'email': 'naga@gmail.com', 'phone': 7093326052, 'address': 'Badvel' },



  ];
  constructor() { }
  ngOnInit(): void {
  }
  addcontact() {
    console.log(this.name, this.phone, this.email, this.address)
    const contact = { 'name': this.name, 'phone': this.phone, 'email': this.email, 'address': this.address }
    console.log(contact)
    this.contactlist.push(contact);
    this.reset();
  }
  reset() {

    this.name = '';
    this.phone = '';
    this.email = '';
    this.address = '';
  }
  delete(i: number) {
    this.contactlist.splice(i, 1)

  }
}
