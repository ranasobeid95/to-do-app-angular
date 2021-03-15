import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/modules/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo!: Todo;

  @Input()
   index!:number

  // @Output() deleteEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  // deleteTask(){
  //   this.deleteEvent.emit(this.index)
  // }

}
