import { Injectable, EventEmitter } from '@angular/core';
import { User } from './User';
import { Router } from '@angular/router';

@Injectable()
export class AutenticacaoService {
  private userAuth: Boolean = false;

  constructor(private router: Router) { }

  doLogin(usuario:User){
    if(usuario.nome === 'eu' && usuario.senha === '123'){
      this.userAuth = true;
    }else{
      this.userAuth = false;
    }
  }
}