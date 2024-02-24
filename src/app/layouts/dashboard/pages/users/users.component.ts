import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './models';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})


export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'country', 'phonenumber', 'email', 'modify'];
  onUserSubmited(evt: User): void {
    this.alumns = [...this.alumns, { ...evt, id: this.alumns.length + 1 }]
  }

  alumns: User[] = []

  constructor(private usersService: UsersService) {
    this.usersService.getUser().subscribe({
      next: (alumns) => {
        this.alumns = alumns
      }
    })
  }

  onDelete(id: number) {
    this.usersService.deleteUser(id).subscribe({
      next: (alumns) => {
        this.alumns = alumns
        console.log(alumns)
      }
    })
  }
}
