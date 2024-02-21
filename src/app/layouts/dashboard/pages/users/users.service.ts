import { Injectable, ViewChild } from '@angular/core';
import { Student } from './models';
import { delay, of } from 'rxjs';
import { MatTable } from '@angular/material/table';

let students: Student[] = [
  { id: 1, name: 'Julian', surname: 'Fernández', phonenumber: '+54 1234-3212', email: 'julian-12@gmail.com', country: 'Argentina',},
  { id: 2, name: 'Enzo', surname: 'Alvarez', phonenumber: '+52 8173-9543', email: 'enzito25@outlook.com', country: 'México',},
  { id: 3, name: 'Lionel',surname: 'Acuña', phonenumber: '+34 9182-4372', email: 'le0goat@hotmail.com', country: 'España',},
  { id: 4, name: 'Marcos',surname: 'Messi', phonenumber: '+51 2038-1394', email: 'marcosss1234@outlook.com', country: 'Perú',},
] 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  onStudentSubmited(evt: Student): void{
    students = [...students, {...evt, id: students.length+1}]
  }

  deleteStudent(id : number){
    students = students.filter((el) => el.id != id);
    return of(students)
  }
  

  getStudent(){
    return of(students)
  }


  constructor() { }
}
