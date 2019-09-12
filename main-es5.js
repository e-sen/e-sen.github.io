(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<tex-home></tex-home>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/asset/asset.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/asset/asset.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf=\"signedIn\" class=\"asset\">\n  <mat-tab label=\"Order\">\n    <tex-order></tex-order>\n  </mat-tab>\n  <mat-tab label=\"Position\">\n    <tex-position></tex-position>\n  </mat-tab>\n  <mat-tab label=\"Cash\">\n    <tex-cash></tex-cash>\n  </mat-tab>\n</mat-tab-group>\n<mat-grid-list cols=\"1\" *ngIf=\"!signedIn\" rowHeight=\"100%\">\n  <mat-grid-tile>\n    <button mat-button (click)=\"open()\">Login</button>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/asset/cash/cash.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/asset/cash/cash.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list class=\"cash\" cols=\"4\" rowHeight=\"100\">\n  <mat-grid-tile>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Balance</mat-label>\n      <input matInput [value]=\"cash.balance\" type=\"text\"\n             disabled>\n    </mat-form-field>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Initial</mat-label>\n      <input matInput [value]=\"cash.initial\" type=\"text\"\n             disabled>\n    </mat-form-field>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Maintenance</mat-label>\n      <input matInput [value]=\"cash.maintenance\" type=\"text\"\n             disabled>\n    </mat-form-field>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Total</mat-label>\n      <input matInput #total [value]=\"cash.maintenance+cash.balance+cash.initial\" type=\"text\"\n             disabled>\n    </mat-form-field>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"4\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Status</mat-label>\n      <input matInput disabled value=\" \">\n      <mat-progress-bar mode=\"buffer\" [value]=\"cash.balance/total.value*100\"\n                        [bufferValue]=\"(cash.balance+cash.initial)/total.value*100\"\n                        [matTooltip]=\"cash.balance+'+'+cash.initial+'+'+cash.maintenance+'\\r\\n='+total.value\" color=\"primary\"></mat-progress-bar>\n    </mat-form-field>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/asset/order/order.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/asset/order/order.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"this.orders\" class=\"mat-elevation-z8\" class=\"order\">\n  <ng-container matColumnDef=\"matcherId\">\n    <th mat-header-cell *matHeaderCellDef>matcherId</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.matcherId}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"orderId\">\n    <th mat-header-cell *matHeaderCellDef>orderId</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.orderId}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"type\">\n    <th mat-header-cell *matHeaderCellDef>type</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef>action</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.action}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"price\">\n    <th mat-header-cell *matHeaderCellDef>price</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"quantity\">\n    <th mat-header-cell *matHeaderCellDef>quantity</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.quantity}}/{{element.initQuantity}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"controller\">\n    <th mat-header-cell *matHeaderCellDef>controller</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-button (click)=\"cancelOrder(element.orderId)\">Cancel</button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"['matcherId','orderId','type','action','price','quantity','controller']\"></tr>\n  <tr mat-row\n      *matRowDef=\"let row; columns: ['matcherId','orderId','type','action','price','quantity','controller'];\"></tr>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/asset/position/position.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/asset/position/position.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"this.positions\" class=\"mat-elevation-z8\" class=\"position\" multiTemplateDataRows>\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"closed\">\n    <th mat-header-cell *matHeaderCellDef>closed</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-button *ngIf=\"!element.closed\" (click)=\"close(element.positionId)\">Close</button>\n      <span *ngIf=\"element.closed\">Closing</span>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"expandedInspector\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length+1\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <table mat-table [dataSource]=\"element.inspectors\">\n          <ng-container matColumnDef=\"{{c}}\" *ngFor=\"let c of ['code','valueOfInspector','valueOfTarget']\">\n            <th mat-header-cell *matHeaderCellDef>{{c}}</th>\n            <td mat-cell *matCellDef=\"let e\">{{e[c]}}</td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"['code','valueOfInspector','valueOfTarget']\"></tr>\n          <tr mat-row *matRowDef=\"let e; columns:['code','valueOfInspector','valueOfTarget']\"></tr>\n        </table>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay.concat('closed')\"></tr>\n  <tr mat-row\n      class=\"example-element-row\"\n      *matRowDef=\"let element; columns: columnsToDisplay.concat('closed');\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\"></tr>\n  <tr mat-row *matRowDef=\"let row: columns: ['expandedInspector']\" class=\"example-detail-row\"></tr>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/charts/charts.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/charts/charts.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;<p>{{matcherId}}</p>&ndash;&gt;-->\n<!--<div>-->\n<!--  <div>Hello</div>-->\n<!--  <div>-->\n<!--    <iframe [src]=\"src\"></iframe>-->\n<!--  </div>-->\n<!--</div>-->\n<mat-card class=\"charts\">\n  <mat-card-header>\n    <mat-card-title>\n      O:{{open}} L:{{low}} H:{{high}} C:{{close}} V:{{volume}} T:{{time}} {{bid}}/{{ask}}\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <iframe [src]=\"src\"></iframe>\n  </mat-card-content>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/controller/controller.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/controller/controller.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\" rowHeight=\"100%\">\n  <mat-grid-tile *ngIf=\"signedIn\">\n    <div class=\"controller\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Type</mat-label>\n        <mat-select #select [value]=\"isMarketPrice?'0':'1'\">\n          <mat-option value=\"1\">Limit</mat-option>\n          <mat-option value=\"0\">Market</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Price</mat-label>\n        <span matSuffix class=\"suffix\">{{primary}}</span>\n        <input matInput type=\"number\" placeholder=\"price\" step=\"0.01\" [(ngModel)]=\"isMarketPrice?0:price\"\n               [disabled]=\"isMarketPrice\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Quantity</mat-label>\n        <span matSuffix class=\"suffix\">{{secondary}}</span>\n        <input matInput type=\"number\" placeholder=\"quantity\" step=\"0.01\" [(ngModel)]=\"quantity\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Leverage</mat-label>\n        <input matInput type=\"number\" placeholder=\"leverage\" min=\"1\" max=\"10\" [(ngModel)]=\"leverage\">\n        <mat-slider [(ngModel)]=\"leverage\" min=\"1\" max=\"10\" color=\"primary\"></mat-slider>\n      </mat-form-field>\n      <div>\n        <button mat-button mat-stroked-button color=\"primary\" (click)=\"create(1)\">Buy</button>\n        <button mat-button mat-stroked-button color=\"warn\" (click)=\"create(-1)\">Sell</button>\n      </div>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile *ngIf=\"!signedIn\">\n    <button mat-button (click)=\"open()\">Login</button>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/home.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/home.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"home\">\n  <mat-drawer #drawer position=\"end\" mode=\"push\">\n    <tex-user *ngIf=\"loggedIn\"></tex-user>\n    <tex-login *ngIf=\"!loggedIn\"></tex-login>\n  </mat-drawer>\n  <mat-drawer-content>\n    <gridster [options]=\"options\">\n      <gridster-item [item]=\"item\" *ngFor=\"let item of items\">\n        <ndc-dynamic [ndcDynamicComponent]=\"item.type\" [ndcDynamicInputs]=\"item.inputs\"></ndc-dynamic>\n      </gridster-item>\n    </gridster>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/menu/menu.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/menu/menu.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar (change)=\"onChange()\" class=\"menu\">\n  <div\n    mat-tab-link\n    (click)=\"activeIndex=index\"\n    [active]=\"activeIndex==index\"\n    *ngFor=\"let contract of contracts; let index = index\"\n    routerLink=\"/contract\" [queryParams]=\"{matcherId:contract.matcherId}\">\n    <!--    <mat-button-toggle-group disabled>-->\n    <!--      <mat-button-toggle disabled>{{contract.bid}}</mat-button-toggle>-->\n    <!--      <mat-button-toggle disabled>{{contract.matcherId}}</mat-button-toggle>-->\n    <!--      <mat-button-toggle disabled>{{contract.ask}}</mat-button-toggle>-->\n    <!--    </mat-button-toggle-group>-->\n    <mat-chip-list disabled>\n      <mat-chip color=\"primary\">{{contract.bid}}</mat-chip>\n      <mat-chip>{{contract.matcherId}}</mat-chip>\n      <mat-chip color=\"accent\">{{contract.ask}}</mat-chip>\n    </mat-chip-list>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/quote/quote.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/quote/quote.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"100%\" class=\"quote\">\n  <mat-grid-tile class=\"quote-item\">\n    <table mat-table [dataSource]=\"this.quote.bids\" class=\"mat-elevation-z8\" class=\"order\">\n      <ng-container matColumnDef=\"price\">\n        <th mat-header-cell *matHeaderCellDef>price</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef>quantity</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"['price','quantity']\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['price','quantity'];\"></tr>\n    </table>\n  </mat-grid-tile>\n  <mat-grid-tile class=\"quote-item\">\n    <table mat-table [dataSource]=\"this.quote.asks\" class=\"mat-elevation-z8\" class=\"order\">\n      <ng-container matColumnDef=\"price\">\n        <th mat-header-cell *matHeaderCellDef>price</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef>quantity</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"['price','quantity']\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['price','quantity'];\"></tr>\n    </table>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/transaction/transaction.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/transaction/transaction.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"this.transactions\" class=\"mat-elevation-z8\" class=\"order\">\n  <ng-container matColumnDef=\"type\">\n    <th mat-header-cell *matHeaderCellDef>type</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"price\">\n    <th mat-header-cell *matHeaderCellDef>price</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"quantity\">\n    <th mat-header-cell *matHeaderCellDef>quantity</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"['type','price','quantity']\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['type','price','quantity'];\"></tr>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/home/user-info/user-info.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/home/user-info/user-info.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\" (click)=\"open()\">\n  <mat-card-header *ngIf=\"loggedIn\" class=\"card-header\">\n    <img mat-card-avatar [lazyLoad]=\"avatar\">\n  </mat-card-header>\n  <button mat-button color=\"primary\">Login</button>\n</mat-card>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/login/login.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/login/login.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\" (keydown.enter)=\"login()\">\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Username</mat-label>\n      <input matInput [(ngModel)]=\"username\" type=\"email\" placeholder=\"email/phone\" [disabled]=\"logging\">\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input matInput [(ngModel)]=\"password\" type=\"password\" placeholder=\"password\" [disabled]=\"logging\">\n    </mat-form-field>\n  </div>\n  <div>\n    <button mat-stroked-button class=\"custom-button\" (click)=\"login()\" [disabled]=\"logging\">\n      <mat-progress-bar *ngIf=\"logging\" mode=\"indeterminate\"></mat-progress-bar>\n      <span *ngIf=\"!logging\">SignIn</span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tex/user/user.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tex/user/user.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user\">\n  <div>\n    <mat-card class=\"avatar\">\n      <img mat-card-md-image [defaultImage]=\"avatar\" lazyLoad/>\n    </mat-card>\n  </div>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Id</mat-label>\n      <input matInput [(ngModel)]=\"id\" type=\"text\" placeholder=\"Id\" disabled>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Username</mat-label>\n      <input matInput [(ngModel)]=\"username\" type=\"text\" placeholder=\"username\" disabled>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Location</mat-label>\n      <input matInput [(ngModel)]=\"location\" type=\"text\" placeholder=\"location\" disabled>\n    </mat-form-field>\n  </div>\n  <div>\n    <button mat-stroked-button class=\"custom-button\" (click)=\"logout()\" color=\"warn\">\n      <span>SignOut</span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tex_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tex/home/home.component */ "./src/app/tex/home/home.component.ts");




var routes = [{
        path: 'contract', component: _tex_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:9px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transform:scale(0)}@media (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-pseudo-checkbox-disabled{color:#b0b0b0}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#3f51b5}@media (-ms-high-contrast:active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform .2s ease-in-out;transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content._mat-animation-noopable,.ng-animate-disabled .mat-badge-content{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#3f51b5}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ff4081}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border:solid 1px rgba(0,0,0,.12)}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:rgba(0,0,0,.54)}@media (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox .mat-ripple-element{background-color:#000}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element{background:#3f51b5}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element{background:#ff4081}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element{background:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,64,129,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-datepicker-toggle-active{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent{color:#ff4081}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after{color:#3f51b5}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after{color:#ff4081}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{color:rgba(0,0,0,.54)}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#3f51b5}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after{color:#f44336}.mat-list-base .mat-list-item{color:rgba(0,0,0,.87)}.mat-list-base .mat-list-option{color:rgba(0,0,0,.87)}.mat-list-base .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-action-list .mat-list-item:focus,.mat-action-list .mat-list-item:hover,.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon-no-color,.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#c5cae9}.mat-progress-bar-buffer{background-color:#c5cae9}.mat-progress-bar-fill::after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-drawer-side{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#ff4081}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:rgba(255,64,129,.54)}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:rgba(63,81,181,.54)}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}@media (hover:none){.mat-step-header:hover{background:0 0}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.54)}.mat-step-header .mat-step-icon{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#3f51b5;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header::after,.mat-horizontal-stepper-header::before,.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent{background:#ff4081;color:#fff}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-nested-tree-node,.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{color:rgba(255,255,255,.7);background:#323232;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-simple-snackbar-action{color:#ff4081}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQixlQUFlLENBQUMsY0FBYyxDQUFDLDhDQUE4QyxDQUFDLG9DQUFvQyxhQUFhLENBQUMsb0NBQW9DLGNBQWMsQ0FBQyx5Q0FBeUMscURBQXFELENBQUMsZUFBZSxDQUFDLHNDQUFzQyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsNkNBQTZDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQyw2Q0FBNkMscURBQXFELENBQUMsZUFBZSxDQUFDLDJCQUEyQix3REFBd0QsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLHVEQUF1RCxDQUFDLGVBQWUsQ0FBQyw2QkFBNkIscURBQXFELENBQUMsc0NBQXNDLHFEQUFxRCxDQUFDLDRDQUE0QyxlQUFlLENBQUMsd0JBQXdCLHFEQUFxRCxDQUFDLDhDQUE4Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsOENBQThDLHFEQUFxRCxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyw4Q0FBOEMscURBQXFELENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLDhDQUE4QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLHFEQUFxRCxDQUFDLDRHQUE0Ryw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLG1CQUFtQiw4Q0FBOEMsQ0FBQyxVQUFVLDhDQUE4QyxDQUFDLGdCQUFnQixjQUFjLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxjQUFjLENBQUMscUNBQXFDLGNBQWMsQ0FBQyxjQUFjLDhDQUE4QyxDQUFDLHlDQUF5QyxnQkFBZ0IsQ0FBQyxVQUFVLGNBQWMsQ0FBQyxlQUFlLENBQUMsK0VBQStFLGNBQWMsQ0FBQyxXQUFXLDhDQUE4QyxDQUFDLGlCQUFpQixjQUFjLENBQUMsZUFBZSxDQUFDLDJCQUEyQixjQUFjLENBQUMsY0FBYyw4Q0FBOEMsQ0FB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QWd2QixxQ0FBcUMsQ0FBQyw4TUFBOE0sd0JBQXdCLENBQUMsME1BQTBNLFVBQVUsQ0FBQyw4UUFBOFEsMEJBQTBCLENBQUMsOElBQThJLGlCQUFpQixDQUFDLHNOQUFzTixpQ0FBaUMsQ0FBQyxnSEFBZ0gsc0NBQXNDLENBQUMsYUFBYSxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyx5QkFBeUIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLHdCQUF3QixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyw0SEFBNEgsNkJBQTZCLENBQUMsNE1BQTRNLGFBQWEsQ0FBQyxnQ0FBZ0Msd0JBQXdCLENBQUMsYUFBYSw0QkFBNEIsQ0FBQyxVQUFVLGVBQWUsQ0FBQyxxQ0FBcUMscUJBQXFCLENBQUMseUJBQXlCLDBCQUEwQixDQUFDLGtCQUFrQixDQUFDLGtHQUFrRyxDQUFDLDRCQUE0QixhQUFhIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjlweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6MjRweH0ubWF0LWgxLC5tYXQtaGVhZGxpbmUsLm1hdC10eXBvZ3JhcGh5IGgxe2ZvbnQ6NDAwIDI0cHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDIsLm1hdC10aXRsZSwubWF0LXR5cG9ncmFwaHkgaDJ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMywubWF0LXN1YmhlYWRpbmctMiwubWF0LXR5cG9ncmFwaHkgaDN7Zm9udDo0MDAgMTZweC8yOHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNCwubWF0LXN1YmhlYWRpbmctMSwubWF0LXR5cG9ncmFwaHkgaDR7Zm9udDo0MDAgMTVweC8yNHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNSwubWF0LXR5cG9ncmFwaHkgaDV7Zm9udDo0MDAgMTEuNjJweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1oNiwubWF0LXR5cG9ncmFwaHkgaDZ7Zm9udDo0MDAgOS4zOHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTJweH0ubWF0LWJvZHktMiwubWF0LWJvZHktc3Ryb25ne2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1ib2R5LC5tYXQtYm9keS0xLC5tYXQtdHlwb2dyYXBoeXtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYm9keSBwLC5tYXQtYm9keS0xIHAsLm1hdC10eXBvZ3JhcGh5IHB7bWFyZ2luOjAgMCAxMnB4fS5tYXQtY2FwdGlvbiwubWF0LXNtYWxse2ZvbnQ6NDAwIDEycHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1kaXNwbGF5LTQsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS00e2ZvbnQ6MzAwIDExMnB4LzExMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotLjA1ZW07bWFyZ2luOjAgMCA1NnB4fS5tYXQtZGlzcGxheS0zLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktM3tmb250OjQwMCA1NnB4LzU2cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0uMDJlbTttYXJnaW46MCAwIDY0cHh9Lm1hdC1kaXNwbGF5LTIsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ye2ZvbnQ6NDAwIDQ1cHgvNDhweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LS4wMDVlbTttYXJnaW46MCAwIDY0cHh9Lm1hdC1kaXNwbGF5LTEsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xe2ZvbnQ6NDAwIDM0cHgvNDBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCA2NHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtZmxhdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LW1pbmktZmFiLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1idXR0b24tdG9nZ2xle2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNhcmR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjIwcHh9Lm1hdC1jYXJkLWNvbnRlbnQsLm1hdC1jYXJkLXN1YnRpdGxle2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2hlY2tib3h7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWx7bGluZS1oZWlnaHQ6MjRweH0ubWF0LWNoaXB7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uLC5tYXQtY2hpcCAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbntmb250LXNpemU6MThweH0ubWF0LXRhYmxle2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWhlYWRlci1jZWxse2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtmb250LXNpemU6MTRweH0ubWF0LWNhbGVuZGFye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNhbGVuZGFyLWJvZHl7Zm9udC1zaXplOjEzcHh9Lm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbntmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGh7Zm9udC1zaXplOjExcHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtZGlhbG9nLXRpdGxle2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Lm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudHtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS4xMjU7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbntmb250LXNpemU6MTUwJTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9ue2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257aGVpZ2h0OjEuMTI1ZW07bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjVlbSAwO2JvcmRlci10b3A6Ljg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye3RvcDotLjg0Mzc1ZW07cGFkZGluZy10b3A6Ljg0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcntmb250LXNpemU6NzUlO21hcmdpbi10b3A6LjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNzkxNjdlbSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjQzNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKC4wMDFweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooLjAwMTAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooLjAwMTAycHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyM2VtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNSV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4yODEyNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcnttYXJnaW4tdG9wOi41NDE2N2VtO3RvcDpjYWxjKDEwMCUgLSAxLjY2NjY3ZW0pfUBtZWRpYSBwcmludHsubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIxZW0pIHNjYWxlKC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTJlbSkgc2NhbGUoLjc1KX19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouMjVlbSAwIC43NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMDkzNzVlbTttYXJnaW4tdG9wOi0uNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNTkzNzVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS41OTM3NGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzoxZW0gMCAxZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS44NDM3NWVtO21hcmdpbi10b3A6LS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjU5Mzc1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjU5Mzc0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWdyaWQtdGlsZS1mb290ZXIsLm1hdC1ncmlkLXRpbGUtaGVhZGVye2ZvbnQtc2l6ZToxNHB4fS5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmUsLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSwubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fWlucHV0Lm1hdC1pbnB1dC1lbGVtZW50e21hcmdpbi10b3A6LS4wNjI1ZW19Lm1hdC1tZW51LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHh9Lm1hdC1yYWRpby1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2VsZWN0e2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXNlbGVjdC10cmlnZ2Vye2hlaWdodDoxLjEyNWVtfS5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwubWF0LXN0ZXBwZXItdmVydGljYWx7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc3RlcC1sYWJlbHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvcntmb250LXdlaWdodDo0MDB9Lm1hdC1zdGVwLWxhYmVsLWVycm9ye2ZvbnQtc2l6ZToxNHB4fS5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC10YWItZ3JvdXB7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRvb2xiYXIsLm1hdC10b29sYmFyIGgxLC5tYXQtdG9vbGJhciBoMiwubWF0LXRvb2xiYXIgaDMsLm1hdC10b29sYmFyIGg0LC5tYXQtdG9vbGJhciBoNSwubWF0LXRvb2xiYXIgaDZ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MH0ubWF0LXRvb2x0aXB7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMHB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHh9Lm1hdC10b29sdGlwLWhhbmRzZXR7Zm9udC1zaXplOjE0cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweH0ubWF0LWxpc3QtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1saXN0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW17Zm9udC1zaXplOjE2cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW17Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbntmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1zdWJoZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHh9Lm1hdC1vcHRncm91cC1sYWJlbHtmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2ltcGxlLXNuYWNrYmFye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257bGluZS1oZWlnaHQ6MTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRyZWV7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtbmVzdGVkLXRyZWUtbm9kZSwubWF0LXRyZWUtbm9kZXtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE0cHh9Lm1hdC1yaXBwbGV7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVke292ZXJmbG93OnZpc2libGV9Lm1hdC1yaXBwbGUtZWxlbWVudHtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSx0cmFuc2Zvcm0gMHMgY3ViaWMtYmV6aWVyKDAsMCwuMiwxKTt0cmFuc2Zvcm06c2NhbGUoMCl9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtcmlwcGxlLWVsZW1lbnR7ZGlzcGxheTpub25lfX0uY2RrLXZpc3VhbGx5LWhpZGRlbntib3JkZXI6MDtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtvdXRsaW5lOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmV9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyLC5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY2RrLW92ZXJsYXktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktcGFuZXtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt6LWluZGV4OjEwMDA7ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uY2RrLW92ZXJsYXktYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoxMDAwO3BvaW50ZXItZXZlbnRzOmF1dG87LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246b3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MX1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5Oi42fX0uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjMyKX0uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AsLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDoxcHg7bWluLWhlaWdodDoxcHh9LmNkay1nbG9iYWwtc2Nyb2xsYmxvY2t7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTtvdmVyZmxvdy15OnNjcm9sbH1Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0ey8qISovfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5key8qISovfS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbHthbmltYXRpb24tbmFtZTpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydH0uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCl7YW5pbWF0aW9uLW5hbWU6Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZXtyZXNpemU6bm9uZX10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5ne2hlaWdodDphdXRvIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50O3BhZGRpbmc6MnB4IDAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fS5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb246Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSwubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LWFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiMzZjUxYjV9Lm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2Y0NDMzNn0ubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHNldWRvLWNoZWNrYm94e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXJ7Y29sb3I6I2ZhZmFmYX0ubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtjb2xvcjojYjBiMGIwfS5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZmY0MDgxfS5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6IzNmNTFiNX0ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNiMGIwYjB9Lm1hdC1lbGV2YXRpb24tejB7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxe2JveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16Mntib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejN7Ym94LXNoYWRvdzowIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo0e2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejV7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDVweCA4cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTRweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16Nntib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16N3tib3gtc2hhZG93OjAgNHB4IDVweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgN3B4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDJweCAxNnB4IDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejh7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo5e2JveC1zaGFkb3c6MCA1cHggNnB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA5cHggMTJweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE2cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTB7Ym94LXNoYWRvdzowIDZweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDEwcHggMTRweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDE4cHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTF7Ym94LXNoYWRvdzowIDZweCA3cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDExcHggMTVweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDIwcHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTJ7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTN7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEzcHggMTlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI0cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTR7Ym94LXNoYWRvdzowIDdweCA5cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDE0cHggMjFweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI2cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTV7Ym94LXNoYWRvdzowIDhweCA5cHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE1cHggMjJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDI4cHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTZ7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejE3e2JveC1zaGFkb3c6MCA4cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTdweCAyNnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzJweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxOHtib3gtc2hhZG93OjAgOXB4IDExcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE4cHggMjhweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM0cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTl7Ym94LXNoYWRvdzowIDlweCAxMnB4IC02cHggcmdiYSgwLDAsMCwuMiksMCAxOXB4IDI5cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDdweCAzNnB4IDZweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIwe2JveC1zaGFkb3c6MCAxMHB4IDEzcHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIwcHggMzFweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDM4cHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjF7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjFweCAzM3B4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggNDBweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyMntib3gtc2hhZG93OjAgMTBweCAxNHB4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMnB4IDM1cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MnB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIze2JveC1zaGFkb3c6MCAxMXB4IDE0cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDIzcHggMzZweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ0cHggOHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjR7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYXBwLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXJ7ZGlzcGxheTpub25lfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojM2Y1MWI1fUBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWJhZGdlLWNvbnRlbnR7b3V0bGluZTpzb2xpZCAxcHg7Ym9yZGVyLXJhZGl1czowfX0ubWF0LWJhZGdlLWFjY2VudCAubWF0LWJhZGdlLWNvbnRlbnR7YmFja2dyb3VuZDojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC1iYWRnZS13YXJuIC5tYXQtYmFkZ2UtY29udGVudHtjb2xvcjojZmZmO2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LWJhZGdle3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtYmFkZ2UtaGlkZGVuIC5tYXQtYmFkZ2UtY29udGVudHtkaXNwbGF5Om5vbmV9Lm1hdC1iYWRnZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnR7YmFja2dyb3VuZDojYjliOWI5O2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWJhZGdlLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czo1MCU7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O3RyYW5zZm9ybTpzY2FsZSguNik7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1hdC1iYWRnZS1jb250ZW50Ll9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlLC5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudHt0cmFuc2l0aW9uOm5vbmV9Lm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmV7dHJhbnNmb3JtOm5vbmV9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtsaW5lLWhlaWdodDoxNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi04cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi04cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LThweH0ubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MjJweDtoZWlnaHQ6MjJweDtsaW5lLWhlaWdodDoyMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTExcHh9Lm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDtsaW5lLWhlaWdodDoyOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTI4cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE0cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b257Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOjAgMH0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnl7Y29sb3I6IzNmNTFiNX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1pY29uLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtvcGFjaXR5Oi4xO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZDojMDAwfS5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWIsLm1hdC1mbGF0LWJ1dHRvbiwubWF0LW1pbmktZmFiLC5tYXQtcmFpc2VkLWJ1dHRvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnl7Y29sb3I6I2ZmZn0ubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmZn0ubWF0LWZhYi5tYXQtd2FybiwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJue2NvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1mYWIubWF0LXdhcm4sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LW1pbmktZmFiLm1hdC13YXJuLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZsYXQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCwubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZXtib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3gtc2hhZG93Om5vbmV9Lm1hdC1idXR0b24tdG9nZ2xle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfVtkaXI9cnRsXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpub25lO2JvcmRlci10b3A6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNiZGJkYmR9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3JkZXI6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhcmR7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FyZC5tYXQtY2FyZC1mbGF0Om5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhcmQtc3VidGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtZnJhbWV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNoZWNrYm94LWNoZWNrbWFya3tmaWxsOiNmYWZhZmF9Lm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aHtzdHJva2U6I2ZhZmFmYSFpbXBvcnRhbnR9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDpibGFjay1vbi13aGl0ZSl7Lm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aHtzdHJva2U6IzAwMCFpbXBvcnRhbnR9fS5tYXQtY2hlY2tib3gtbWl4ZWRtYXJre2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtY2hlY2tlZCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQ6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkgLm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6I2IwYjBiMH0ubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfUBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWNoZWNrYm94LWRpc2FibGVke29wYWNpdHk6LjV9fUBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZDowIDB9fS5tYXQtY2hlY2tib3ggLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6IzNmNTFiNX0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6I2ZmNDA4MX0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcHtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKTphY3RpdmV7Ym94LXNoYWRvdzowIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSAubWF0LWNoaXAtcmVtb3ZlOmhvdmVye29wYWNpdHk6LjU0fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1kaXNhYmxlZHtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXJ7YmFja2dyb3VuZDojMDAwfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtdGFibGV7YmFja2dyb3VuZDojZmZmfS5tYXQtdGFibGUgdGJvZHksLm1hdC10YWJsZSB0Zm9vdCwubWF0LXRhYmxlIHRoZWFkLC5tYXQtdGFibGUtc3RpY2t5LFttYXQtZm9vdGVyLXJvd10sW21hdC1oZWFkZXItcm93XSxbbWF0LXJvd10sbWF0LWZvb3Rlci1yb3csbWF0LWhlYWRlci1yb3csbWF0LXJvd3tiYWNrZ3JvdW5kOmluaGVyaXR9bWF0LWZvb3Rlci1yb3csbWF0LWhlYWRlci1yb3csbWF0LXJvdyx0ZC5tYXQtY2VsbCx0ZC5tYXQtZm9vdGVyLWNlbGwsdGgubWF0LWhlYWRlci1jZWxse2JvcmRlci1ib3R0b20tY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaGVhZGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNhbGVuZGFyLWFycm93e2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24sLm1hdC1kYXRlcGlja2VyLXRvZ2dsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0uY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSwubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3Zlcj4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjE4KX0ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjMsODEsMTgxLC40KX0ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudHtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsNjQsMTI5LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZXtjb2xvcjojM2Y1MWI1fS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZGlhbG9nLWNvbnRhaW5lcntib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRpdmlkZXJ7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1kaXZpZGVyLXZlcnRpY2Fse2JvcmRlci1yaWdodC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1hY3Rpb24tcm93e2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKS5jZGsta2V5Ym9hcmQtZm9jdXNlZCwubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkuY2RrLXByb2dyYW0tZm9jdXNlZCwubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSk6aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhIChob3Zlcjpub25lKXsubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZDojZmZmfX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIsLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjppbmhlcml0fS5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlcntjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyLC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZXJyb3J7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1oaW50e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC40MikgMCxyZ2JhKDAsMCwwLC40MikgMzMlLHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNDIpIDAscmdiYSgwLDAsMCwuNDIpIDMzJSx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXh9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDAsMCwwLC4wNil9Lm1hdC1pY29uLm1hdC1wcmltYXJ5e2NvbG9yOiMzZjUxYjV9Lm1hdC1pY29uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWljb24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyLC5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiMzZjUxYjV9Lm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50OjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCwubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW17Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWxpc3QtaXRlbS1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cywubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLC5tYXQtbGlzdC1vcHRpb246Zm9jdXMsLm1hdC1saXN0LW9wdGlvbjpob3ZlciwubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1tZW51LXBhbmVse2JhY2tncm91bmQ6I2ZmZn0ubWF0LW1lbnUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LW1lbnUtaXRlbXtiYWNrZ3JvdW5kOjAgMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdLC5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXTo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvciwubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LXBhZ2luYXRvcntiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1wYWdpbmF0b3IsLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCwubWF0LXBhZ2luYXRvci1pbmNyZW1lbnR7Ym9yZGVyLXRvcDoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpO2JvcmRlci1yaWdodDoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpfS5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLXRvcDoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpfS5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItbGFzdHtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojYzVjYWU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjNWNhZTl9Lm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNmZjgwYWJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY4MGFifS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsLm1hdC1zcGlubmVyIGNpcmNsZXtzdHJva2U6IzNmNTFiNX0ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xle3N0cm9rZTojZmY0MDgxfS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC13YXJuIGNpcmNsZXtzdHJva2U6I2Y0NDMzNn0ubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojM2Y1MWI1fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnk6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmZjQwODF9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6I2Y0NDMzNn0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXNlbGVjdC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXNlbGVjdC1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1zZWxlY3QtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1kcmF3ZXItY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kcmF3ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXB1c2h7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtZHJhd2VyOm5vdCgubWF0LWRyYXdlci1zaWRlKXtib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1zaWRle2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZXtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5ke2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSg2Myw4MSwxODEsLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZTpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntib3gtc2hhZG93OjAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYiwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwsLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwsLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYiwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwsLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuMil9LmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsLm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3ZlciAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjcpLHJnYmEoMCwwLDAsLjcpIDJweCx0cmFuc3BhcmVudCAwLHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCguMDAwMWRlZyxyZ2JhKDAsMCwwLC43KSxyZ2JhKDAsMCwwLC43KSAycHgsdHJhbnNwYXJlbnQgMCx0cmFuc3BhcmVudCl9Lm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLC43KSxyZ2JhKDAsMCwwLC43KSAycHgsdHJhbnNwYXJlbnQgMCx0cmFuc3BhcmVudCl9Lm1hdC1zdGVwLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCwubWF0LXN0ZXAtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX1AbWVkaWEgKGhvdmVyOm5vbmUpey5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZDowIDB9fS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLW9wdGlvbmFse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29ue2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNTQpO2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3J7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3J7Y29sb3I6I2Y0NDMzNn0ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwubWF0LXN0ZXBwZXItdmVydGljYWx7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmV7Ym9yZGVyLWxlZnQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZXtib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNvcnQtaGVhZGVyLWFycm93e2NvbG9yOiM3NTc1NzV9Lm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpfS5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLW5hdi1iYXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1ib3R0b206bm9uZX0ubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1saW5re2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXRhYi1ncm91cFtjbGFzcyo9bWF0LWJhY2tncm91bmQtXSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhcltjbGFzcyo9bWF0LWJhY2tncm91bmQtXXtib3JkZXItYm90dG9tOm5vbmU7Ym9yZGVyLXRvcDpub25lfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTk3LDIwMiwyMzMsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDEyOCwxNzEsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgxOTcsMjAyLDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMTI4LDE3MSwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtze2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtze2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10b29sYmFye2JhY2tncm91bmQ6I2Y1ZjVmNTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10b29sYmFyLm1hdC1wcmltYXJ5e2JhY2tncm91bmQ6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtdG9vbGJhci5tYXQtYWNjZW50e2JhY2tncm91bmQ6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtdG9vbGJhci5tYXQtd2FybntiYWNrZ3JvdW5kOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdywubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6aW5oZXJpdH0ubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojZmZmfS5tYXQtbmVzdGVkLXRyZWUtbm9kZSwubWF0LXRyZWUtbm9kZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbmFjay1iYXItY29udGFpbmVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpO2JhY2tncm91bmQ6IzMyMzIzMjtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257Y29sb3I6I2ZmNDA4MX0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _tex_tex_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tex/tex.module */ "./src/app/tex/tex.module.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _tex_tex_module__WEBPACK_IMPORTED_MODULE_6__["TexModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tex/auth/auth-interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/tex/auth/auth-interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/tex/auth/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = this.auth.authorizationToken;
        var authReq = req.clone({
            headers: req.headers.set('X-Authorization', 'Bearer ' + token)
        });
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/tex/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/tex/auth/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.signInURI = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user + '/api/user/signIn';
        this.userInfoURI = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user + '/api/private/me';
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userInfo = { id: '', avatar: '', location: '', nickname: '', uname: '' };
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.token.subscribe(function (token) {
            if (!!token.token) {
                localStorage.setItem('access_token', token.token);
            }
            else {
                localStorage.removeItem('access_token');
            }
        });
        this.token.next({ token: localStorage.getItem('access_token'), refreshToken: null } || { token: null, refreshToken: '' });
    }
    AuthService.prototype.signIn = function (username, password) {
        var _this = this;
        return this.http.post(this.signInURI, {
            type: 'Email',
            unique: username,
            password: password
        }, {
            observe: 'body'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (token) {
            _this.token.next(token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('signIn', false))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return true;
        }));
    };
    AuthService.prototype.signOut = function () {
        this.token.next({ token: null, refreshToken: null });
    };
    AuthService.prototype.fetchUserInfo = function () {
        var _this = this;
        return this.http
            .get(this.userInfoURI)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (userInfo) { return _this.userInfo = userInfo; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('fetchUserInfo')));
    };
    Object.defineProperty(AuthService.prototype, "signedIn", {
        get: function () {
            return !!this.authorizationToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "authorizationToken", {
        get: function () {
            return localStorage.getItem('access_token') || '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(operation);
            console.error(error); // log to console instead
            if (error.status !== 200) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/tex/exchange/command.service.ts":
/*!*************************************************!*\
  !*** ./src/app/tex/exchange/command.service.ts ***!
  \*************************************************/
/*! exports provided: CommandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandService", function() { return CommandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/tex/auth/auth.service.ts");







var CommandService = /** @class */ (function () {
    function CommandService(http, auth) {
        var _this = this;
        this.http = http;
        this.auth = auth;
        // private orderURI = environment.command + '/api'
        this.loginURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].command + '/api/user/login';
        this.cancelOrderURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].command + '/api/order/';
        this.createOpeningOrderURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].command + '/api/order/opening';
        this.createClosingOrderURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].command + '/api/order/closing';
        this.auth.token.subscribe(function (token) {
            if (!!token.token) {
                _this.login().subscribe(function (x) {
                    console.log('Login');
                });
            }
        });
    }
    CommandService.prototype.login = function () {
        return this.http.post(this.loginURI, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('login', false)));
    };
    CommandService.prototype.cancelOrder = function (orderId) {
        return this.http.delete(this.cancelOrderURI + orderId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('cancelOrder', false)));
    };
    CommandService.prototype.createOpening = function (matcherId, type, price, quantity, leverage, margin, isolate) {
        return this.http.post(this.createOpeningOrderURI, {
            matcherId: matcherId,
            type: type,
            price: price,
            quantity: quantity,
            leverage: leverage,
            margin: margin,
            isolate: isolate
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('createOpening', false)));
    };
    CommandService.prototype.createClosing = function (positionId, price) {
        return this.http.post(this.createClosingOrderURI, {
            positionId: positionId,
            price: price
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('createClosing', false)));
    };
    CommandService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(operation);
            console.error(error); // log to console instead
            if (error.status >= 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error.type);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    CommandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], CommandService);
    return CommandService;
}());



