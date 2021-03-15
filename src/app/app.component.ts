import { Component } from '@angular/core';
import { Todo } from 'src/modules/Todo';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count=0;
  todos : Todo[] = []

  constructor(private appTitle:Title){
    this.appTitle.setTitle('Todo App Angular')
  }
  addNewTask(task:string){
    this.count++;
    this.todos.push(new Todo(this.count,task))
  }
}
