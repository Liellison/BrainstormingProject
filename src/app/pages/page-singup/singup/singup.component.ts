import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../../services/User';
import { AutenticacaoService } from '../../../services/autenticacao.service';

 @Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  title = 'Cadastro';

  public form_cadastro: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome': new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor(private autenticacao: AutenticacaoService) { }

  ngOnInit() {
  }

  public cadastrarUsuario(): void {
    
    console.log(this.form_cadastro)
    let usuario: User = new User(
      this.form_cadastro.value.nome,
      this.form_cadastro.value.email,
      this.form_cadastro.value.senha
    )
    console.log(usuario)
    this.autenticacao.cadastrarUsuario(usuario)
  }

}
