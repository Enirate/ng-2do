import { Component, OnInit } from '@angular/core';
import {TasksArray} from './tasks';
import {TaskService} from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit 
{
  taskList;
  showTextBox:boolean = false;

  //injecting our service into our coomponent by creating a private property inside the constructor to hold the service.
  constructor(private taskService : TaskService) 
  {

  }

  //method to log stuff on the console.
  logThis() 
  {
    console.log(TasksArray);
  }

  //stuffs that will happen on init of app. logging to console included. and getting stuff from service
  ngOnInit () 
  {
    this.logThis();
    
    //calling the private property (taskService) method and resolving the promise. ourTasks is the expected result so
    //we set the value of our taskList to it. 
    this.taskService.getAllTask().then(ourTasks=>this.taskList = ourTasks);
  }

  onSubmit(value) {
    let arrayLen = TasksArray.length + 1;
    value.id =arrayLen;

    //push something up through service.
    this.taskService.addANewtask(value);
    //TasksArray.push(value);

    //hide form
    this.showTextBox = false;
    console.log(value);
  }



}

//Add 
