import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../../services/autenticacao.service';
import { User } from '../../../services/User';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login-page-tenho',
  templateUrl: './login-page-tenho.component.html',
  styleUrls: ['./login-page-tenho.component.css']
})

export class LoginPageTenhoComponent implements OnInit {
  LoginHas = 'Tenho cadastro';
  //public usuario: User = new User();
  constructor(private autenticacao: AutenticacaoService) {  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }

  doLogin() {
    //this.autenticacao.doLogin(this.usuario);
    //console.log(this.usuario);

    function onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

  }
  // tslint:disable-next-line:prefer-const
  // tslint:disable-next-line:member-ordering
  provider = new firebase.auth.GoogleAuthProvider();

}
