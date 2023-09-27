import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']


})
export class StudentsComponent implements OnInit {
  id = '';
  name = '';
  phone = '';
  gender = '';
  address = '';
  studentsList: any = [
    { 'id': 1, 'name': 'Nagendra', 'gender': 'male', 'phone': 7093326052, 'address': 'Badvel' },



  ];
  constructor() { }
  ngOnInit(): void {
  }
  addStudent() {
    console.log(this.id, this.name, this.phone, this.gender, this.address)
    const student = { 'id': this.id, 'name': this.name, 'phone': this.phone, 'gender': this.gender, 'address': this.address }
    console.log(student)
    this.studentsList.push(student);
    this.reset();
  }
  reset() {
    this.id = '';
    this.name = '';
    this.phone = '';
    this.gender = '';
    this.address = '';
  }
  delete(i: number) {
    this.studentsList.splice(i, 1)

  }
}