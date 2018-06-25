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
    if(credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    }else {
      // Neste ponto, faça um pedido ao seu back-end para fazer uma verificação real!
      return Observable.create(observer => {
        let acess = (credentials.password === "pass" && credentials.email === "email")
        this.currentUser = new User('Jack', 'jack@email.com');
        observer.next(acess);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if(credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // Neste ponto, armazene as credenciais no seu back-end!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout(){
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }


}
