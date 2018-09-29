import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageTenhoComponent } from './pages/page-login/login-page-tenho/login-page-tenho.component';
import { SingupComponent } from './pages/page-singup/singup/singup.component';
import { MenuLateralComponent } from './pages/page-home/menu-lateral/menu-lateral.component';
import { WelcomeComponent } from './pages/page-login/welcome/welcome.component';
import { TelaInicialComponent } from './pages/page-home/tela-inicial/tela-inicial.component';
import { LoginErradoComponent } from './pages/page-login/login-errado/login-errado.component';
import { CabecalhoComponent } from './pages/page-home/cabecalho/cabecalho.component';
import { Bran1Component } from './pages/page-home/tela-inicial/bran1/bran1.component';

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'loginPageTenho', component: LoginPageTenhoComponent},
  {path: 'cadastro', component: SingupComponent},
  {path: 'menuLateral', component: MenuLateralComponent},
  {path: 'inicio', component: TelaInicialComponent},
  {path: 'inicio/branDone', component:Bran1Component},
  {path: 'loginPageTenho/Erro', component:LoginErradoComponent},
  {path: 'cabecalho', component:CabecalhoComponent},
  {path: 'loginPageTenho/Erro', component: LoginErradoComponent}
]
