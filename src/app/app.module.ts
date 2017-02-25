import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeService } from './services/employee.service';

import { AlertModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    RouterModule.forRoot([
      {
          path: 'employees',
          component: EmployeesComponent
      },
      {
          path: '',
          redirectTo: '/',
          pathMatch: 'full'
      }
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
