import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  title: 'Employees'  ;
  employees: Employee[];
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) { }

  getEmployees(): void {
      this.employeeService.getEmployees().then(employees => this.employees = employees);
  }
  
  ngOnInit(): void {
      this.getEmployees();
  }
  
  onSelect(employee: Employee): void {
      this.selectedEmployee = employee;
  }

}
