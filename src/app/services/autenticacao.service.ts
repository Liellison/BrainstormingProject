import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../services/User';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
  export class AutenticacaoService {
    private userAuth: Boolean = false;

    constructor(private router: Router) { }

    doLogin(usuario:User){
      if(usuario.nome === 'eu' && usuario.senha === '123'){
        this.userAuth = true;
        this.router.navigate(['/inicio']);
      }else{
        this.userAuth = false;
        this.router.navigate(['/inicio']);
      }
    }

    public cadastrarUsuario(usuario: User): void {
      firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
          .then((resposta: any) => {
              delete usuario.senha
              firebase.database().ref(`Usuario/${btoa(usuario.email)}`)
                  .set(usuario)
              alert('Usuário cadastrado com sucesso')
              this.router.navigate(['/login'])
          })
          .catch((error: Error) => {
              alert('Este email já está registrado')
          })
  }
}