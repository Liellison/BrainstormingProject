(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.Button {\r\n  width: 190px;\r\n  height: 40px;\r\n  background-color: #5d1049;\r\n  margin: center;\r\n  border-radius: 20px;\r\n}\r\n.ButtonText {\r\n  margin: center;\r\n  font-family: Montserrat;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n  color: #ffffff;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.welcome = 'Bem vindo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _pages_page_singup_singup_singup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-singup/singup/singup.component */ "./src/app/pages/page-singup/singup/singup.component.ts");
/* harmony import */ var _pages_page_login_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-login/welcome/welcome.component */ "./src/app/pages/page-login/welcome/welcome.component.ts");
/* harmony import */ var _pages_page_login_login_errado_login_errado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-login/login-errado/login-errado.component */ "./src/app/pages/page-login/login-errado/login-errado.component.ts");
/* harmony import */ var _pages_page_login_login_page_tenho_login_page_tenho_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-login/login-page-tenho/login-page-tenho.component */ "./src/app/pages/page-login/login-page-tenho/login-page-tenho.component.ts");
/* harmony import */ var _pages_page_home_tela_inicial_tela_inicial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-home/tela-inicial/tela-inicial.component */ "./src/app/pages/page-home/tela-inicial/tela-inicial.component.ts");
/* harmony import */ var _pages_page_home_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-home/menu-lateral/menu-lateral.component */ "./src/app/pages/page-home/menu-lateral/menu-lateral.component.ts");
/* harmony import */ var _pages_page_home_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-home/cabecalho/cabecalho.component */ "./src/app/pages/page-home/cabecalho/cabecalho.component.ts");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _pages_page_home_tela_inicial_bran1_bran1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-home/tela-inicial/bran1/bran1.component */ "./src/app/pages/page-home/tela-inicial/bran1/bran1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_page_login_login_page_tenho_login_page_tenho_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageTenhoComponent"],
                _pages_page_singup_singup_singup_component__WEBPACK_IMPORTED_MODULE_5__["SingupComponent"],
                _pages_page_home_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_10__["MenuLateralComponent"],
                _pages_page_login_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _pages_page_home_tela_inicial_tela_inicial_component__WEBPACK_IMPORTED_MODULE_9__["TelaInicialComponent"],
                _pages_page_login_login_errado_login_errado_component__WEBPACK_IMPORTED_MODULE_7__["LoginErradoComponent"],
                _pages_page_home_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_11__["CabecalhoComponent"],
                _pages_page_home_tela_inicial_bran1_bran1_component__WEBPACK_IMPORTED_MODULE_13__["Bran1Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_4__["routes"])
            ],
            providers: [
                _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_12__["AutenticacaoService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_page_login_login_page_tenho_login_page_tenho_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-login/login-page-tenho/login-page-tenho.component */ "./src/app/pages/page-login/login-page-tenho/login-page-tenho.component.ts");
/* harmony import */ var _pages_page_singup_singup_singup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-singup/singup/singup.component */ "./src/app/pages/page-singup/singup/singup.component.ts");
/* harmony import */ var _pages_page_home_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-home/menu-lateral/menu-lateral.component */ "./src/app/pages/page-home/menu-lateral/menu-lateral.component.ts");
/* harmony import */ var _pages_page_login_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-login/welcome/welcome.component */ "./src/app/pages/page-login/welcome/welcome.component.ts");
/* harmony import */ var _pages_page_home_tela_inicial_tela_inicial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-home/tela-inicial/tela-inicial.component */ "./src/app/pages/page-home/tela-inicial/tela-inicial.component.ts");
/* harmony import */ var _pages_page_login_login_errado_login_errado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-login/login-errado/login-errado.component */ "./src/app/pages/page-login/login-errado/login-errado.component.ts");
/* harmony import */ var _pages_page_home_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-home/cabecalho/cabecalho.component */ "./src/app/pages/page-home/cabecalho/cabecalho.component.ts");
/* harmony import */ var _pages_page_home_tela_inicial_bran1_bran1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-home/tela-inicial/bran1/bran1.component */ "./src/app/pages/page-home/tela-inicial/bran1/bran1.component.ts");








