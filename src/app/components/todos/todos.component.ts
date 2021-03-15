import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from 'src/modules/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos:Todo[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
