import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.router';
import { SingupComponent } from './pages/page-singup/singup/singup.component';
import { WelcomeComponent } from './pages/page-login/welcome/welcome.component';
import { LoginErradoComponent } from './pages/page-login/login-errado/login-errado.component';
import { LoginPageTenhoComponent } from './pages/page-login/login-page-tenho/login-page-tenho.component';
import { TelaInicialComponent } from './pages/page-home/tela-inicial/tela-inicial.component';
import { MenuLateralComponent } from './pages/page-home/menu-lateral/menu-lateral.component';
import { CabecalhoComponent } from './pages/page-home/cabecalho/cabecalho.component';
import { AutenticacaoService } from './services/autenticacao.service';
import { Bran1Component } from './pages/page-home/tela-inicial/bran1/bran1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageTenhoComponent,
    SingupComponent,
    MenuLateralComponent,
    WelcomeComponent,
    TelaInicialComponent,
    LoginErradoComponent,
    CabecalhoComponent,
    Bran1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
