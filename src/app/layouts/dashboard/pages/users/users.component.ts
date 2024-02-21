import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Student } from './models';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})


export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'country', 'phonenumber', 'email', 'modify'];
  onStudentSubmited(evt: Student): void{
    this.alumns = [...this.alumns, {...evt, id: this.alumns.length+1}]
    console.log(this.alumns)
  }

  alumns: Student[]= []

  constructor(private usersService: UsersService){
    this.usersService.getStudent().subscribe({
      next:(alumns) => {
        this.alumns = alumns
      }
    })
  }
  
  onDelete(id:number){
    this.usersService.deleteStudent(id).subscribe({
      next: (alumns) => {
        this.alumns = alumns
        console.log(alumns)
      }
    })
  }
}