var routes = [
    { path: '', component: _pages_page_login_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'loginPageTenho', component: _pages_page_login_login_page_tenho_login_page_tenho_component__WEBPACK_IMPORTED_MODULE_0__["LoginPageTenhoComponent"] },
    { path: 'cadastro', component: _pages_page_singup_singup_singup_component__WEBPACK_IMPORTED_MODULE_1__["SingupComponent"] },
    { path: 'menuLateral', component: _pages_page_home_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_2__["MenuLateralComponent"] },
    { path: 'inicio', component: _pages_page_home_tela_inicial_tela_inicial_component__WEBPACK_IMPORTED_MODULE_4__["TelaInicialComponent"] },
    { path: 'inicio/branDone', component: _pages_page_home_tela_inicial_bran1_bran1_component__WEBPACK_IMPORTED_MODULE_7__["Bran1Component"] },
    { path: 'loginPageTenho/Erro', component: _pages_page_login_login_errado_login_errado_component__WEBPACK_IMPORTED_MODULE_5__["LoginErradoComponent"] },
    { path: 'cabecalho', component: _pages_page_home_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_6__["CabecalhoComponent"] },
    { path: 'loginPageTenho/Erro', component: _pages_page_login_login_errado_login_errado_component__WEBPACK_IMPORTED_MODULE_5__["LoginErradoComponent"] }
];


/***/ }),

/***/ "./src/app/pages/page-home/cabecalho/cabecalho.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-home/cabecalho/cabecalho.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Rectangle-41 {\r\n  width: 1360px;\r\n  height: 720px;\r\n  background-color: #fffbe6;\r\n  color: #ffffff;\r\n  \r\n}\r\n.Rectangle {\r\n  width: 1350px;\r\n  height: 82px;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  background-color: #5d1049;\r\n    color: #ffffff;\r\n}\r\n.Rectangle-22 {\r\n  width: 413px;\r\n  height: 31px;\r\n  position: absolute;\r\n  top: 25px;\r\n  left: 800px;\r\n  background-color: #720d5d;\r\n    color: #ffffff;\r\n}\r\n.Ellipse {\r\n    border-radius:100%;\r\n    width: 63px;\r\n    height: 63px;\r\n    position: absolute;\r\n    top: 9px;\r\n    left: 1250px;\r\n    background-color: #720d5d;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/pages/page-home/cabecalho/cabecalho.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-home/cabecalho/cabecalho.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Rectangle-41\">\r\n\r\n<div class=\"Rectangle\">\r\n    <div class=\"Linha\"></div>\r\n        <div class=\"Rectangle-22\">\r\n        <p><b>Nome de Usuário</b></p>\r\n        </div>\r\n        <div class=\"Ellipse\">\r\n            <p>\r\n                <img src=\"usuario.png\" width=\"40\" height=\"40\"/>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/page-home/cabecalho/cabecalho.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-home/cabecalho/cabecalho.component.ts ***!
  \******************************************************************/
