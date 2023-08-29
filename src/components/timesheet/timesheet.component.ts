import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/interfaces/department';
import { DepartmentsService } from 'src/services/departments.service';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent {
  departments: Department[];
  department: Department;


  constructor(
    private route: ActivatedRoute,
    private departmentsService: DepartmentsService,
  ){}
  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
    this.department = this.departments.find(department => department.id === this.route.snapshot.params['id']);

  }

}
