/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskServiceService } from './task-service.service';

describe('Service: TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskServiceService]
    });
  });

  it('should ...', inject([TaskServiceService], (service: TaskServiceService) => {
    expect(service).toBeTruthy();
  }));
});
