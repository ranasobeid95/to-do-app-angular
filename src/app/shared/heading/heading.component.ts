import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {


   @Input() numTask!:number
   today:Date = new Date();
   option = { weekday: "long", month: "short", day: "numeric" };

  constructor() { }

  ngOnInit(): void {
  }

}
