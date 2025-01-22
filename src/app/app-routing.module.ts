import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';

const routes: Routes = [
  { path: 'add-employee', component: EmployeeFormComponent },
  { path: '', redirectTo: '/add-employee', pathMatch: 'full' },
  { path: '**', redirectTo: '/add-employee' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }