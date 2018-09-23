import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageTenhoComponent } from './login-page-tenho/login-page-tenho.component';
import { SingupComponent } from './singup/singup.component';
import { routes } from './app.router';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageTenhoComponent,
    SingupComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