/***/ }),

/***/ "./src/app/tex/exchange/query.service.ts":
/*!***********************************************!*\
  !*** ./src/app/tex/exchange/query.service.ts ***!
  \***********************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var QueryService = /** @class */ (function () {
    function QueryService(http) {
        this.http = http;
        this.contractListURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].query + '/api/contract/list';
        this.transactionURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].query + '/api/contract/transactions';
        this.quoteURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].query + '/api/contract/quote';
        this.orderURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].query + '/api/asset/orders';
        this.positionURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].query + '/api/asset/positions';
        this.cashesURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].query + '/api/asset/cashes';
        this.realURI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].query + '/api/contract/real';
        this.contracts = [];
        this.transactions = [];
        this.quote = { asks: [], bids: [] };
    }
    QueryService.prototype.fetchContracts = function () {
        var _this = this;
        return this.http.get(this.contractListURI)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (page) { return _this.contracts = page.content; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (page) { return page.content; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('fetchContent', [])));
    };
    QueryService.prototype.fetchTransaction = function (matcherId) {
        var _this = this;
        return this.http.get(this.transactionURI, { params: { matcherId: matcherId } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (page) { return _this.transactions = page.content; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (page) { return page.content; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('fetchTransaction', [])));
    };
    QueryService.prototype.fetchQuote = function (matcherId) {
        var _this = this;
        return this.http.get(this.quoteURI, { params: { matcherId: matcherId, level: '5' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (quote) { return _this.quote = quote; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('fetchQuote', {
            asks: [],
            bids: []
        })));
    };
    QueryService.prototype.fetchReals = function (matcherId) {
        var _this = this;
        return this.http.get(this.realURI, { params: { matcherId: matcherId || this.contracts.map(function (x) { return x.matcherId; }) } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
            x.forEach(function (item, index) {
                _this.contracts[index] = Object.assign(_this.contracts[index], item);
            });
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('fetchReal', [])));
    };
    QueryService.prototype.fetchOrder = function (matcherId) {
        return this.http.get(this.orderURI, { params: { matcherId: matcherId, finished: 'false' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (page) { return page.content; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('fetchOrder', [])));
    };
    QueryService.prototype.fetchPosition = function (matcherId) {
        return this.http.get(this.positionURI, { params: { matcherId: matcherId, finished: 'false' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (page) { return page.content; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('fetchPosition', [])));
    };
    QueryService.prototype.fetchCashes = function () {
        return this.http.get(this.cashesURI)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (page) { return page.content; }));
    };
    QueryService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(operation);
            console.error(error); // log to console instead
            if (error.status !== 200) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    QueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/app/tex/home/asset/asset.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/tex/home/asset/asset.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".asset {\n  height: 100%;\n}\n\n.asset .mat-tab-body-wrapper {\n  height: 100%;\n}\n\n.asset mat-tab-body {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL2Fzc2V0L2Fzc2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXgvaG9tZS9hc3NldC9hc3NldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RleC9ob21lL2Fzc2V0L2Fzc2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzc2V0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXNzZXQgLm1hdC10YWItYm9keS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXNzZXQgbWF0LXRhYi1ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiLmFzc2V0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXNzZXQgLm1hdC10YWItYm9keS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXNzZXQgbWF0LXRhYi1ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tex/home/asset/asset.component.ts":
/*!***************************************************!*\
  !*** ./src/app/tex/home/asset/asset.component.ts ***!
  \***************************************************/
/*! exports provided: AssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetComponent", function() { return AssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/tex/auth/auth.service.ts");




var AssetComponent = /** @class */ (function () {
    function AssetComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.matcherId = '';
    }
    AssetComponent.prototype.ngOnInit = function () {
        //
    };
    Object.defineProperty(AssetComponent.prototype, "signedIn", {
        get: function () {
            return this.auth.signedIn;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], AssetComponent.prototype, "open", void 0);
    AssetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-asset',
            template: __webpack_require__(/*! raw-loader!./asset.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/asset/asset.component.html"),
            styles: [__webpack_require__(/*! ./asset.component.scss */ "./src/app/tex/home/asset/asset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AssetComponent);
    return AssetComponent;
}());



/***/ }),

/***/ "./src/app/tex/home/asset/cash/cash.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/tex/home/asset/cash/cash.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cash mat-form-field {\n  width: 100%;\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL2Fzc2V0L2Nhc2gvY2FzaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGV4L2hvbWUvYXNzZXQvY2FzaC9jYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RleC9ob21lL2Fzc2V0L2Nhc2gvY2FzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXNoIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbiIsIi5jYXNoIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tex/home/asset/cash/cash.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tex/home/asset/cash/cash.component.ts ***!
  \*******************************************************/
/*! exports provided: CashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashComponent", function() { return CashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exchange_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../exchange/query.service */ "./src/app/tex/exchange/query.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");






var CashComponent = /** @class */ (function () {
    function CashComponent(query, router, stomp) {
        this.query = query;
        this.router = router;
        this.stomp = stomp;
        this.cash = { balance: 0, cashId: '', maintenance: 0, initial: 0 };
    }
    CashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (x) {
            if (!x.matcherId) {
                return;
            }
            _this.matcherId = x.matcherId;
            _this.cashId = _this.matcherId.split('/')[1];
            _this.query.fetchCashes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((function (cashes) { return cashes.filter(function (cash) { return cash.cashId === _this.cashId; }); }))).subscribe(function (cash) {
                _this.cash = cash[0] || { balance: 0, cashId: _this.cashId, maintenance: 0, initial: 0 };
            });
        });
        this.cashSubscribe = this.stomp.watch('/user/margin').subscribe(function (msg) {
            var body = JSON.parse(msg.body);
            var event = body.event;
            if (event.cashId !== _this.cashId) {
                return;
            }
            switch (body.type) {
                case 'CashBalanceIncreasedEvent': {
                    _this.cash.balance += event.amount;
                    break;
                }
                case 'CashBalanceDecreasedEvent': {
                    _this.cash.balance -= event.amount;
                    break;
                }
                case 'CashInitialIncreasedEvent': {
                    _this.cash.initial += event.amount;
                    break;
                }
                case 'CashInitialDecreasedEvent': {
                    _this.cash.initial -= event.amount;
                    break;
                }
                case 'CashMaintenanceIncreasedEvent': {
                    _this.cash.maintenance += event.amount;
                    break;
                }
                case 'CashMaintenanceDecreasedEvent': {
                    _this.cash.maintenance -= event.amount;
                    break;
                }
            }
        });
    };
    CashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-cash',
            template: __webpack_require__(/*! raw-loader!./cash.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/asset/cash/cash.component.html"),
            styles: [__webpack_require__(/*! ./cash.component.scss */ "./src/app/tex/home/asset/cash/cash.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exchange_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_5__["RxStompService"]])
    ], CashComponent);
    return CashComponent;
}());



