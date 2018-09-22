import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageTenhoComponent } from './login-page-tenho/login-page-tenho.component';
import { SingupComponent} from './singup/singup.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Bran1Component } from './tela-inicial/bran1/bran1.component';
import { LoginErradoComponent } from './login-page-tenho/login-errado/login-errado.component';


export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'loginPageTenho', component: LoginPageTenhoComponent},
  {path: 'cadastro', component: SingupComponent},
  {path: 'inicio', component: TelaInicialComponent},
  {path: 'inicio/branDone', component:Bran1Component},
  {path: 'loginPageTenho/Erro', component:LoginErradoComponent}
]
export const RoutingModule = RouterModule.forRoot(routes);