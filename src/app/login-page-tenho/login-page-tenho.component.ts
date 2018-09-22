import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from './autenticacao.service';
import { User } from './User';

@Component({
  selector: 'app-login-page-tenho',
  templateUrl: './login-page-tenho.component.html'
})
export class LoginPageTenhoComponent implements OnInit{
  LoginHas = 'Tenho cadastro'
  private usuario: User = new User();
  constructor(private autenticacao: AutenticacaoService){  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  doLogin(){
    this.autenticacao.doLogin(this.usuario);
  }
}
