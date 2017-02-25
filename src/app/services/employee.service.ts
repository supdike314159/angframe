import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
/**  Temporary until we get http wired in....*/
import { EMPLOYEES } from '../models/mock/mock-employees';



@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(EMPLOYEES);
  }
}
