import { Injectable, ViewChild } from '@angular/core';
import { User } from './models';
import { delay, of } from 'rxjs';
import { MatTable } from '@angular/material/table';

let users: User[] = [
  { id: 1, name: 'Julian', surname: 'Fernández', phonenumber: '+54 1234-3212', email: 'julian-12@gmail.com', country: 'Argentina', role: 'user', password: '12345678' },
  { id: 2, name: 'Enzo', surname: 'Alvarez', phonenumber: '+52 8173-9543', email: 'enzito25@outlook.com', country: 'México', role: 'user', password: '12345678' },
  { id: 3, name: 'Lionel', surname: 'Acuña', phonenumber: '+34 9182-4372', email: 'le0goat@hotmail.com', country: 'España', role: 'user', password: '12345678' },
  { id: 4, name: 'Marcos', surname: 'Messi', phonenumber: '+51 2038-1394', email: 'marcosss1234@outlook.com', country: 'Perú', role: 'user', password: '12345678' },
]
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  onUserSubmited(evt: User): void {
    users = [...users, { ...evt, id: users.length + 1 }]
  }

  deleteUser(id: number) {
    users = users.filter((el) => el.id != id);
    return of(users)
  }


  getUser() {
    return of(users)
  }


  constructor() { }
}