/***/ }),

/***/ "./src/app/tex/home/asset/order/order.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/tex/home/asset/order/order.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL2Fzc2V0L29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXgvaG9tZS9hc3NldC9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90ZXgvaG9tZS9hc3NldC9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIub3JkZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tex/home/asset/order/order.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/tex/home/asset/order/order.component.ts ***!
  \*********************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exchange_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../exchange/query.service */ "./src/app/tex/exchange/query.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exchange_command_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../exchange/command.service */ "./src/app/tex/exchange/command.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");







var OrderComponent = /** @class */ (function () {
    function OrderComponent(query, command, router, snackBar, stomp) {
        this.query = query;
        this.command = command;
        this.router = router;
        this.snackBar = snackBar;
        this.stomp = stomp;
        this.orders = [];
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (x) {
            if (!x.matcherId) {
                return;
            }
            _this.matcherId = x.matcherId;
            _this.query.fetchOrder(_this.matcherId).subscribe(function (orders) {
                _this.orders = orders;
            });
        });
        this.ordersubscribe = this.stomp.watch('/user/order').subscribe(function (msg) {
            var body = JSON.parse(msg.body);
            var event = body.event;
            switch (body.type) {
                case 'OrderCreatedEvent': {
                    _this.orders = _this.orders.concat({
                        action: event.action,
                        orderId: event.orderId,
                        price: event.price,
                        quantity: event.quantity,
                        initQuantity: event.quantity,
                        matcherId: event.matcherId,
                        time: event.time,
                        type: event.type
                    });
                    break;
                }
                case 'OrderFinishedEvent': {
                    _this.orders = _this.orders.map(function (it) {
                        return it.orderId === event.orderId ? null : it;
                    }).filter(function (it) {
                        return it != null;
                    });
                    break;
                }
                case 'OrderClosedEvent': {
                    _this.snackBar.open("OrderClosedEvent: " + event.orderId, null, { duration: 1000, verticalPosition: 'top' });
                }
            }
        });
    };
    OrderComponent.prototype.cancelOrder = function (orderId) {
        var _this = this;
        this.command.cancelOrder(orderId).subscribe(function (x) { return console.log(x); }, function (e) {
            _this.snackBar.open(e, null, { duration: 1000, verticalPosition: 'top' });
        });
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        if (!!this.ordersubscribe) {
            this.ordersubscribe.unsubscribe();
        }
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-order',
            template: __webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/asset/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/tex/home/asset/order/order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exchange_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"],
            _exchange_command_service__WEBPACK_IMPORTED_MODULE_4__["CommandService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_6__["RxStompService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/tex/home/asset/position/position.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/tex/home/asset/position/position.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position {\n  height: 100%;\n  width: 100%;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL2Fzc2V0L3Bvc2l0aW9uL3Bvc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXgvaG9tZS9hc3NldC9wb3NpdGlvbi9wb3NpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90ZXgvaG9tZS9hc3NldC9wb3NpdGlvbi9wb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iLCIucG9zaXRpb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tex/home/asset/position/position.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tex/home/asset/position/position.component.ts ***!
  \***************************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exchange_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../exchange/query.service */ "./src/app/tex/exchange/query.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exchange_command_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../exchange/command.service */ "./src/app/tex/exchange/command.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");








var PositionComponent = /** @class */ (function () {
    function PositionComponent(query, command, router, snackBar, stomp) {
        this.query = query;
        this.command = command;
        this.router = router;
        this.snackBar = snackBar;
        this.stomp = stomp;
        this.positions = [];
        this.columnsToDisplay = ['matcherId', 'positionId', 'type', 'price', 'quantity'];
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (x) {
            if (!x.matcherId) {
                return;
            }
            _this.matcherId = x.matcherId;
            _this.query.fetchPosition(_this.matcherId).subscribe(function (orders) {
                _this.positions = orders;
            });
        });
        this.positionSubscribe = this.stomp.watch('/user/position').subscribe(function (msg) {
            var body = JSON.parse(msg.body);
            var event = body.event;
            switch (body.type) {
                case 'PositionCreatedEvent': {
                    _this.positions = _this.positions.concat({
                        positionId: event.positionId,
                        price: event.price,
                        quantity: event.quantity,
                        initQuantity: event.quantity,
                        matcherId: event.matcherId,
                        time: event.time,
                        closed: event.closed,
                        type: event.type,
                        inspectors: []
                    });
                    break;
                }
                case 'PositionClosedEvent': {
                    _this.positions = _this.positions.map(function (it) {
                        if (it.positionId === event.positionId) {
                            it.closed = true;
                        }
                        return it;
                    });
                    break;
                }
                case 'PositionExecutedEvent': {
                    _this.positions = _this.positions.map(function (it) {
                        if (it.positionId === event.positionId) {
                            it.quantity -= event.quantity;
                        }
                        return it;
                    });
                    break;
                }
                case 'PositionClosesCancelledEvent': {
                    _this.positions = _this.positions.map(function (it) {
                        if (it.positionId === event.positionId) {
                            it.closed = false;
                        }
                        return it;
                    });
                    break;
                }
                case 'PositionFinishedEvent': {
                    _this.positions = _this.positions.map(function (it) {
                        return it.positionId === event.positionId ? null : it;
                    }).filter(function (it) {
                        return it != null;
                    });
                    break;
                }
            }
        });
        this.interceptorSubscribe = this.stomp.watch('/user/inspector/position').subscribe(function (msg) {
            var body = JSON.parse(msg.body);
            var event = body.event;
            switch (body.type) {
                case 'PositionInspectorInsertedEvent': {
                    _this.positions = _this.positions.map(function (item) {
                        if (item.positionId === event.positionId) {
                            console.log('============');
                            item.inspectors = item.inspectors.concat({
                                code: event.code,
                                valueOfInspector: event.valueOfInspector,
                                valueOfTarget: event.valueOfTarget
                            });
                        }
                        return item;
                    });
                    break;
                }
                case 'PositionInspectorRemovedEvent': {
                    _this.positions = _this.positions.map(function (item) {
                        if (item.positionId === event.positionId) {
                            item.inspectors = item.inspectors.map(function (inspector) {
                                if (inspector.code === event.code) {
                                    return null;
                                }
                                return inspector;
                            }).filter(function (it) { return it != null; });
                        }
                        return item;
                    });
                    break;
                }
            }
        });
    };
    PositionComponent.prototype.close = function (positionId) {
        var _this = this;
        this.command.createClosing(positionId, 0).subscribe(function (x) {
        }, function (error) {
            _this.snackBar.open(error, null, { duration: 1000, verticalPosition: 'top' });
        });
    };
    PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-position',
            template: __webpack_require__(/*! raw-loader!./position.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/asset/position/position.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0px', minHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./position.component.scss */ "./src/app/tex/home/asset/position/position.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exchange_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"],
            _exchange_command_service__WEBPACK_IMPORTED_MODULE_4__["CommandService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_6__["RxStompService"]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/tex/home/charts/charts.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/tex/home/charts/charts.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".charts {\n  height: 100%;\n  width: 100%;\n  padding: 20px 0 0 0;\n  display: table;\n}\n\n.charts .mat-card-content {\n  height: 100%;\n  display: table-row;\n}\n\n.charts iframe {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RleC9ob21lL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90ZXgvaG9tZS9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0cyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY2hhcnRzIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG5cbi5jaGFydHMgaWZyYW1lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuIiwiLmNoYXJ0cyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY2hhcnRzIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG5cbi5jaGFydHMgaWZyYW1lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tex/home/charts/charts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/tex/home/charts/charts.component.ts ***!
  \*****************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");
/* harmony import */ var _exchange_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../exchange/query.service */ "./src/app/tex/exchange/query.service.ts");






var ChartsComponent = /** @class */ (function () {
    function ChartsComponent(sanitizer, query, router, stomp) {
        this.sanitizer = sanitizer;
        this.query = query;
        this.router = router;
        this.stomp = stomp;
        this.matcherId = '';
        this.open = 0;
        this.low = 0;
        this.high = 0;
        this.close = 0;
        this.volume = 0;
        this.time = 0;
        this.ask = 0;
        this.bid = 0;
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl('https://trade.miex.io/tv/index.html?symbol=BTCUSD');
    }
    ChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (x) {
            if (!x.matcherId) {
                return;
            }
            if (!!_this.realSubscribe) {
                _this.realSubscribe.unsubscribe();
            }
            _this.matcherId = x.matcherId || '';
            _this.realSubscribe = _this.stomp.watch("/contract/" + _this.matcherId + "/real").subscribe(function (msg) {
                var body = JSON.parse(msg.body);
                var event = body.event;
                var type = body.type;
                switch (type) {
                    case 'MatcherQuotedEvent': {
                        _this.ask = event.ask;
                        _this.bid = event.bid;
                    }
                }
            });
            _this.query.fetchReals([_this.matcherId]).subscribe(function (reals) {
                if (reals.length > 0) {
                    var real = reals[0];
                    _this.ask = real.ask;
                    _this.bid = real.bid;
                    _this.open = real.open;
                    _this.low = real.low;
                    _this.high = real.high;
                    _this.close = real.close;
                    _this.volume = real.volume;
                    _this.time = real.time;
                }
            });
            _this.src = _this.sanitizer
                .bypassSecurityTrustResourceUrl("https://trade.miex.io/tv/index.html?symbol=" + _this.matcherId.replace('/', '').trim() + "&point=1&lan=zh&platform=demo");
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartsComponent.prototype, "matcherId", void 0);
    ChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-charts',
            template: __webpack_require__(/*! raw-loader!./charts.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.scss */ "./src/app/tex/home/charts/charts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _exchange_query_service__WEBPACK_IMPORTED_MODULE_5__["QueryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_4__["RxStompService"]])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/tex/home/controller/controller.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tex/home/controller/controller.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controller {\n  margin: 3em;\n  text-align: center;\n}\n\n.controller mat-form-field {\n  width: 100%;\n}\n\n.controller button {\n  height: 4em;\n  width: 50%;\n}\n\n.controller mat-slider {\n  width: 100%;\n}\n\n.controller mat-form-field .suffix {\n  width: 50px;\n  display: inline-block;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL2NvbnRyb2xsZXIvY29udHJvbGxlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGV4L2hvbWUvY29udHJvbGxlci9jb250cm9sbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsV0FBQTtFQUVBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3RleC9ob21lL2NvbnRyb2xsZXIvY29udHJvbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sbGVyIHtcblxuICBtYXJnaW46IDNlbTtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250cm9sbGVyIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250cm9sbGVyIGJ1dHRvbiB7XG4gIGhlaWdodDogNGVtO1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29udHJvbGxlciBtYXQtc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250cm9sbGVyIG1hdC1mb3JtLWZpZWxkIC5zdWZmaXgge1xuICB3aWR0aDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiIsIi5jb250cm9sbGVyIHtcbiAgbWFyZ2luOiAzZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRyb2xsZXIgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRyb2xsZXIgYnV0dG9uIHtcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb250cm9sbGVyIG1hdC1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRyb2xsZXIgbWF0LWZvcm0tZmllbGQgLnN1ZmZpeCB7XG4gIHdpZHRoOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tex/home/controller/controller.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tex/home/controller/controller.component.ts ***!
  \*************************************************************/
/*! exports provided: ControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerComponent", function() { return ControllerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/tex/auth/auth.service.ts");
/* harmony import */ var _exchange_command_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../exchange/command.service */ "./src/app/tex/exchange/command.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _exchange_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../exchange/query.service */ "./src/app/tex/exchange/query.service.ts");







var ControllerComponent = /** @class */ (function () {
    function ControllerComponent(auth, command, query, router, snackBar) {
        this.auth = auth;
        this.command = command;
        this.query = query;
        this.router = router;
        this.snackBar = snackBar;
        this.price = 1;
        this.quantity = 1;
        this.leverage = 1;
        this.matcherId = '';
        this.isMarketPrice = false;
    }
    ControllerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (x) {
            if (!x.matcherId) {
                return;
            }
            _this.matcherId = x.matcherId;
            var cash = _this.matcherId.split('/');
            _this.secondary = cash[0];
            _this.primary = cash[1];
            _this.query.fetchReals([_this.matcherId]).subscribe(function (x) {
                if (x.length > 0) {
                    var real = x[0];
                    _this.price = !real.bid ? 1 : real.bid;
                }
            });
        });
    };
    ControllerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.select.selectionChange.subscribe(function (x) {
            _this.isMarketPrice = x.value === '0';
        });
    };
    Object.defineProperty(ControllerComponent.prototype, "signedIn", {
        get: function () {
            return this.auth.signedIn;
        },
        enumerable: true,
        configurable: true
    });
    ControllerComponent.prototype.create = function (type) {
        var _this = this;
        var margin = this.price * this.quantity / this.leverage * 1.2;
        this.command.createOpening(this.matcherId, type, this.price, this.quantity, this.leverage, margin, true).subscribe(function (x) {
        }, function (error) {
            _this.snackBar.open(error, null, {
                duration: 1000, verticalPosition: 'top'
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('select', {
            read: false,
            static: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelect"])
    ], ControllerComponent.prototype, "select", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], ControllerComponent.prototype, "open", void 0);
    ControllerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-controller',
            template: __webpack_require__(/*! raw-loader!./controller.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/controller/controller.component.html"),
            styles: [__webpack_require__(/*! ./controller.component.scss */ "./src/app/tex/home/controller/controller.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _exchange_command_service__WEBPACK_IMPORTED_MODULE_3__["CommandService"],
            _exchange_query_service__WEBPACK_IMPORTED_MODULE_6__["QueryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ControllerComponent);
    return ControllerComponent;
}());



/***/ }),

/***/ "./src/app/tex/home/home.component.scss":
/*!**********************************************!*\
  !*** ./src/app/tex/home/home.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  height: 100%;\n}\n\n.user {\n  margin: 10em 6em 6em 6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RleC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFFRSx3QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdGV4L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udXNlciB7XG5cbiAgbWFyZ2luOiAxMGVtIDZlbSA2ZW0gNmVtO1xuXG59XG4iLCIuaG9tZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnVzZXIge1xuICBtYXJnaW46IDEwZW0gNmVtIDZlbSA2ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/tex/home/home.component.ts":
/*!********************************************!*\
  !*** ./src/app/tex/home/home.component.ts ***!
  \********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/tex/auth/auth.service.ts");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/tex/home/menu/menu.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/tex/home/user-info/user-info.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/tex/home/charts/charts.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/tex/home/quote/quote.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/tex/home/transaction/transaction.component.ts");
/* harmony import */ var _controller_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controller/controller.component */ "./src/app/tex/home/controller/controller.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/tex/home/asset/asset.component.ts");














var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.resizeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = {
            gridType: angular_gridster2__WEBPACK_IMPORTED_MODULE_3__["GridType"].Fit,
            resizable: {
                enabled: true
            },
            maxRows: 18,
            minRows: 18,
            maxCols: 24,
            minCols: 24,
            margin: 4,
            draggable: {
                delayStart: 0,
                enabled: true,
                ignoreContent: true
            },
            itemChangeCallback: this.onItemChange,
            itemResizeCallback: this.onItemResize,
        };
        this.items = [
            { cols: 23, rows: 1, y: 0, x: 0, type: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], resizeEnabled: false, dragEnabled: false },
            {
                cols: 1, rows: 1, y: 0, x: 23, type: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"], resizeEnabled: false, dragEnabled: false, inputs: {
                    open: function () {
                        _this.drawer.toggle();
                    }
                }
            },
            {
                cols: 16, rows: 11, y: 1, x: 0, type: _charts_charts_component__WEBPACK_IMPORTED_MODULE_7__["ChartsComponent"], inputs: {
                    matcherId: this.matcherId
                }
            },
            {
                cols: 16, rows: 6, x: 0, y: 12, type: _asset_asset_component__WEBPACK_IMPORTED_MODULE_13__["AssetComponent"], inputs: {
                    open: function () {
                        _this.drawer.toggle();
                    }
                }
            },
            { cols: 4, rows: 11, x: 20, y: 1, type: _quote_quote_component__WEBPACK_IMPORTED_MODULE_8__["QuoteComponent"] },
            { cols: 4, rows: 6, x: 20, y: 12, type: _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_9__["TransactionComponent"] },
            {
                cols: 4, rows: 11, x: 16, y: 1, type: _controller_controller_component__WEBPACK_IMPORTED_MODULE_10__["ControllerComponent"], inputs: {
                    open: function () {
                        _this.drawer.toggle();
                    }
                }
            }
        ];
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivationEnd"]; })).subscribe(function (event) {
            _this.currentMatcherId = event.snapshot.queryParams.matcherId;
        });
    };
    Object.defineProperty(HomeComponent.prototype, "loggedIn", {
        get: function () {
            return this.auth.signedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "matcherId", {
        get: function () {
            return this.currentMatcherId || 'BTC/USD';
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.onItemChange = function (item, itemComponent) {
        console.log('change', item, itemComponent);
    };
    HomeComponent.prototype.onItemResize = function (item, itemComponent) {
        // this.resizeEvent.emit(item);
        console.log('resize', item, itemComponent);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer', { read: false, static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDrawer"])
    ], HomeComponent.prototype, "drawer", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/tex/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/tex/home/menu/menu.component.scss":
/*!***************************************************!*\
  !*** ./src/app/tex/home/menu/menu.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu .mat-chip-disabled {\n  opacity: 1;\n  color: #000;\n}\n\n.menu .mat-primary {\n  color: #3f51b5;\n}\n\n.menu .mat-accent {\n  color: #ff4081;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGV4L2hvbWUvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RleC9ob21lL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IC5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubWVudSAubWF0LXByaW1hcnkge1xuICBjb2xvcjogIzNmNTFiNTtcbn1cblxuLm1lbnUgLm1hdC1hY2NlbnQge1xuICBjb2xvcjogI2ZmNDA4MTtcbn1cbiIsIi5tZW51IC5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubWVudSAubWF0LXByaW1hcnkge1xuICBjb2xvcjogIzNmNTFiNTtcbn1cblxuLm1lbnUgLm1hdC1hY2NlbnQge1xuICBjb2xvcjogI2ZmNDA4MTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tex/home/menu/menu.component.ts":
/*!*************************************************!*\
  !*** ./src/app/tex/home/menu/menu.component.ts ***!
  \*************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exchange_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exchange/query.service */ "./src/app/tex/exchange/query.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(queryService, router) {
        this.queryService = queryService;
        this.router = router;
        this.contracts = [];
        this.activeIndex = 0;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.getContracts();
    };
    MenuComponent.prototype.getContracts = function () {
        var _this = this;
        this.queryService.fetchContracts().subscribe(function (contracts) {
            _this.queryService.fetchReals().subscribe(function (x) {
                _this.contracts = _this.queryService.contracts;
                _this.router.navigate(['contract'], { queryParams: { matcherId: _this.contracts[0].matcherId } });
            });
        });
    };
    MenuComponent.prototype.onChange = function () {
        console.log(arguments);
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/tex/home/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exchange_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/tex/home/quote/quote.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/tex/home/quote/quote.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quote table {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXgvaG9tZS9xdW90ZS9xdW90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90ZXgvaG9tZS9xdW90ZS9xdW90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZSB0YWJsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIucXVvdGUgdGFibGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tex/home/quote/quote.component.ts":
/*!***************************************************!*\
  !*** ./src/app/tex/home/quote/quote.component.ts ***!
  \***************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exchange_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exchange/query.service */ "./src/app/tex/exchange/query.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");





var QuoteComponent = /** @class */ (function () {
    function QuoteComponent(query, router, stomp) {
        this.query = query;
        this.router = router;
        this.stomp = stomp;
        this.quote = { asks: [], bids: [] };
    }
    QuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (x) {
            if (!x.matcherId) {
                return;
            }
            if (!!_this.quoteSubscribe) {
                _this.quoteSubscribe.unsubscribe();
            }
            _this.matcherId = x.matcherId;
            _this.quoteSubscribe = _this.stomp.watch("/contract/" + _this.matcherId + "/quote").subscribe(function (msg) {
                var body = JSON.parse(msg.body);
                var event = body.event;
                var type = body.type;
                switch (type) {
                    case 'MatcherQuoteIncreasedEvent': {
                        _this.add(event.type === 1 ? 'BID' : 'ASK', event.price, event.quantity);
                        break;
                    }
                    case 'MatcherQuoteDecreasedEvent': {
                        _this.remove(event.type === 1 ? 'BID' : 'ASK', event.price, event.quantity);
                        break;
                    }
                }
            });
            _this.query.fetchQuote(_this.matcherId).subscribe(function (quote) {
                _this.quote = quote;
            });
        });
    };
    QuoteComponent.prototype.add = function (type, price, quantity) {
        var isBid = false;
        var isHas = false;
        if (type === 'BID') {
            isBid = true;
        }
        var quotes = isBid ? this.quote.bids : this.quote.asks;
        quotes = quotes.map(function (it) {
            if (it.price === price) {
                isHas = true;
                return {
                    price: it.price,
                    quantity: it.quantity + quantity
                };
            }
            else {
                return it;
            }
        });
        if (!isHas) {
            quotes = quotes.concat({ price: price, quantity: quantity });
        }
        if (isBid) {
            this.quote.bids = quotes.slice();
        }
        else {
            this.quote.asks = quotes.slice();
        }
    };
    QuoteComponent.prototype.remove = function (type, price, quantity) {
        var isBid = false;
        if (type === 'BID') {
            isBid = true;
        }
        var quotes = isBid ? this.quote.bids : this.quote.asks;
        quotes = quotes.map(function (it) {
            if (it.price === price) {
                return {
                    price: it.price,
                    quantity: it.quantity - quantity
                };
            }
            else {
                return it;
            }
        }).filter(function (it) {
            return it.quantity > 0;
        });
        if (isBid) {
            this.quote.bids = quotes.slice();
        }
        else {
            this.quote.asks = quotes.slice();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuoteComponent.prototype, "matcherId", void 0);
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-quote',
            template: __webpack_require__(/*! raw-loader!./quote.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.scss */ "./src/app/tex/home/quote/quote.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exchange_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_4__["RxStompService"]])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/tex/home/transaction/transaction.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/tex/home/transaction/transaction.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXgvaG9tZS90cmFuc2FjdGlvbi90cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90ZXgvaG9tZS90cmFuc2FjdGlvbi90cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tex/home/transaction/transaction.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tex/home/transaction/transaction.component.ts ***!
  \***************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exchange_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exchange/query.service */ "./src/app/tex/exchange/query.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(query, router) {
        this.query = query;
        this.router = router;
        this.transactions = [];
    }
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (x) {
            if (!x.matcherId) {
                return;
            }
            _this.matcherId = x.matcherId;
            _this.query.fetchTransaction(_this.matcherId).subscribe(function (transactions) { return _this.transactions = transactions; });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TransactionComponent.prototype, "matcherId", void 0);
    TransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-transaction',
            template: __webpack_require__(/*! raw-loader!./transaction.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/transaction/transaction.component.html"),
            styles: [__webpack_require__(/*! ./transaction.component.scss */ "./src/app/tex/home/transaction/transaction.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exchange_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/tex/home/user-info/user-info.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/tex/home/user-info/user-info.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  padding: 0;\n  box-shadow: none;\n  height: 100%;\n}\n\n.card .card-header {\n  padding: 4px;\n  text-align: center;\n  display: block;\n}\n\n.card button {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9ob21lL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RleC9ob21lL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGV4L2hvbWUvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZCAuY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJkIGJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIuY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZCBidXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tex/home/user-info/user-info.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tex/home/user-info/user-info.component.ts ***!
  \***********************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/tex/auth/auth.service.ts");



var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(auth) {
        this.auth = auth;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(UserInfoComponent.prototype, "id", {
        get: function () {
            return this.auth.userInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfoComponent.prototype, "avatar", {
        get: function () {
            return this.auth.userInfo.avatar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfoComponent.prototype, "username", {
        get: function () {
            return this.auth.userInfo.uname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfoComponent.prototype, "loggedIn", {
        get: function () {
            return this.auth.signedIn;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], UserInfoComponent.prototype, "open", void 0);
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-user-info',
            template: __webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/home/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/tex/home/user-info/user-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/tex/login/login.component.scss":
/*!************************************************!*\
  !*** ./src/app/tex/login/login.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  margin: 20em 6em 6em 6em;\n}\n\n.login .icon {\n  font-size: 10em;\n}\n\n.login .custom-button {\n  display: block;\n  height: 4em;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGV4L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsd0JBQUE7QUNBRjs7QURJQTtFQUVFLGVBQUE7QUNGRjs7QURNQTtFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvdGV4L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcblxuICBtYXJnaW46IDIwZW0gNmVtIDZlbSA2ZW07XG5cbn1cblxuLmxvZ2luIC5pY29uIHtcblxuICBmb250LXNpemU6IDEwZW07XG5cbn1cblxuLmxvZ2luIC5jdXN0b20tYnV0dG9uIHtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiAxMDAlO1xuXG59XG4iLCIubG9naW4ge1xuICBtYXJnaW46IDIwZW0gNmVtIDZlbSA2ZW07XG59XG5cbi5sb2dpbiAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTBlbTtcbn1cblxuLmxvZ2luIC5jdXN0b20tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNGVtO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tex/login/login.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tex/login/login.component.ts ***!
  \**********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/tex/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, snackBar) {
        this.auth = auth;
        this.snackBar = snackBar;
        this.logging = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.logging = true;
                this.auth.signIn(this.username, this.password).subscribe({
                    next: function () {
                        _this.logging = false;
                    },
                    error: function (message) {
                        _this.logging = false;
                        _this.snackBar.open(message, null, { duration: 1000, horizontalPosition: 'right', verticalPosition: 'top' });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(LoginComponent.prototype, "loggedIn", {
        get: function () {
            return this.auth.signedIn;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/tex/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/tex/tex.module.ts":
/*!***********************************!*\
  !*** ./src/app/tex/tex.module.ts ***!
  \***********************************/
/*! exports provided: TexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TexModule", function() { return TexModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/tex/home/home.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/tex/user/user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/tex/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/tex/auth/auth-interceptor.ts");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/menu/menu.component */ "./src/app/tex/home/menu/menu.component.ts");
/* harmony import */ var ng_dynamic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-dynamic-component */ "./node_modules/ng-dynamic-component/bundles/ng-dynamic-component.es5.js");
/* harmony import */ var _home_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/user-info/user-info.component */ "./src/app/tex/home/user-info/user-info.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_charts_charts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/charts/charts.component */ "./src/app/tex/home/charts/charts.component.ts");
/* harmony import */ var _home_quote_quote_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/quote/quote.component */ "./src/app/tex/home/quote/quote.component.ts");
/* harmony import */ var _home_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/transaction/transaction.component */ "./src/app/tex/home/transaction/transaction.component.ts");
/* harmony import */ var _home_controller_controller_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/controller/controller.component */ "./src/app/tex/home/controller/controller.component.ts");
/* harmony import */ var _home_asset_asset_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/asset/asset.component */ "./src/app/tex/home/asset/asset.component.ts");
/* harmony import */ var _home_asset_order_order_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/asset/order/order.component */ "./src/app/tex/home/asset/order/order.component.ts");
/* harmony import */ var _home_asset_position_position_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/asset/position/position.component */ "./src/app/tex/home/asset/position/position.component.ts");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/tex/auth/auth.service.ts");
/* harmony import */ var _home_asset_cash_cash_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/asset/cash/cash.component */ "./src/app/tex/home/asset/cash/cash.component.ts");




























var TexModule = /** @class */ (function () {
    function TexModule() {
    }
    TexModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _home_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_15__["UserInfoComponent"],
                _home_charts_charts_component__WEBPACK_IMPORTED_MODULE_17__["ChartsComponent"],
                _home_quote_quote_component__WEBPACK_IMPORTED_MODULE_18__["QuoteComponent"],
                _home_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_19__["TransactionComponent"],
                _home_controller_controller_component__WEBPACK_IMPORTED_MODULE_20__["ControllerComponent"],
                _home_asset_asset_component__WEBPACK_IMPORTED_MODULE_21__["AssetComponent"],
                _home_asset_order_order_component__WEBPACK_IMPORTED_MODULE_22__["OrderComponent"],
                _home_asset_position_position_component__WEBPACK_IMPORTED_MODULE_23__["PositionComponent"],
                _home_asset_cash_cash_component__WEBPACK_IMPORTED_MODULE_27__["CashComponent"]
            ],
            exports: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                angular_gridster2__WEBPACK_IMPORTED_MODULE_12__["GridsterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                ng_dynamic_component__WEBPACK_IMPORTED_MODULE_14__["DynamicModule"].withComponents([
                    _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                    _home_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_15__["UserInfoComponent"],
                    _home_charts_charts_component__WEBPACK_IMPORTED_MODULE_17__["ChartsComponent"],
                    _home_quote_quote_component__WEBPACK_IMPORTED_MODULE_18__["QuoteComponent"],
                    _home_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_19__["TransactionComponent"],
                    _home_controller_controller_component__WEBPACK_IMPORTED_MODULE_20__["ControllerComponent"],
                    _home_asset_asset_component__WEBPACK_IMPORTED_MODULE_21__["AssetComponent"]
                ]),
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true
                }, {
                    provide: _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_24__["RxStompService"],
                    useFactory: function (auth) {
                        var service = new _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_24__["RxStompService"]();
                        service.configure({
                            brokerURL: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].websocket + '?token=' + auth.authorizationToken,
                            debug: function (msg) {
                                console.log(msg);
                            }
                        });
                        auth.token.subscribe(function (x) {
                            if (service.connected()) {
                                service.deactivate();
                            }
                            service.configure({
                                brokerURL: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].websocket + '?token=' + x.token || '',
                                debug: function (msg) {
                                    console.log(msg);
                                }
                            });
                            service.activate();
                        });
                        service.activate();
                        return service;
                    },
                    deps: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]]
                }, {
                    provide: _auth_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"], useClass: _auth_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            ]
        })
    ], TexModule);
    return TexModule;
}());



