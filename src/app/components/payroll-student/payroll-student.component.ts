import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/classes/student';
declare var jQuery: any;

@Component({
  selector: 'app-payroll-student',
  templateUrl: './payroll-student.component.html',
  styleUrls: ['./payroll-student.component.scss']
})
export class PayrollStudentComponent implements OnInit {
  listStudents: Array<Student> = [];
  aprobo = 'Aprobó';
  reprobo = 'Reprobó';
  fetch = new Date();

  constructor() { }

  ngOnInit(): void {
    jQuery('#welcome').modal('show');
    this.fillList();
  }  

  reset() {
    this.listStudents = [];
    this.fillList();
  }

  fillList() {
    this.listStudents.push(new Student(1, 'Adrian', 'Ramírez', this.qualificationRandom(), ''));
    this.listStudents.push(new Student(2, 'Andres', 'Orozco', this.qualificationRandom(), ''));
    this.listStudents.push(new Student(3, 'Julian', 'Monstes', this.qualificationRandom(), ''));
    this.listStudents.push(new Student(4, 'Esteban', 'Carmona', this.qualificationRandom(), ''));
    this.listStudents.push(new Student(5, 'Carolina', 'Giraldo', this.qualificationRandom(), ''));
    this.listStudents.push(new Student(6, 'Diego', 'Pineda', this.qualificationRandom(), ''));
    this.listStudents.push(new Student(7, 'Alejandro', 'Ramírez', this.qualificationRandom(), ''));
    this.listStudents.push(new Student(8, 'Mateo', 'Marín', this.qualificationRandom(), ''));
    this.listStudents.push(new Student(9, 'Yelsid', 'Orrego', this.qualificationRandom(), ''));
    this.listStudents.push(new Student(10, 'Diego', 'Ramírez', this.qualificationRandom(), ''));
  }

  qualificationRandom(): number {
    const qualification = (Math.random() * (0.0 - 5.0) + 5.0).toFixed(2);
    return +qualification;
  }

}
