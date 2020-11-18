import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title: string ="";
  message: string = "";

  constructor() { }

  ngOnInit(): void {
    this.title = 'Hello app';
    this.message = 'This is my first component'
  }

  today() {
    return new Date().toLocaleString();
  }

}
