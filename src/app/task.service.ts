import { Injectable } from '@angular/core';
import {Tasks, TasksArray} from './tasks';

@Injectable()
export class TaskService {

  getAllTask():Promise<Tasks[]> {
    return Promise.resolve(TasksArray);
  }

  constructor() { }

}
