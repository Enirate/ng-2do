import { Component, OnInit } from '@angular/core';
import {TasksArray} from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Visit google.com';
  taskList;
  showTextBox:boolean = false;

  logThis() 
  {
    console.log(TasksArray);
  }

  ngOnInit () {
    this.logThis();
    this.taskList = TasksArray;
  }
}

//Add task input and save and cancel button.