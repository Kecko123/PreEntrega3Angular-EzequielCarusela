import { Injectable } from "@angular/core";
import { User } from "../dashboard/pages/users/models";
import { Router } from "@angular/router";
import { SweetalertService } from "../../core/services/sweetalert.service";
import { map, of } from "rxjs";

interface LoginData {
    email: null | string;
    password: null | string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    authUser: User | null = null

    constructor(private router: Router, private sweetalertService: SweetalertService) { }

    login(data: LoginData): void {
        const MOCK_USER = {
            id: 10,
            email: 'admin@mail.com',
            name: 'ADMIN',
            surname: 'ADMIN',
            password: '12345678',
            role: 'user',
            country: null,
            phonenumber: null,
        }
        if (data.email === MOCK_USER.email && data.password === MOCK_USER.password) {
            this.authUser = MOCK_USER;
            localStorage.setItem('token', 'asdh12836asd91bsgs')
            this.router.navigate(['index', 'home'])
        } else {
            this.sweetalertService.showError('Email o contraseña invalidos')
        }
    }

    logout(): void {
        this.authUser = null;
        this.router.navigate(['auth', 'login'])
    }

    verifyToken() {
        return of(localStorage.getItem('token')).pipe(map((response) => !!response))
    }
}