import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo:any=[];
  todos:any=[
    'Buy your new todo',
    'complete a previous task',
    'create video for you tube',
    'create a new portfolio site'
  ]
  
  constructor(){ }

  ngOnInit(): void {}
  add(){
this.todos.push(this.todo)
  }
  delete(index:number){
    this.todos.splice(index,1)
  }
}