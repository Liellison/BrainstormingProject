import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageTenhoComponent } from './login-page-tenho/login-page-tenho.component';
import { SingupComponent } from './singup/singup.component';
import { routes } from './app.router';
<<<<<<< HEAD
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
=======
import { AutenticacaoService } from './login-page-tenho/autenticacao.service';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Bran1Component } from './tela-inicial/bran1/bran1.component';
import { LoginErradoComponent } from './login-page-tenho/login-errado/login-errado.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
>>>>>>> master


@NgModule({
  declarations: [
    AppComponent,
    LoginPageTenhoComponent,
    SingupComponent,
<<<<<<< HEAD
    MenuLateralComponent
=======
    TelaInicialComponent,
    WelcomeComponent,
    Bran1Component,
    LoginErradoComponent,
    CabecalhoComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
