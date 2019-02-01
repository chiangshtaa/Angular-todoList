import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  list:string[];
  todoItem:string;

  constructor() { }

  ngOnInit() {
    this.todoItem = '';
    this.list = ['Clean room', 'Study for interview', 'Do homework']
  }

  deleteItem(item) {
    console.log('delete works');
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === item) {
        this.list.splice(i, 1);
      }
    }
  }

  addItem(item) {
    console.log('add item works');
    this.list.unshift(item);
    this.todoItem = '';
    return false;
  }

}
