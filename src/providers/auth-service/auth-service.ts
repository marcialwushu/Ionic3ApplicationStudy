import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  public login(credentials) {

  }

  public register(credentials) {

  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout(){

  }


}
