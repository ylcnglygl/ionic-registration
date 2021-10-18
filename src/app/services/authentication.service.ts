import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Platform} from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
   }

    

  login(user){
   
  }
  logout(){}
  isAuthenticated(){}
  checkToken(){}
}
