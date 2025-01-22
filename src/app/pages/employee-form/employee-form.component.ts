import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  employee = {
    employeeID: '',
    employeeName: '',
    employeeAge: '',
    employeeAddress: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.employeeService.addEmployee(this.employee).subscribe(
        (response) => {
          this.successMessage = 'Employee record added successfully.';
          this.errorMessage = '';
          form.resetForm();
        },
        (error) => {
          this.errorMessage = 'An error occurred while adding the employee.';
          this.successMessage = '';
        }
      );
    }
  }
}