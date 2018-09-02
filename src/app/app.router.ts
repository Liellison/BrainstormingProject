import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageTenhoComponent } from './login-page-tenho/login-page-tenho.component';
import { SingupComponent} from './singup/singup.component';

export const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'loginPageTenho', component: LoginPageTenhoComponent},
  {path: 'cadastro', component: SingupComponent}

]