/*! exports provided: CabecalhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabecalhoComponent", function() { return CabecalhoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabecalhoComponent = /** @class */ (function () {
    function CabecalhoComponent() {
    }
    CabecalhoComponent.prototype.ngOnInit = function () {
    };
    CabecalhoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cabecalho',
            template: __webpack_require__(/*! ./cabecalho.component.html */ "./src/app/pages/page-home/cabecalho/cabecalho.component.html"),
            styles: [__webpack_require__(/*! ./cabecalho.component.css */ "./src/app/pages/page-home/cabecalho/cabecalho.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CabecalhoComponent);
    return CabecalhoComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-home/menu-lateral/menu-lateral.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/page-home/menu-lateral/menu-lateral.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menulat {\r\n    /* MenuLateral */\r\n\r\nposition: absolute;\r\nwidth: 261px;\r\nheight: 750px;\r\nleft: 0px;\r\ntop: 82px;\r\n\r\nbackground: #720D5D;\r\n}\r\n\r\n.ListBrains {\r\n    position: absolute;\r\n    width: 229px;   \r\n    height: 350px;\r\n    left: 15px;\r\n    top: 255px;\r\n\r\n    background: #5D1049;\r\n    border-radius: 10px;\r\n}\r\n\r\n.Button {\r\n    position: absolute;\r\n    width: 230px;\r\n    height: 76px;\r\n    left: 14px;\r\n    top: 155px;\r\n\r\n    background: #5D1049;\r\n    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 15px;    \r\n}\r\n\r\n.ButtonText {\r\n    /* NOVO BRAINSTORMING */\r\n\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    text-align: center;\r\n\r\n    color: rgb(255, 255, 255);\r\n}"

/***/ }),

/***/ "./src/app/pages/page-home/menu-lateral/menu-lateral.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/page-home/menu-lateral/menu-lateral.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <label for=\"male\" class=\"menulat\"></label>\r\n  <label for=\"male\" class=\"ListBrains\"></label>\r\n\r\n  <button type=\"submit\" name=\"BtNewBrans\" class=\"Button\"><h1\r\n     class=\"ButtonText\">Novo Branstorming</h1></button>\r\n</div>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/pages/page-home/menu-lateral/menu-lateral.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/page-home/menu-lateral/menu-lateral.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuLateralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLateralComponent", function() { return MenuLateralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuLateralComponent = /** @class */ (function () {
    function MenuLateralComponent() {
    }
    MenuLateralComponent.prototype.ngOnInit = function () {
    };
    MenuLateralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-lateral',
            template: __webpack_require__(/*! ./menu-lateral.component.html */ "./src/app/pages/page-home/menu-lateral/menu-lateral.component.html"),
            styles: [__webpack_require__(/*! ./menu-lateral.component.css */ "./src/app/pages/page-home/menu-lateral/menu-lateral.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuLateralComponent);
    return MenuLateralComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-home/tela-inicial/bran1/bran1.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/page-home/tela-inicial/bran1/bran1.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/page-home/tela-inicial/bran1/bran1.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/page-home/tela-inicial/bran1/bran1.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardLarge\">\r\n    <div class=\"headerLarge\">\r\n      <h1>Ideias para projeto secreto</h1>\r\n    </div>\r\n    <div class=\"containerLarge\">\r\n      <p>Nome do meu cachorrinho novo - Dezembro 1, 2018</p>\r\n      <p>Nome do meu cachorrinho novo - Dezembro 1, 2018</p>\r\n      <p>Nome do meu cachorrinho novo - Dezembro 1, 2018</p>\r\n      <p>Nome do meu cachorrinho novo - Dezembro 1, 2018</p>\r\n      <p>Nome do meu cachorrinho novo - Dezembro 1, 2018</p>\r\n      <p>Nome do meu cachorrinho novo - Dezembro 1, 2018</p>\r\n    </div>\r\n  </div>\r\n  <app-cabecalho></app-cabecalho>\r\n<app-menu-lateral></app-menu-lateral>"

/***/ }),

/***/ "./src/app/pages/page-home/tela-inicial/bran1/bran1.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/page-home/tela-inicial/bran1/bran1.component.ts ***!
  \***********************************************************************/
/*! exports provided: Bran1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bran1Component", function() { return Bran1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Bran1Component = /** @class */ (function () {
    function Bran1Component() {
    }
    Bran1Component.prototype.ngOnInit = function () {
    };
    Bran1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bran1',
            template: __webpack_require__(/*! ./bran1.component.html */ "./src/app/pages/page-home/tela-inicial/bran1/bran1.component.html"),
            styles: [__webpack_require__(/*! ./bran1.component.css */ "./src/app/pages/page-home/tela-inicial/bran1/bran1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Bran1Component);
    return Bran1Component;
}());



/***/ }),

/***/ "./src/app/pages/page-home/tela-inicial/tela-inicial.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/page-home/tela-inicial/tela-inicial.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/page-home/tela-inicial/tela-inicial.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/page-home/tela-inicial/tela-inicial.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>{{ welcome }}</h1>\r\n  <div class=\"card\">\r\n    <div class=\"header\">\r\n      <h1>1</h1>\r\n    </div>\r\n    <div class=\"container\" routerLink='branDone'>\r\n        <button type=\"submit\" hidden=\"true\" class=\"Button\" routerLink='/inicio/branDone'></button>\r\n        <p>Ideias para projeto secreto - Março 1, 2018</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"header\">\r\n      <h1>2</h1>\r\n    </div>\r\n    <div class=\"container\">\r\n      <p>Nome do meu cachorrinho novo - Dezembro 1, 2018</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"header\">\r\n      <h1>3</h1>\r\n    </div>\r\n    <div class=\"container\">\r\n      <p>Como melhor meus projetos pessoais - Abril 1, 2016</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-cabecalho></app-cabecalho>\r\n<app-menu-lateral></app-menu-lateral>\r\n"

/***/ }),

/***/ "./src/app/pages/page-home/tela-inicial/tela-inicial.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/page-home/tela-inicial/tela-inicial.component.ts ***!
  \************************************************************************/
/*! exports provided: TelaInicialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelaInicialComponent", function() { return TelaInicialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TelaInicialComponent = /** @class */ (function () {
    function TelaInicialComponent() {
        this.welcome = 'Você esta logado, bem vindo!';
    }
    TelaInicialComponent.prototype.ngOnInit = function () {
    };
    TelaInicialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tela-inicial',
            template: __webpack_require__(/*! ./tela-inicial.component.html */ "./src/app/pages/page-home/tela-inicial/tela-inicial.component.html"),
            styles: [__webpack_require__(/*! ./tela-inicial.component.css */ "./src/app/pages/page-home/tela-inicial/tela-inicial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TelaInicialComponent);
    return TelaInicialComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-login/login-errado/login-errado.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/page-login/login-errado/login-errado.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/page-login/login-errado/login-errado.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/page-login/login-errado/login-errado.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <h1>Erro no login</h1>\r\n  \r\n    <button type=\"submit\" id=\"BtCadastro\" class=\"Button\" routerLink='/loginPageTenho' ><h1 class=\"ButtonText\">Tente novamente</h1></button>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/page-login/login-errado/login-errado.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/page-login/login-errado/login-errado.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginErradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginErradoComponent", function() { return LoginErradoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginErradoComponent = /** @class */ (function () {
    function LoginErradoComponent() {
    }
    LoginErradoComponent.prototype.ngOnInit = function () {
    };
    LoginErradoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-errado',
            template: __webpack_require__(/*! ./login-errado.component.html */ "./src/app/pages/page-login/login-errado/login-errado.component.html"),
            styles: [__webpack_require__(/*! ./login-errado.component.css */ "./src/app/pages/page-login/login-errado/login-errado.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginErradoComponent);
    return LoginErradoComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-login/login-page-tenho/login-page-tenho.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/page-login/login-page-tenho/login-page-tenho.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <h1>{{ LoginHas }}</h1>\r\n    <input (ngModel)=\"usuario.nome\" id=\"usuario\" type=\"text\" name=\"IDLogin\" size=\"40\" /><br/>\r\n    <input (ngModel)=\"usuario.senha\" id=\"senha\" type=\"password\" name=\"PassLogin\" size=\"40\"/><br/>\r\n    <button (click)=\"doLogin()\" type=\"submit\" name=\"BtLogin\" class=\"Button\"><h1 class=\"ButtonText\">Login</h1></button><br/>\r\n    <button type=\"submit\" id=\"BtCadastro\" class=\"Button\" routerLink='/cadastro'><h1 class=\"ButtonText\">Quero me cadastrar</h1></button>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/page-login/login-page-tenho/login-page-tenho.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/page-login/login-page-tenho/login-page-tenho.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LoginPageTenhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageTenhoComponent", function() { return LoginPageTenhoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/User */ "./src/app/services/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageTenhoComponent = /** @class */ (function () {
    function LoginPageTenhoComponent(autenticacao) {
        this.autenticacao = autenticacao;
        this.LoginHas = 'Tenho cadastro';
        this.usuario = new _services_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    LoginPageTenhoComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    LoginPageTenhoComponent.prototype.doLogin = function () {
        this.autenticacao.doLogin(this.usuario);
        console.log(this.usuario);
    };
    LoginPageTenhoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page-tenho',
            template: __webpack_require__(/*! ./login-page-tenho.component.html */ "./src/app/pages/page-login/login-page-tenho/login-page-tenho.component.html")
        }),
        __metadata("design:paramtypes", [_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacaoService"]])
    ], LoginPageTenhoComponent);
    return LoginPageTenhoComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-login/welcome/welcome.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-login/welcome/welcome.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/page-login/welcome/welcome.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/page-login/welcome/welcome.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>{{ welcome }}</h1>\r\n\r\n  <a [routerLink]=\"[ '/loginPageTenho']\"><button type=\"submit\" id=\"BtTenho\" class=\"Button\"><h1 class=\"ButtonText\">Tenho cadastro</h1></button></a><br/>\r\n  <button type=\"submit\" id=\"BtCadastro\" class=\"Button\" routerLink='/cadastro' ><h1 class=\"ButtonText\">Quero me cadastrar</h1></button>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/page-login/welcome/welcome.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/page-login/welcome/welcome.component.ts ***!
  \***************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.welcome = 'Bem vindo';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/pages/page-login/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/pages/page-login/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-singup/singup/singup.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/page-singup/singup/singup.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Button {\r\n  width: 190px;\r\n  height: 40px;\r\n  background-color: #5d1049;\r\n  margin: center;\r\n  border-radius: 20px;\r\n}\r\n.ButtonText {\r\n  margin: center;\r\n  font-family: Montserrat;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n  color: #ffffff;\r\n}\r\ninput {\r\n  width:70%;       /*tamannho da barra de texto na tela*/\r\n  padding:12px 0px;\r\n  margin: 8px 10px;\r\n  box-sizing:border-box;\r\n  border:none;\r\n  border-bottom:1.3px solid black;\r\n  height: 48px;\r\n  background: none;\r\n  border-radius: 0;\r\n  color: black;\r\n}\r\ninput:hover{\r\n  background: #ffffff;\r\n}\r\ninput:not(:placeholder-shown){\r\n    color: black;\r\n}\r\ninput:focus{\r\n  background: none;\r\n  outline: none;\r\n    color: black;\r\n}\r\nform{\r\npadding:40px 20px;\r\nmargin: 30px 350px;\r\nborder:none;\r\nwidth: 40%;\r\n-ms-grid-row-align: center;\r\n    align-self: center;\r\nbox-align: center;\r\nborder-style: outset;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/page-singup/singup/singup.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-singup/singup/singup.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form style=\"text-align:center\">\r\n\r\n<h1>{{title}}</h1>\r\n\r\n  <br>\r\n  <label for=\"txtName\">Nome:</label>\r\n  <input type=\"text\" placeholder=\"Digite o nome do seu usuário\" name=\"Name\" size= '60'value=\"\">\r\n  <br>\r\n  <br>\r\n  <label for= \"txtEmail\">E-mail:</label>\r\n  <input type=\"email\" placeholder=\"Digite o seu email\" name=\"E-Mail\"size= '60' value=\"\">\r\n  <br>\r\n  <br>\r\n  <label for=\"txtSenha\">Senha:</label>\r\n  <input type= \"password\" placeholder=\"Digite sua senha\" name=\"psswd\" size= '60'value=\"\">\r\n  <br>\r\n  <br>\r\n\r\n\r\n  <button type=\"submit\" name=\"BtnSingup\" class=\"Button\"><h1 class=\"ButtonText\"> Faça seu cadastro </h1></button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/page-singup/singup/singup.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/page-singup/singup/singup.component.ts ***!
  \**************************************************************/
/*! exports provided: SingupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupComponent", function() { return SingupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingupComponent = /** @class */ (function () {
    function SingupComponent() {
        this.title = 'Quero me cadastrar';
    }
    SingupComponent.prototype.ngOnInit = function () {
    };
    SingupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singup',
            template: __webpack_require__(/*! ./singup.component.html */ "./src/app/pages/page-singup/singup/singup.component.html"),
            styles: [__webpack_require__(/*! ./singup.component.css */ "./src/app/pages/page-singup/singup/singup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingupComponent);
    return SingupComponent;
}());



/***/ }),

/***/ "./src/app/services/User.ts":
/*!**********************************!*\
  !*** ./src/app/services/User.ts ***!
  \**********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/autenticacao.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/autenticacao.service.ts ***!
  \**************************************************/
/*! exports provided: AutenticacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoService", function() { return AutenticacaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutenticacaoService = /** @class */ (function () {
    function AutenticacaoService(router) {
        this.router = router;
        this.userAuth = false;
    }
    AutenticacaoService.prototype.doLogin = function (usuario) {
        if (usuario.nome === 'eu' && usuario.senha === '123') {
            this.userAuth = true;
            this.router.navigate(['/inicio']);
        }
        else {
            this.userAuth = false;
            this.router.navigate(['/inicio']);
        }
    };
    AutenticacaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AutenticacaoService);
    return AutenticacaoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBUPg7LRFpfXLwrUGa4QSG-bSqrPQsYJdE",
        authDomain: "bstorm-f0696.firebaseapp.com",
        databaseURL: "https://bstorm-f0696.firebaseio.com",
        projectId: "bstorm-f0696",
        storageBucket: "bstorm-f0696.appspot.com",
        messagingSenderId: "1010127269430"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Liellison\Desktop\Gdrive\University\UERN\2018.1 - 13° Periodo - Natal\DevWeb\Projeto\BrainstormingProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map