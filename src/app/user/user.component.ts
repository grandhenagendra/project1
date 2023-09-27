import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;
  userList: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.userList = [
      { id: 1, name: 'Ravi', email: 'ravindra@gmail.com', phone: '+91-9347778916' },
      { id: 2, name: 'nagendra', email: 'nagendra@gmail.com', phone: '+91-9347778916' },
      // Add more data here
    ];
  }

  addUser() {
    this.userList.push(this.userForm.value);
    console.log(this.userForm);
    this.userForm.reset();
  }

  delete(i: number) {
    this.userList.splice(i, 1);
  }
}
