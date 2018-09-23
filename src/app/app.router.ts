import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageTenhoComponent } from './login-page-tenho/login-page-tenho.component';
import { SingupComponent} from './singup/singup.component';
<<<<<<< HEAD
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
=======
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Bran1Component } from './tela-inicial/bran1/bran1.component';
import { LoginErradoComponent } from './login-page-tenho/login-errado/login-errado.component';

>>>>>>> master

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'loginPageTenho', component: LoginPageTenhoComponent},
  {path: 'cadastro', component: SingupComponent},
<<<<<<< HEAD
  {path: 'menuLateral', component: MenuLateralComponent}
=======
  {path: 'inicio', component: TelaInicialComponent},
  {path: 'inicio/branDone', component:Bran1Component},
  {path: 'loginPageTenho/Erro', component:LoginErradoComponent}
>>>>>>> master
]
export const RoutingModule = RouterModule.forRoot(routes);