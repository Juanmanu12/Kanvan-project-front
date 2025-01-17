import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import {jwtDecode} from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private http = inject(HttpClient);

  constructor() { }

  register(formValues: User) {
    return this.http.post('http://localhost:3000/api/auth/register', {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      email: formValues.email,
      password: formValues.password,
    });
  }

  login(formValues: any) {
    return this.http.post('http://localhost:3000/api/auth/login', {
      email: formValues.email,
      password: formValues.password,
    });
  }

  isLogged() {
    if (localStorage.getItem('user_token')) {
      return true;
    } else {
      return false;
    }
  }

  getDecodedToken(): any {
    const token = localStorage.getItem('user_token');
    if (token) {
    const decodedToken =  jwtDecode(token);
    return decodedToken.sub
    }
    return;
  }

  getUser(){
    return this.http.get('http://localhost:3000/api/users/' + this.getDecodedToken())
  }
}
