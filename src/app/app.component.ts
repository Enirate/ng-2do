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
  selected:any;

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

//   WHAT to do?
// 1.get the list of task whoose select property is true
// 2.remove them using splice

  checkbox(recipient) {
      //the first condition represent the boolen value that will be attached to the default(checked or unchecked)
      // state of the checkbox
      //we also create a new object element i.e taken on the fly our object will look like
        recipient.taken = (recipient.taken) ? false :  true;
    }

    deleteRecipients() {  //need to know which recipients are checked
        // we declare a new variable using let(typescript syntax)
        //and we filter our task array based on the taken value of object element.
        this.selected = this.taskList.filter((x) => x.taken)
        console.log(this.selected);
    }

    //a class that will change the style of checked tasks when mark as done,
    //append another object element with a boolean value...
    //change boolen value as done is used on ...
    doneTasks(){
          //recipient.done = (recipient.done)? false : true;
         let wobo = this.taskList.map(function(x){return x.taken});
         //loop through array and check if x.taken is through if it is true add a property is done, check
         let taskListLen = this.taskList.length;
         //To get the correct number of index in an array subtract one from its length. index start from 0.
         taskListLen -=1;
         let i = 0;
         while(i <= taskListLen) {
           if(this.taskList[i].taken === true) {
             this.taskList[i].done = true;
           }else {
             this.taskList[i].done = false;
           }
           i++;
         }
         //console.log(wobo);
         //this.taskList[1].done = true;
         console.log(this.taskList);
          //this.taskList.splice(1,1);
    }

    isDone(task){
      if(task.done === true) {
        return true;
      }else{
        return false;
      }
    }



}

//Add 