/***/ }),

/***/ "./src/app/tex/user/user.component.scss":
/*!**********************************************!*\
  !*** ./src/app/tex/user/user.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user {\n  margin: 10em 6em 6em 6em;\n}\n\n.user .avatar {\n  box-shadow: none;\n  text-align: center;\n}\n\n.user .avatar img {\n  border-radius: 50%;\n}\n\n.user .custom-button {\n  display: block;\n  height: 4em;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW1lZS9wcm9qZWN0cy9YRGlhdmVsLlMvY2xpZW50L25nLWNsaWVudC9zcmMvYXBwL3RleC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RleC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx3QkFBQTtBQ0FGOztBRElBO0VBRUUsZ0JBQUE7RUFFQSxrQkFBQTtBQ0hGOztBRE9BO0VBRUUsa0JBQUE7QUNMRjs7QURVQTtFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvdGV4L3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyIHtcblxuICBtYXJnaW46IDEwZW0gNmVtIDZlbSA2ZW07XG5cbn1cblxuLnVzZXIgLmF2YXRhciB7XG5cbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuLnVzZXIgLmF2YXRhciBpbWd7XG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG59XG5cblxuLnVzZXIgLmN1c3RvbS1idXR0b24ge1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDRlbTtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cbiIsIi51c2VyIHtcbiAgbWFyZ2luOiAxMGVtIDZlbSA2ZW0gNmVtO1xufVxuXG4udXNlciAuYXZhdGFyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlciAuYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnVzZXIgLmN1c3RvbS1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tex/user/user.component.ts":
/*!********************************************!*\
  !*** ./src/app/tex/user/user.component.ts ***!
  \********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/tex/auth/auth.service.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent(auth) {
        this.auth = auth;
        this.username = '--';
        this.nickname = '--';
        this.id = '--';
        this.avatar = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560754152470&di=47286ff4a4629c5b75960cace4c6a1a1&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F761e226fa727a6f986699afd8795deb41511e00b4d5e-dEBN7j_fw658';
        this.location = '未知';
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUserInfo();
    };
    UserComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.auth.fetchUserInfo().subscribe(function (userInfo) {
            _this.username = userInfo.uname;
            _this.nickname = userInfo.nickname;
            _this.id = userInfo.id;
            _this.avatar = userInfo.avatar;
            _this.location = userInfo.location;
        });
    };
    UserComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tex-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/tex/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/tex/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserComponent);
    return UserComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    user: 'http://api.moer.pro/user',
    // query: 'http://center:6002',
    // query: 'http://query.alpha:23456',
    query: 'http://query.beta',
    // command: 'http://command.alpha:23456',
    command: 'http://command.beta',
    //
    // websocket: 'ws://websocket.alpha:23456/exchange/websocket'
    websocket: 'ws://websocket.beta/exchange/websocket'
    // websocket: 'ws://localhost:6001/exchange/websocket'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/iamee/projects/XDiavel.S/client/ng-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map