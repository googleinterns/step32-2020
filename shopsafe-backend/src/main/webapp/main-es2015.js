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

/***/ "./src/app/api/api.service.ts":
/*!************************************!*\
  !*** ./src/app/api/api.service.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


// Provides HTTP client used to make HTTP requests within the Angular application
// Returns Observables (can be synchronous), not Promises (always asynchronous)





const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
class ApiService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /**
     * Creates new check-in for specific store ID and sends to API as POST request
     * @param storeId ID of the store that the check-in occurs for
     * @returns Observable
     */
    createCheckIn(storeId, busy, line, hygiene, mask) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params
            .set('storeId', storeId.toString())
            .set('busy', busy.toString())
            .set('line', line.toString())
            .set('hygiene', hygiene.toString())
            .set('mask', mask.toString());
        return this.http
            .post(API_URL + '/checkin?' + params.toString(), {}, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log("API: check in from " + storeId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message || error)));
    }
    /**
     * Gets all nearby stores from backend via GET request
     * @param location inputted by user
     * @returns result as observable
     */
    getNearbyStores(location, latlng) {
        const url = API_URL + '/stores?location=' + location + '&latlng=' + latlng.toString();
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log("API: fetch nearby stores for location " + location)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])((error.status + " " + error.statusText) || error)));
    }
    /**
     * Gets current store by ID, requires mapping because JSON doesn't match
     * interface typing
     * @param id ID of the store to fetch store from
     * @returns store of given ID as observable
     */
    getStoreById(id) {
        const url = API_URL + '/store?id=' + id;
        // const url = API_URL + '/store';
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('API: fetched store id ' + id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])((error.status + " " + error.statusText) || error)));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/result/result.component */ "./src/app/components/result/result.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_feedback_forms_feedback_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/feedback-forms/feedback-forms.component */ "./src/app/components/feedback-forms/feedback-forms.component.ts");
/* harmony import */ var _components_mobile_redirect_mobile_redirect_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mobile-redirect/mobile-redirect.component */ "./src/app/components/mobile-redirect/mobile-redirect.component.ts");











const routes = [
    {
        path: '',
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    },
    {
        path: 'result/:location/:latlng',
        component: _components_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"],
    },
    {
        path: 'store/:id',
        component: _components_store_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"],
    },
    {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
    },
    {
        path: "feedback",
        component: _components_feedback_forms_feedback_forms_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackFormsComponent"]
    },
    {
        path: "mobile",
        component: _components_mobile_redirect_mobile_redirect_component__WEBPACK_IMPORTED_MODULE_8__["MobileRedirectComponent"]
    },
    {
        path: "**",
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./google-chart/google-chart.module */ "./src/app/google-chart/google-chart.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/result/result.component */ "./src/app/components/result/result.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/check-in-modal/check-in-modal.component */ "./src/app/components/check-in-modal/check-in-modal.component.ts");
/* harmony import */ var _components_feedback_forms_feedback_forms_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/feedback-forms/feedback-forms.component */ "./src/app/components/feedback-forms/feedback-forms.component.ts");
/* harmony import */ var _components_mobile_redirect_mobile_redirect_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mobile-redirect/mobile-redirect.component */ "./src/app/components/mobile-redirect/mobile-redirect.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/round.pipe */ "./src/app/pipes/round.pipe.ts");
/* harmony import */ var _components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/http-error/http-error.component */ "./src/app/components/http-error/http-error.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");


// Custom components
















// Material Angular components






// Services

// Pipes




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_api_api_service__WEBPACK_IMPORTED_MODULE_24__["ApiService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
            _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_7__["GoogleChartModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
        _components_result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
        _components_store_store_component__WEBPACK_IMPORTED_MODULE_12__["StoreComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_15__["CheckInModalComponent"],
        _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_25__["RoundPipe"],
        _components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_26__["HttpErrorComponent"],
        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_27__["SearchBarComponent"],
        _components_feedback_forms_feedback_forms_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackFormsComponent"],
        _components_mobile_redirect_mobile_redirect_component__WEBPACK_IMPORTED_MODULE_17__["MobileRedirectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
        _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_7__["GoogleChartModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                    _components_result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                    _components_store_store_component__WEBPACK_IMPORTED_MODULE_12__["StoreComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                    _components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_15__["CheckInModalComponent"],
                    _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_25__["RoundPipe"],
                    _components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_26__["HttpErrorComponent"],
                    _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_27__["SearchBarComponent"],
                    _components_feedback_forms_feedback_forms_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackFormsComponent"],
                    _components_mobile_redirect_mobile_redirect_component__WEBPACK_IMPORTED_MODULE_17__["MobileRedirectComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
                    _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_7__["GoogleChartModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"]
                ],
                providers: [_api_api_service__WEBPACK_IMPORTED_MODULE_24__["ApiService"]],
                bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
                // Set of components to compile when NgModule is defined to be
                // dynamically loaded into view
                entryComponents: [_components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_15__["CheckInModalComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 49, vars: 0, consts: [["id", "about", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "section"], [1, "box"], ["href", "mailto:gabrielstewart@google.com"], ["href", "mailto:raulpalomo@google.com"], ["href", "mailto:caroljli@google.com"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Learn more about this tool, its developers, and its usages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Philosophy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ShopSafe is a tool designed to help ease the decision fatigue that comes with deciding what is the safest place to go shopping during COVID-19. The purpose of this tool is to provide a crowdsourced method of evaluating the safety of a grocery store to give users a more informed shopping experience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " To use Shopsafe, enter an address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "within the United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " to find a list of grocery stores rendered for each specific location. Click on each location to see the Shopsafe Score, county COVID-19 statistics, and check-in statistics for each location. Make sure to check in by clicking on the check-in button and submitting your review in order to help refine the ShopSafe Score. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " This tool is meant to be used in concurrence with good judgement and awareness of local regulations. The ShopSafe Score is calculated using the check-in and county statistics based on user input and the New York Times COVID-19 dataset. That is to say, this is not a deterministic metric, but rather a decision-making tool. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Creators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " This application is created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Gabriel Stewart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Raul Palomo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Carol Li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " under their 2020 Google Internship. Inquiries can be sent to them. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "License and Attributions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Copyright 2020 Google LLC. Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0. This product uses the FCC Data API but is not endorsed or certified by the FCC. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#about[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  text-align: center;\n}\n\n#about[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n#about[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: rgb(255, 135, 86, 0.7);\n}\n\n#about[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dCAuaGVhZGluZy10ZXh0IHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Fib3V0IC5ib3ggcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbiNhYm91dCAuYm94IHA6aG92ZXIge1xuICBjb2xvcjogcmdiKDI1NSwgMTM1LCA4NiwgMC43KTtcbn1cblxuI2Fib3V0IC5zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'shopsafe-frontend';
    }
    // Check for window size and redirect if mobile
    onResizeDown(event) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.router.navigate(['mobile']);
        }
    }
    ngOnInit() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            if (location.protocol === 'http:') {
                window.location.href = location.href.replace('http', 'https');
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResizeDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { onResizeDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/check-in-modal/check-in-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/check-in-modal/check-in-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: CheckInModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInModalComponent", function() { return CheckInModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function CheckInModalComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInModalComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.checkIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CHECK IN AT THIS STORE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckInModalComponent_button_51_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInModalComponent_button_51_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.fCheckIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CHECK IN AT THIS STORE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckInModalComponent_p_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please, place a rating for all categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// @Injectable({
//   providedIn: 'root'
// })
class CheckInModalComponent {
    constructor(apiService, dialogRef, route) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.route = route;
        // Enables Sliders
        this.socDisSlider = false;
        this.waitTimeSlider = false;
        this.cleanSlider = false;
        this.maskSlider = false;
        // Average Values
        this.socDis = 0;
        this.waitTime = 0;
        this.clean = 0;
        this.msk = 0;
        this.failedCheckIn = false;
        if (CheckInModalComponent.store.checkInCount != 0) {
            this.socDis = CheckInModalComponent.store.busy;
            this.waitTime = CheckInModalComponent.store.line;
            this.clean = CheckInModalComponent.store.hygiene;
            this.msk = CheckInModalComponent.store.masks;
        }
    }
    ngOnInit() {
    }
    /**
     * Sets ID variable of check in modal based on store id.
     * @param id of the current store
     */
    static setParam(store) {
        this.store = store;
        console.log("CLIENT: store id is " + this.store.id);
    }
    /**
     * Sends check-in user data to API
     * @param id ID of store that check-in is for
     * @param busy user input busy score
     * @param line user input line score
     * @param hygiene user input hygiene score
     * @param mask user input mask score
     */
    checkIn() {
        console.log("CLIENT: check-in api call");
        this.apiService.createCheckIn(CheckInModalComponent.store.id, this.socDis, this.waitTime, this.clean, this.msk)
            .subscribe();
        this.dialogRef.close();
    }
    /**
     * Indicates to user that they must give each category a rating
     */
    fCheckIn() {
        this.failedCheckIn = true;
        setTimeout(() => { this.failedCheckIn = false; }, 4000);
    }
}
CheckInModalComponent.ɵfac = function CheckInModalComponent_Factory(t) { return new (t || CheckInModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CheckInModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckInModalComponent, selectors: [["app-check-in-modal"]], decls: 53, vars: 11, consts: [["id", "check-in-modal"], [1, "title-text"], [1, "modal-content"], [1, "option"], [1, "left-text"], ["matTooltip", "How crowded is it inside the store? Essentially, is there \n                            enough space to social distance, maintain 6 feet? 0 indicates \n                            very busy (bad), and 10 indicates not busy at all (good)"], [1, "far", "fa-question-circle"], [1, "right-text", "grey-text"], [1, "far", "fa-frown"], ["min", "0", "max", "10", "step", "1", "thumbLabel", "", "tickInterval", "1", 3, "ngModel", "disabled", "ngModelChange", "click"], [1, "far", "fa-smile"], ["matTooltip", "Is there a line to get into the store from the outside? Are \n                            there lines inside the store? How long was the wait? 0 indicates \n                            long waits (bad), and 10 indicates minimal waits (good)"], ["matTooltip", "How clean is the store overall? Are the shared carts, \n                            baskets, and surfaces sanitized? 0 indicates poor hygiene \n                            (bad), and 10 indicates good hygiene (good)"], ["matTooltip", "How strict is the store with masks? Are the customers and workers \n                            wearing masks properly? 0 indicates no to little mask policy \n                            and presence (bad), and 10 indicates excellent mask usage (good)"], ["id", "submit-check-in-button", 3, "click", 4, "ngIf"], ["id", "invalid-check-in", 3, "click", 4, "ngIf"], ["style", "color: red;", 4, "ngIf"], ["id", "submit-check-in-button", 3, "click"], ["id", "invalid-check-in", 3, "click"], [2, "color", "red"]], template: function CheckInModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Check-In Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Use the sliders to input the statuses of the store to check in. High values indicates a good status, and low values indicate a bad status.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Social Distancing \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_14_listener($event) { return ctx.socDis = $event; })("click", function CheckInModalComponent_Template_mat_slider_click_14_listener() { return ctx.socDisSlider = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Service Speed \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_25_listener($event) { return ctx.waitTime = $event; })("click", function CheckInModalComponent_Template_mat_slider_click_25_listener() { return ctx.waitTimeSlider = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cleanliness \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_36_listener($event) { return ctx.clean = $event; })("click", function CheckInModalComponent_Template_mat_slider_click_36_listener() { return ctx.cleanSlider = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Mask Usage \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_47_listener($event) { return ctx.msk = $event; })("click", function CheckInModalComponent_Template_mat_slider_click_47_listener() { return ctx.maskSlider = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CheckInModalComponent_button_50_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CheckInModalComponent_button_51_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CheckInModalComponent_p_52_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.socDis)("disabled", !ctx.socDisSlider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.waitTime)("disabled", !ctx.waitTimeSlider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.clean)("disabled", !ctx.cleanSlider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.msk)("disabled", !ctx.maskSlider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskSlider && ctx.cleanSlider && ctx.waitTimeSlider && ctx.socDisSlider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.maskSlider || !ctx.cleanSlider || !ctx.waitTimeSlider || !ctx.socDisSlider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.failedCheckIn);
    } }, directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["#check-in-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-align: center;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   h2.title-text[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n    margin-top: 11px;\n    width: 220px;\n    color: rgba(196, 196, 196, 0.2);\n    text-align: right;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n    white-space: pre-line; \n}\n\n#check-in-modal[_ngcontent-%COMP%]   .left-text[_ngcontent-%COMP%] {\n    width: 45%;\n    clear: left;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   #submit-check-in-button[_ngcontent-%COMP%] {\n    background: #68BBCF;\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #EEEEEE;\n    margin-right: 15px;\n    border: none;\n    font-weight: 600;\n    width: 100%;\n    font-size: 15px;\n    margin-top: 20px;\n    cursor: pointer;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   #invalid-check-in[_ngcontent-%COMP%] {\n    background: #bdbdbd;\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #EEEEEE;\n    margin-right: 15px;\n    border: none;\n    font-weight: 600;\n    width: 100%;\n    font-size: 15px;\n    margin-top: 20px;\n    cursor: pointer;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   #submit-check-in-button[_ngcontent-%COMP%]:hover {\n    background: rgba(104, 187, 207, 0.3);\n    color: #68BBCF;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   .mat-tooltip[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVjay1pbi1tb2RhbC9jaGVjay1pbi1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrLWluLW1vZGFsL2NoZWNrLWluLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hlY2staW4tbW9kYWwgaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNjaGVjay1pbi1tb2RhbCBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY2hlY2staW4tbW9kYWwgaDIudGl0bGUtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY2hlY2staW4tbW9kYWwgbWF0LXNsaWRlciB7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgY29sb3I6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4yKTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI2NoZWNrLWluLW1vZGFsIC5vcHRpb24ge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgXG59XG5cbiNjaGVjay1pbi1tb2RhbCAubGVmdC10ZXh0IHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGNsZWFyOiBsZWZ0O1xufVxuXG4jY2hlY2staW4tbW9kYWwgI3N1Ym1pdC1jaGVjay1pbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICM2OEJCQ0Y7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xuICAgIGNvbG9yOiAjRUVFRUVFO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjaGVjay1pbi1tb2RhbCAjaW52YWxpZC1jaGVjay1pbiB7XG4gICAgYmFja2dyb3VuZDogI2JkYmRiZDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG4gICAgY29sb3I6ICNFRUVFRUU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NoZWNrLWluLW1vZGFsICNzdWJtaXQtY2hlY2staW4tYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNCwgMTg3LCAyMDcsIDAuMyk7XG4gICAgY29sb3I6ICM2OEJCQ0Y7XG59XG5cbiNjaGVjay1pbi1tb2RhbCAubWF0LXRvb2x0aXAge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckInModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-in-modal',
                templateUrl: './check-in-modal.component.html',
                styleUrls: ['./check-in-modal.component.css']
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/feedback-forms/feedback-forms.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/feedback-forms/feedback-forms.component.ts ***!
  \***********************************************************************/
/*! exports provided: FeedbackFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackFormsComponent", function() { return FeedbackFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FeedbackFormsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeedbackFormsComponent.ɵfac = function FeedbackFormsComponent_Factory(t) { return new (t || FeedbackFormsComponent)(); };
FeedbackFormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackFormsComponent, selectors: [["app-feedback-forms"]], decls: 25, vars: 0, consts: [["id", "title", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "section"], [1, "box"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLSeagc76SWGCG8LTBVM_ZrWZAjAoGeH2fjI2fWR15o9Z-x7J-Q/viewform?usp=sf_link"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLScJviEPTKH7Z9aITFulbhgrAc5v3GGlW24ttIoHU-2pe7Fz4g/viewform?usp=sf_link"]], template: function FeedbackFormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FEEDBACK FORMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Help us improve ShopSafe by giving us feedback!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Experience Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Let us know what your experience with ShopSafe was like by filling out this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Bug Reporting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " We make mistakes, help us fix them by reporting them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#title[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    text-align: center;\n}\n\n#title[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: justify;\n}\n\n#title[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n    color: rgb(255, 135, 86, 0.7);\n}\n\n#title[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n    padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWVkYmFjay1mb3Jtcy9mZWVkYmFjay1mb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZGJhY2stZm9ybXMvZmVlZGJhY2stZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZSAuaGVhZGluZy10ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0aXRsZSAuYm94IHAge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbiN0aXRsZSAuYm94IHA6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxMzUsIDg2LCAwLjcpO1xufVxuXG4jdGl0bGUgLnNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackFormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback-forms',
                templateUrl: './feedback-forms.component.html',
                styleUrls: ['./feedback-forms.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/about"]; };
const _c2 = function () { return ["/feedback"]; };
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Made with \uD83D\uDE37 by Raul Palomo, Gabriel Stewart, Carol Li ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
} }
class FooterComponent {
    constructor(router) {
        this.router = router;
        this.mobileCheck = false;
    }
    onResizeDown(event) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.mobileCheck = true;
        }
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], hostBindings: function FooterComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FooterComponent_resize_HostBindingHandler($event) { return ctx.onResizeDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 1, consts: [["id", "footer"], ["class", "bottom-nav", 4, "ngIf"], [1, "bottom-nav"], [3, "routerLink"], [1, "fas", "fa-bug"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 14, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobileCheck);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#footer[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 15px;\n    padding-bottom: 47px;\n    position: fixed;\n    left: 0px;\n    bottom: 0px;\n    height: 30px;\n    width: 100%;\n    background: #DDF8FF;\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    margin-left: 20px;\n    padding-bottom: 13px;\n    overflow: hidden;\n    width: 100%;\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    bottom: 0;\n    padding-bottom: 13px;\n    position: fixed;\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-weight: 500;\n    display: inline;\n    padding-right: 20px;\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: rgba(104, 187, 207);\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #FF8756;\n    background: rgb(255,135,86, 0.1);\n    padding: 2px 5px 2px;\n    border-radius: 3px;\n}\n\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    float: right;\n    padding-top: 12px;\n    margin-right: 25px;\n    color: rgba(104, 187, 207);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQ3cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI0RERjhGRjtcbn1cblxuI2Zvb3RlciAuYm90dG9tLW5hdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNmb290ZXIgLmJvdHRvbS1uYXYgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4jZm9vdGVyIC5ib3R0b20tbmF2IGxpIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4jZm9vdGVyIC5ib3R0b20tbmF2IGEge1xuICAgIGNvbG9yOiByZ2JhKDEwNCwgMTg3LCAyMDcpO1xufVxuXG4jZm9vdGVyIC5ib3R0b20tbmF2IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjRkY4NzU2O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMTM1LDg2LCAwLjEpO1xuICAgIHBhZGRpbmc6IDJweCA1cHggMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuI2Zvb3RlciAuY29weXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIGNvbG9yOiByZ2JhKDEwNCwgMTg3LCAyMDcpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { onResizeDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/http-error/http-error.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/http-error/http-error.component.ts ***!
  \***************************************************************/
/*! exports provided: HttpErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorComponent", function() { return HttpErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
class HttpErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
HttpErrorComponent.ɵfac = function HttpErrorComponent_Factory(t) { return new (t || HttpErrorComponent)(); };
HttpErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HttpErrorComponent, selectors: [["app-http-error"]], inputs: { httpErrorMessage: "httpErrorMessage" }, decls: 12, vars: 3, consts: [["id", "http-error", 1, "segment"], [1, "segment-text"], [3, "routerLink"], [1, "error-wrapper"]], template: function HttpErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HTTP Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Uh oh, it seems that there's a problem with calling our server. Click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to return to the landing page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.httpErrorMessage);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#http-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 36px;\n}\n\n#http-error[_ngcontent-%COMP%]   .error-wrapper[_ngcontent-%COMP%] {\n  padding: 15px 30px 15px;\n  background: rgba(0, 0, 0, 0.03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9odHRwLWVycm9yL2h0dHAtZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9odHRwLWVycm9yL2h0dHAtZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNodHRwLWVycm9yIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbn1cblxuI2h0dHAtZXJyb3IgLmVycm9yLXdyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-http-error',
                templateUrl: './http-error.component.html',
                styleUrls: ['./http-error.component.css']
            }]
    }], function () { return []; }, { httpErrorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");






function LandingComponent_div_0_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " failed to get your location, enable location settings for our site or type in an address above.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/about"]; };
function LandingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ShopSafe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Information tool for safe, simple shopping during COVID-19.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Learn more about this tool \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-search-bar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setAddress", function LandingComponent_div_0_Template_app_search_bar_setAddress_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_div_0_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.getUserLatLng(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LandingComponent_div_0_p_17_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.failedGeoLoc);
} }
function LandingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fetching Location...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LandingComponent {
    constructor(router, zone) {
        this.router = router;
        this.zone = zone;
        this.location = '';
        this.loadingUserLatLng = false;
        this.failedGeoLoc = false;
        this.latlng = false;
    }
    ngOnInit() {
    }
    getNearbyStores() {
        this.router.navigate(['/result', this.location, this.latlng]);
        console.log("CLIENT: redirecting to results");
    }
    /**
     * Fetches address from search bar autocomplete by parsing returned
     * place array for 'formatted_address' value
     * @param place array emitted from setAddress event from search bar component
     */
    getAddress(place) {
        this.location = place['formatted_address'];
        this.latlng = false;
        this.zone.run(() => this.getNearbyStores());
    }
    /**
     * Fetches address from geolocation
     */
    getUserLatLng() {
        console.log("getting user location");
        this.loadingUserLatLng = true;
        navigator.geolocation.getCurrentPosition((position) => {
            const stringLocation = position.coords.latitude.toString() + ',' + position.coords.longitude.toString();
            this.zone.run(() => this.location = stringLocation);
            this.latlng = true;
            this.getNearbyStores();
        }, (positionError) => {
            this.loadingUserLatLng = false;
            console.log(positionError);
            setTimeout(() => alert("Failed to get your location, adjust your location settings for our site or insert an address in the search bar"), 100);
        });
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 2, vars: 2, consts: [["id", "landing", "class", "segment", 4, "ngIf"], ["class", "loading-screen", 4, "ngIf"], ["id", "landing", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [3, "routerLink"], [1, "fas", "fa-long-arrow-alt-right"], [1, "user-input"], [3, "setAddress"], [1, "loc-button", 3, "click"], [1, "fas", "fa-map-marked-alt"], ["style", "color: red;", 4, "ngIf"], [2, "color", "red"], [1, "loading-screen"], ["mode", "indeterminate", 2, "margin", "0 auto"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LandingComponent_div_0_Template, 18, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LandingComponent_div_1_Template, 5, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingUserLatLng);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingUserLatLng);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__["SearchBarComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"]], styles: ["#landing[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-top: 100px;\n    text-align: center;\n}\n\n#landing[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#landing[_ngcontent-%COMP%]   .loc-button[_ngcontent-%COMP%] {\n    \n    width: auto;\n    margin-left: 5px;\n    padding: 14px 14px 17px 14px;\n    float: left;\n    display: flex;\n    background-color: #68bbcf;\n    color: white;\n    border-radius: 8px;\n    cursor: pointer;\n\n}\n\n#landing[_ngcontent-%COMP%]   .loc-button[_ngcontent-%COMP%]:hover {\n    \n    background-color: orange;\n    margin-left: 2.5px;\n    margin-right: 2.5px;\n    transform: scale(1.07);\n\n}\n\n#landing[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n    float: left;\n    padding-top: 30px;\n    display: flex;\n    width: 60%;\n    margin-bottom: 10px;\n}\n\n#landing[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    padding: 12px 13px 10px;\n    position: absolute;\n    color: rgba(196, 196, 196);\n}\n\n#landing[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 50px 15px;\n    outline: none;\n    border-radius: 8px;\n    background: rgba(0, 0, 0, 0.03);\n    border: none;\n    font-weight: 500;\n}\n\n#landing[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    width: 100%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    overflow: hidden;\n}\n\n#landing[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n}\n\n#landing[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    padding-top: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xhbmRpbmcgLmhlYWRpbmctdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2xhbmRpbmcgLmhlYWRpbmctdGV4dCBhIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jbGFuZGluZyAubG9jLWJ1dHRvbiB7XG4gICAgXG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nOiAxNHB4IDE0cHggMTdweCAxNHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4YmJjZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxufVxuXG4jbGFuZGluZyAubG9jLWJ1dHRvbjpob3ZlciB7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XG5cbn1cblxuI2xhbmRpbmcgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNsYW5kaW5nIC5pbnB1dC1jb250YWluZXIgLnNlYXJjaC1pY29uIHtcbiAgICBwYWRkaW5nOiAxMnB4IDEzcHggMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHJnYmEoMTk2LCAxOTYsIDE5Nik7XG59XG5cbiNsYW5kaW5nIC5pbnB1dC1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweCA1MHB4IDE1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI2xhbmRpbmcgLnVzZXItaW5wdXQge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2xhbmRpbmcgLmlucHV0LWNvbnRhaW5lciBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNsYW5kaW5nIGZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/mobile-redirect/mobile-redirect.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/mobile-redirect/mobile-redirect.component.ts ***!
  \*************************************************************************/
/*! exports provided: MobileRedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileRedirectComponent", function() { return MobileRedirectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MobileRedirectComponent {
    constructor() { }
    ngOnInit() {
    }
}
MobileRedirectComponent.ɵfac = function MobileRedirectComponent_Factory(t) { return new (t || MobileRedirectComponent)(); };
MobileRedirectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileRedirectComponent, selectors: [["app-mobile-redirect"]], decls: 6, vars: 0, consts: [["id", "mobile-redirect", 1, "segment"], [1, "segment-text"]], template: function MobileRedirectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Hi! It looks like you're using our app on a mobile device. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Unfortunately, we're still working on optimizing it for mobile right now. Please use it on your desktop instead! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2JpbGUtcmVkaXJlY3QvbW9iaWxlLXJlZGlyZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2JpbGUtcmVkaXJlY3QvbW9iaWxlLXJlZGlyZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileRedirectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-redirect',
                templateUrl: './mobile-redirect.component.html',
                styleUrls: ['./mobile-redirect.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 9, vars: 2, consts: [["id", "page-not-found", 1, "segment"], [1, "segment-text"], [3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404 Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sorry you couldn't find what you were looking for! Click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to return to the landing page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#page-not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlLW5vdC1mb3VuZCBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/result/result.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/result/result.component.ts ***!
  \*******************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _http_error_http_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../http-error/http-error.component */ "./src/app/components/http-error/http-error.component.ts");
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/round.pipe */ "./src/app/pipes/round.pipe.ts");














function ResultComponent_div_0_map_marker_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "map-marker", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function ResultComponent_div_0_map_marker_14_Template_map_marker_mapClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const marker_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.openInfo(marker_r7.position, marker_r7.title, marker_r7.info); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marker_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", marker_r7.position)("title", marker_r7.title)("options", marker_r7.options);
} }
function ResultComponent_div_0_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_div_0_mat_option_30_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const method_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.getSortedResult(method_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", method_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", method_r10, " ");
} }
const _c0 = function (a1) { return ["/store", a1]; };
function ResultComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_div_0_div_31_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const store_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.recenterMap(store_r13.latitude, store_r13.longitude); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const store_r13 = ctx.$implicit;
    const resultIndex_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--index", resultIndex_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, store_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", store_r13.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](store_r13.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 8, store_r13.distance), " mi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", store_r13.rating ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 10, store_r13.rating) : "\u2014", "/5 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 12, store_r13.score), "/10");
} }
function ResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Showing all grocery stores for your location. The map is centered to your current location.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.recenterMap(ctx_r17.result.latLng.latitude, ctx_r17.result.latLng.longitude); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 RECENTER MAP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "google-map", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResultComponent_div_0_map_marker_14_Template, 1, 3, "map-marker", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "map-info-window", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Local Grocery Stores");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Click on a store name to view store statistics, click on the \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u00A0 to view on map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sort Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ResultComponent_div_0_mat_option_30_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ResultComponent_div_0_div_31_Template, 28, 16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx_r0.zoom)("center", ctx_r0.center)("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.markers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.infoWindowOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sortingMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.result.stores);
} }
function ResultComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fetching Results for ", ctx_r1.location, "...");
} }
function ResultComponent_app_http_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-http-error", 38);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("httpErrorMessage", ctx_r2.httpErrorMessage);
} }
class ResultComponent {
    constructor(apiService, route, zone) {
        this.apiService = apiService;
        this.route = route;
        this.zone = zone;
        this.infoWindowOptions = {}; // Options for Info Window.
        this.markers = []; // Array of store markers rendered in Google Map.
        this.styles = [
            {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "poi",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "transit",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            }
        ]; // Custom map styling.
        this.options = {
            disableDefaultUI: true,
            styles: this.styles,
        }; // Options for Google Map rendered in template.
        this.sortingMethods = ['Sort by ShopSafe Score',
            'Sort by Google Review',
            'Sort by Distance']; // Init sorting methods.
    }
    ngOnInit() {
        this.isLoaded = false; // Defaults to API not called yet
        this.httpError = false; // Defaults to no HTTP error
        this.location = this.route.snapshot.paramMap.get('location').toString();
        this.latlng = JSON.parse(this.route.snapshot.paramMap.get('latlng'));
        this.getResult('Sort by ShopSafe Score');
    }
    /**
     * Calls API to get result and subscribes local variables using data returned
     * in the Observable from the HTTP response.
     */
    getResult(method) {
        console.log('CLIENT: results api call at ' + this.location);
        this.apiService.getNearbyStores(this.location, this.latlng)
            .subscribe(data => this.result = {
            stores: data.stores,
            latLng: data.latLng
        }, err => {
            console.log(err),
                this.httpError = true,
                this.httpErrorMessage = err;
        }, () => {
            this.sortResults(method);
            this.initTemplate();
        });
    }
    getSortedResult(method) {
        // this.apiService.getNearbyStores(this.location, this.latlng)
        //   .subscribe(
        //     () => { this.sortResults(method) }
        //   );
        this.zone.run(() => { this.sortResults(method); });
    }
    /**
     * Initializes component by using data returned from API call.
     * Sets isLoaded boolean to true, as the function can only be called when there
     * is a successful response.
     */
    initTemplate() {
        // Sets loaded state to true
        this.isLoaded = true;
        console.log("CLIENT: API call finished");
        // Add all map markers
        this.addMarkers();
        console.log("CLIENT: added markers");
        // Set center of map to latLng of user location
        this.center = {
            lat: this.result.latLng.latitude,
            lng: this.result.latLng.longitude
        };
        // Set zoom level of map
        this.zoomMap();
    }
    /**
     * Populates map with markers indicating score range based on latLng geolocation
     * of each rendered grocery store.
     *
     * Red markers: [0, 3.3], yellow markers: (3.3, 6.6], greeen markers: (6.6, 10]
     */
    addMarkers() {
        var safeIcon = "http://maps.google.com/mapfiles/ms/icons/green.png";
        var cautionIcon = "http://maps.google.com/mapfiles/ms/icons/yellow.png";
        var unsafeIcon = "http://maps.google.com/mapfiles/ms/icons/red.png";
        var currIcon = '';
        var userIcon = "https://img.icons8.com/material-two-tone/24/000000/street-view.png";
        // Adds current user query location to markers.
        this.markers.push({
            position: {
                lat: this.result.latLng.latitude,
                lng: this.result.latLng.longitude
            },
            title: "Your location!",
            options: {
                icon: { url: userIcon }
            }
        });
        // Adds each stores as marker.
        for (let store of this.result.stores) {
            // Set icon according to colour.
            if (store.score <= 3.3) {
                currIcon = unsafeIcon;
            }
            else if (store.score <= 6.6) {
                currIcon = cautionIcon;
            }
            else {
                currIcon = safeIcon;
            }
            this.markers.push({
                position: {
                    lat: store.latitude,
                    lng: store.longitude
                },
                title: store.name,
                info: store.score,
                options: {
                    icon: { url: currIcon }
                }
            });
        }
    }
    /**
     * Calculates and sets zoom level based on maximum distance of a store
     * from the user latLng.
     */
    zoomMap() {
        console.log("CLIENT: map resized");
        //Maximum distance from user latlng
        const maxDistance = Math.max.apply(null, this.result.stores.map(store => store.distance));
        this.zoom = Math.round(14 - Math.log(maxDistance) / Math.LN2);
    }
    /**
     * Recenters map based on latLng
     * @param lat latitude to be recentered to
     * @param lng longitude to be recentered to
     */
    recenterMap(lat, lng) {
        this.center = {
            lat: lat,
            lng: lng
        };
        // Scroll to map.
        const mapElement = document.getElementById("map");
        mapElement.scrollIntoView({ behavior: 'smooth' });
    }
    /**
     * Sorts results in descending order with the selected method through
     * the dropdown in the results page. Method gets called when the selector is changed.
     * @param method The method from the dropdown selector.
     */
    sortResults(method) {
        // Sort by ShopSafe Score in descending order.
        if (method == "Sort by ShopSafe Score") {
            console.log("CLIENT: sorting by ShopSafe Score");
            this.result.stores.sort((n1, n2) => {
                return n2.score - n1.score;
            });
            // Sort by Google Review in descending order.
        }
        else if (method == "Sort by Google Review") {
            console.log("CLIENT: sorting by Google Review");
            this.result.stores.sort((n1, n2) => {
                return n2.rating - n1.rating;
            });
            // Sort by distance in ascending order. 
        }
        else {
            this.result.stores.sort((n1, n2) => {
                console.log("CLIENT: sorting by distance");
                return n1.distance - n2.distance;
            });
        }
    }
    /**
     * Opens info window on map anchored to given marker.
     * @param markerPosition Marker coordinates that the window is anchored to.
     * @param store The name of the store for the given marker.
     * @param storeScore The score of the specified store.
     */
    openInfo(markerPosition, store, storeScore) {
        this.infoWindowOptions = {
            content: store + ": " + Math.round(storeScore * 100) / 100 + "/10",
            position: markerPosition
        };
        this.infoWindow.open();
    }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-result"]], viewQuery: function ResultComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapInfoWindow"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t.first);
    } }, decls: 3, vars: 3, consts: [["id", "result", "class", "segment", 4, "ngIf"], ["class", "loading-screen", 4, "ngIf"], [3, "httpErrorMessage", 4, "ngIf"], ["id", "result", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "maps-button", 3, "click"], [1, "fas", "fa-location-arrow"], ["id", "map"], ["height", "500px", "width", "100%", 3, "zoom", "center", "options"], ["googleMap", ""], [3, "position", "title", "options", "mapClick", 4, "ngFor", "ngForOf"], [3, "options"], [1, "stores-list-heading"], [1, "left-text"], [1, "subtext"], [1, "fas", "fa-map-marker-alt", 2, "color", "#68BBCF"], [1, "right-text"], ["appearance", "fill"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "stores-list", 4, "ngFor", "ngForOf"], [3, "position", "title", "options", "mapClick"], [3, "value", "click"], [1, "stores-list"], [1, "stores-list-animate-box"], [1, "stores-list-item"], [1, "row"], [1, "left-text", "markers"], [1, "location-icon", 3, "click"], [1, "fas", "fa-map-marker-alt"], [1, "stores-list-location", 3, "routerLink"], [1, "address"], [1, "tag"], ["matTooltip", "Google Review", 1, "tooltip"], [1, "far", "fa-question-circle"], [1, "rating"], [1, "loading-screen"], ["mode", "indeterminate", 2, "margin", "0 auto"], [3, "httpErrorMessage"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResultComponent_div_0_Template, 32, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultComponent_app_http_error_2_Template, 1, 1, "app-http-error", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded && !ctx.httpError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded && !ctx.httpError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.httpError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapInfoWindow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapMarker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _http_error_http_error_component__WEBPACK_IMPORTED_MODULE_10__["HttpErrorComponent"]], pipes: [_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_11__["RoundPipe"]], styles: ["#result[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#result[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    text-align: center;\n}\n\n#result[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 87px;\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 8px;\n    padding: 33px;\n}\n\n#result[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#result[_ngcontent-%COMP%]   .right-text[_ngcontent-%COMP%] {\n    float: right;\n}\n\n#result[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n    line-height: 41px;\n}\n\n#result[_ngcontent-%COMP%]   .left-text[_ngcontent-%COMP%] {\n    float: left;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-heading[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    overflow: hidden;\n}\n\n#result[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #68BBCF;\n    cursor: pointer;\n}\n\n#result[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%]:hover {\n  color: rgba(104, 187, 207, 0.3);\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-location[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    text-transform: uppercase;\n    color: #4A4A4A;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-location[_ngcontent-%COMP%]:hover {\n    background-color: rgba(104, 187, 207, 0.5);\n}\n\n#result[_ngcontent-%COMP%]   .markers[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #result[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #result[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    display: inline;\n}\n\n#result[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%] {\n    float: left;\n    display: flex;\n    width: 33.3%;\n}\n\n#result[_ngcontent-%COMP%]   .shopsafe-score[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 30px;\n    display: flex;\n    color: #FF8756;\n}\n\n#result[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    color: #FF8756;\n    padding-left: 10px;\n    cursor: auto;\n}\n\n#result[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n    line-height: 0px;\n}\n\n#result[_ngcontent-%COMP%]   .stat-obj[_ngcontent-%COMP%] {\n    background: rgba(104, 187, 207, 0.1);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #68BBCF;\n    margin-right: 15px;\n    cursor: auto;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-animate-box[_ngcontent-%COMP%] {\n  -webkit-animation-delay: calc(0.045s * var(--index));\n          animation-delay: calc(0.045s * var(--index));\n  -webkit-animation-name: animateIn;\n          animation-name: animateIn;\n  -webkit-animation-duration: 350ms;\n          animation-duration: 350ms;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-item[_ngcontent-%COMP%] {\n  clear: both; \n  padding: 30px;\n  box-shadow: 0 0 12px 3px #F6F6F6;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  transition: 0.2s transform !important;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  transition-duration: 0.2s !important;\n}\n\n#result[_ngcontent-%COMP%]   .maps-button[_ngcontent-%COMP%] {\n  background: #68BBCF;\n  border-radius: 8px;\n  padding: 10px 15px 10px;\n  color: #EEEEEE;\n  margin-right: 15px;\n  border: none;\n  font-weight: 600;\n  font-size: 15px;\n  margin-top: 20px;\n  cursor: pointer;\n}\n\n#result[_ngcontent-%COMP%]   .maps-button[_ngcontent-%COMP%]:hover {\n  background: rgba(104, 187, 207, 0.3);\n  color: #68BBCF;\n}\n\n#result[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.3);\n  padding: 5px 7px 5px;\n  margin-left: 10px;\n  cursor: auto;\n}\n\n#result[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #68BBCF !important;\n}\n\n@-webkit-keyframes animateIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.6) translateY(-8px);\n  }\n  \n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes animateIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.6) translateY(-8px);\n  }\n  \n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0VBQ0Usb0RBQTRDO1VBQTVDLDRDQUE0QztFQUM1QyxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFUQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVzdWx0IC5oZWFkaW5nLXRleHQgaDEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNyZXN1bHQgLmhlYWRpbmctdGV4dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcmVzdWx0IC5zdGF0LWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4N3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDMzcHg7XG59XG5cbiNyZXN1bHQgaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNyZXN1bHQgLnJpZ2h0LXRleHQge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuI3Jlc3VsdCAuc3VidGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XG59XG5cbiNyZXN1bHQgLmxlZnQtdGV4dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNyZXN1bHQgLnN0b3Jlcy1saXN0LWhlYWRpbmcge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNyZXN1bHQgLmxvY2F0aW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzY4QkJDRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNyZXN1bHQgLmxvY2F0aW9uLWljb246aG92ZXIge1xuICBjb2xvcjogcmdiYSgxMDQsIDE4NywgMjA3LCAwLjMpO1xufVxuXG4jcmVzdWx0IC5zdG9yZXMtbGlzdC1sb2NhdGlvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzRBNEE0QTtcbn1cblxuI3Jlc3VsdCAuc3RvcmVzLWxpc3QtbG9jYXRpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxODcsIDIwNywgMC41KTtcbn1cblxuI3Jlc3VsdCAubWFya2VycyAqLCAjcmVzdWx0IC5zdGF0LWVsZW0gKiwgI3Jlc3VsdCAuc3RhdC1iYXIgKiB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiNyZXN1bHQgLnN0YXQtZWxlbSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzMuMyU7XG59XG5cbiNyZXN1bHQgLnNob3BzYWZlLXNjb3JlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICNGRjg3NTY7XG59XG5cbiNyZXN1bHQgLnJhdGluZyB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogI0ZGODc1NjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgY3Vyc29yOiBhdXRvO1xufVxuXG4jcmVzdWx0IC5hZGRyZXNzIHtcbiAgICBsaW5lLWhlaWdodDogMHB4O1xufVxuXG4jcmVzdWx0IC5zdGF0LW9iaiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDQsIDE4NywgMjA3LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcbiAgICBjb2xvcjogIzY4QkJDRjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgY3Vyc29yOiBhdXRvO1xufVxuXG4jcmVzdWx0IC5zdG9yZXMtbGlzdC1hbmltYXRlLWJveCB7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygwLjA0NXMgKiB2YXIoLS1pbmRleCkpO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZUluO1xuICBhbmltYXRpb24tZHVyYXRpb246IDM1MG1zO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuI3Jlc3VsdCAuc3RvcmVzLWxpc3QtaXRlbSB7XG4gIGNsZWFyOiBib3RoOyBcbiAgcGFkZGluZzogMzBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEycHggM3B4ICNGNkY2RjY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyB0cmFuc2Zvcm0gIWltcG9ydGFudDtcbn1cblxuI3Jlc3VsdCAuc3RvcmVzLWxpc3QtaXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnMgIWltcG9ydGFudDtcbn1cblxuI3Jlc3VsdCAubWFwcy1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjNjhCQkNGO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xuICBjb2xvcjogI0VFRUVFRTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcmVzdWx0IC5tYXBzLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxODcsIDIwNywgMC4zKTtcbiAgY29sb3I6ICM2OEJCQ0Y7XG59XG5cbiNyZXN1bHQgLnRhZyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDVweCA3cHggNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG4jcmVzdWx0IC50b29sdGlwIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzY4QkJDRiAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC04cHgpO1xuICB9XG4gIFxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.css']
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], { static: false }]
        }], infoWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapInfoWindow"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




const _c0 = ["address"];
class SearchBarComponent {
    constructor() {
        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Check if API is loaded
        if (google.maps.places && google.maps) {
            console.log('CLIENT: apis loaded');
            this.queryWait = true;
        }
        else {
            console.log('CLIENT: apis not loaded');
            this.queryWait = false;
        }
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.getPlace();
    }
    /**
     * Fetches places based on changing input values using Google Places API autocomplete feature.
     * Restricted to the US for geocoded locations (ie. not corporate)
     */
    getPlace() {
        const autocomplete = new google.maps.places.Autocomplete(this.address.nativeElement, {
            componentRestrictions: { country: 'US' },
            // Restricted to addresses (ie. not establishments)
            types: ['geocode']
        });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        });
    }
    /**
     * Invokes EventEmitter to toggle changes for autocomplete.
     * @param place contained value within event to be emitted
     */
    invokeEvent(place) {
        this.setAddress.emit(place);
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], viewQuery: function SearchBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.address = _t.first);
    } }, outputs: { setAddress: "setAddress" }, decls: 6, vars: 2, consts: [[1, "input-container"], [1, "search-icon"], ["type", "text", "placeholder", "ENTER YOUR LOCATION TO FIND NEARBY GROCERY STORES", "name", "search", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], ["address", ""]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_4_listener($event) { return ctx.autocompleteInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.queryWait)("ngModel", ctx.autocompleteInput);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".input-container[_ngcontent-%COMP%] {\n    float: left;\n    padding-top: 0px;\n    display: flex;\n    width: calc(100% - 46px - 5px);\n}\n\n.input-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    padding: 12px 13px 10px;\n    position: absolute;\n    color: rgba(196, 196, 196);\n}\n\n.input-field[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 50px 15px;\n    float: right;\n    outline: none;\n    border-radius: 8px;\n    background: rgba(0, 0, 0, 0.03);\n    border: none;\n    font-weight: 500;\n}\n\n.input-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n}\n\nform[_ngcontent-%COMP%] {\n    padding-top: 0px;\n}\n\n.input-field[_ngcontent-%COMP%]:disabled {\n  background: rgba(0, 0, 0, 0.09);\n  color: rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NnB4IC0gNXB4KTtcbn1cblxuLmlucHV0LWNvbnRhaW5lciAuc2VhcmNoLWljb24ge1xuICAgIHBhZGRpbmc6IDEycHggMTNweCAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogcmdiYSgxOTYsIDE5NiwgMTk2KTtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHggMTVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5pbnB1dC1maWVsZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.css']
            }]
    }], function () { return []; }, { setAddress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], address: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['address']
        }] }); })();


/***/ }),

/***/ "./src/app/components/store/store.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/store/store.component.ts ***!
  \*****************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-in-modal/check-in-modal.component */ "./src/app/components/check-in-modal/check-in-modal.component.ts");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _google_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../google-chart/line-chart/line-chart.component */ "./src/app/google-chart/line-chart/line-chart.component.ts");
/* harmony import */ var _google_chart_covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../google-chart/covid-chart/covid-chart.component */ "./src/app/google-chart/covid-chart/covid-chart.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _http_error_http_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../http-error/http-error.component */ "./src/app/components/http-error/http-error.component.ts");
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/round.pipe */ "./src/app/pipes/round.pipe.ts");














function StoreComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoreComponent_div_0_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "color": a0 }; };
function StoreComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_0_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A0 Back to Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.redirectToMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A0 VIEW ON MAPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u00A0 CHECK IN AT THIS STORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " CHECKED IN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, StoreComponent_div_0_div_31_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " RATING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " SHOPSAFE SCORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Chart statistics represent check-in entries averaged per day. To view more about the statistics, hover over each of the most current values of the statistics below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " MASK USAGE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " SOCIAL DISTANCING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, StoreComponent_div_0_div_69_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " SERVICE SPEED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " CLEANLINESS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "app-line-chart", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " COVID-19 statistics per county are taken from the New York Times COVID-19 dataset. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "TOTAL CASES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "TOTAL DEATHS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "PERCENT AFFECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "app-covid-chart", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, ctx_r0.store.open ? "#7AC665" : "#FF5151"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.open ? "OPEN" : "CLOSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSmall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.store.rating ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 23, ctx_r0.store.rating) : "\u2014", "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 25, ctx_r0.store.score), "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Check-In Statistics for ", ctx_r0.store.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount == 0 ? "\u2014" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 27, ctx_r0.store.masks));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount == 0 ? "\u2014" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 29, ctx_r0.store.busy));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSmall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount == 0 ? "\u2014" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 31, ctx_r0.store.line));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount == 0 ? "\u2014" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 33, ctx_r0.store.hygiene));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mask", ctx_r0.maskData)("busy", ctx_r0.busyData)("line", ctx_r0.lineData)("hygiene", ctx_r0.hygieneData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("COVID-19 Statistics for ", ctx_r0.countyStats.countyName, " County");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countyStats.cases);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countyStats.deaths);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 35, ctx_r0.proportion), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("covidData", ctx_r0.covidData);
} }
function StoreComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading Store...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoreComponent_app_http_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-http-error", 43);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("httpErrorMessage", ctx_r2.httpErrorMessage);
} }
class StoreComponent {
    constructor(matDialog, apiService, route) {
        this.matDialog = matDialog;
        this.apiService = apiService;
        this.route = route;
        if (window.innerWidth > 1630) {
            this.isSmall = false;
        }
        else {
            this.isSmall = true;
        }
    }
    onResizeDown(event) {
        if (event.target.innerWidth > 1630) {
            this.isSmall = false;
            console.log("CLIENT: resize up");
        }
        else {
            this.isSmall = true;
            console.log("CLIENT: resize down");
        }
    }
    /**
     * Runs when component is loaded
     */
    ngOnInit() {
        // Defaults to API not called yet
        this.isLoaded = false;
        // Defaults to no HTTP error
        this.httpError = false;
        this.getStore();
    }
    /**
     * Calls API to get store and subscribes local variables using data returned in the
     * Observable from the HTTP response.
     */
    getStore() {
        const id = this.route.snapshot.paramMap.get('id').toString();
        this.storeId = id;
        this.apiService.getStoreById(id)
            .subscribe((res) => {
            this.store = res.store,
                this.countyStats = res.countyStats,
                this.covidData = this.countyStats.covidData,
                this.maskData = res.maskData,
                this.busyData = res.busyData,
                this.lineData = res.lineData,
                this.hygieneData = res.hygieneData;
        }, err => {
            console.log(err),
                this.httpError = true,
                this.httpErrorMessage = err;
        }, () => {
            this.initTemplate();
        });
    }
    /**
     * Initializes component by using data returned from API call.
     * Sets isLoaded boolean to true, as the function can only be called when there
     * is a successful response.
     */
    initTemplate() {
        // Sets loaded state to true
        this.isLoaded = true;
        console.log("CLIENT: API call finished");
        // Round proportion to 2 decimal places
        this.proportion = this.countyStats.cases / this.countyStats.population * 100;
        console.log("CLIENT: calculated percentage as " + this.proportion);
    }
    /**
     * Opens check in modal dialog using check in modal component.
     * Opens new check in modal on screen.
     */
    openModal() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.id = "check-in-modal";
        dialogConfig.height = "510px";
        dialogConfig.width = "600px";
        _check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_2__["CheckInModalComponent"].setParam(this.store);
        const modalDialog = this.matDialog.open(_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_2__["CheckInModalComponent"], dialogConfig);
        // Updates changes in place after modal closes
        modalDialog.afterClosed().subscribe(() => { this.getStore(); });
    }
    /**
     * Opens Google Maps link using Places ID of the store.
     */
    redirectToMap() {
        const url = 'https://www.google.com/maps/place/?q=place_id:' + this.storeId;
        window.open(url, "_blank");
    }
    /**
     * Redirects to result page (previous page).
     */
    goBack() {
        window.history.back();
    }
}
StoreComponent.ɵfac = function StoreComponent_Factory(t) { return new (t || StoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreComponent, selectors: [["app-store"]], hostBindings: function StoreComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function StoreComponent_resize_HostBindingHandler($event) { return ctx.onResizeDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 3, consts: [["id", "store", "class", "segment", 4, "ngIf"], ["class", "loading-screen", 4, "ngIf"], [3, "httpErrorMessage", 4, "ngIf"], ["id", "store", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "back-link", 3, "click"], [1, "fas", "fa-long-arrow-alt-left"], [1, "maps-button", 3, "click"], [1, "fas", "fa-map-marked-alt"], ["id", "check-in-button", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "stat-bar-wrapper"], [1, "stat-bar", "stats-wrapper"], [1, "stat-elem-quarter", "left-obj"], ["matTooltip", "The number of people who have checked into the current store.", 1, "stat-obj"], [1, "stat-elem-quarter", "center-obj"], ["matTooltip", "The current operating status of the store.", 1, "stat-obj"], [3, "ngStyle"], ["class", "break-divider", 4, "ngIf"], [1, "stat-elem-quarter", "center-obj", "left-cond"], ["matTooltip", "The Google Review rating of the score as found on Google Maps.", 1, "stat-obj"], [1, "stat-elem-quarter", "right-obj", 2, "margin-top", "-5px"], ["matTooltip", "The ShopSafe Score of the store calculated using the check-in statistics and county\n                                   COVID-19 statistics.", 1, "stat-obj"], [1, "shopsafe-score"], [1, "card"], [1, "stat-bar-secondary", "stats-wrapper"], ["matTooltip", "How strict is the store with masks? Are the customers and workers \n                              wearing masks properly? 0 indicates no to little mask policy \n                              and presence (bad), and 10 indicates excellent mask usage (good)", 1, "stat-obj"], ["matTooltip", "How crowded is it inside the store? Essentially, is there \n                              enough space to social distance, maintain 6 feet? 0 indicates \n                              very busy (bad), and 10 indicates not busy at all (good)", 1, "stat-obj"], ["matTooltip", "Is there a line to get into the store from the outside? Are \n                              there lines inside the store? How long was the wait? 0 indicates \n                              long waits (bad), and 10 indicates minimal waits (good)", 1, "stat-obj"], [1, "stat-elem-quarter", "right-obj"], ["matTooltip", "How clean is the store overall? Are the shared carts, \n                              baskets, and surfaces sanitized? 0 indicates poor hygiene \n                              (bad), and 10 indicates good hygiene (good)", 1, "stat-obj"], ["id", "line-chart", 1, "chart"], [3, "mask", "busy", "line", "hygiene"], [1, "stat-bar-secondary"], [1, "stat-elem"], [1, "stat-obj"], [1, "stat-elem", "center-obj", 2, "text-align", "center"], [1, "stat-elem", 2, "text-align", "right", "margin-top", "-5px"], ["id", "covid-chart", 1, "chart"], [3, "covidData"], [1, "break-divider"], [1, "loading-screen"], [3, "httpErrorMessage"]], template: function StoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreComponent_div_0_Template, 113, 39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoreComponent_app_http_error_2_Template, 1, 1, "app-http-error", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded && !ctx.httpError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded && !ctx.httpError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.httpError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _google_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__["LineChartComponent"], _google_chart_covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_8__["CovidChartComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _http_error_http_error_component__WEBPACK_IMPORTED_MODULE_10__["HttpErrorComponent"]], pipes: [_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_11__["RoundPipe"]], styles: ["@media (max-width: 1630px) {\n  #store[_ngcontent-%COMP%]   .stat-bar-secondary.stats-wrapper[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-bar.stats-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 150px !important;\n    background: rgba(104, 187, 207, 0.06);\n    border-radius: 8px;\n    padding: 33px;\n  }\n\n  #store[_ngcontent-%COMP%]   .stat-elem-quarter[_ngcontent-%COMP%] {\n    float: left;\n    display: flex;\n    flex-wrap: wrap;\n    width: 50% !important;\n  }\n\n  #store[_ngcontent-%COMP%]   .stat-elem-quarter.left-obj[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-elem-quarter.left-obj[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n\n  #store[_ngcontent-%COMP%]   .stat-elem-quarter.center-obj[_ngcontent-%COMP%] {\n    text-align: right !important;\n  }\n\n  #store[_ngcontent-%COMP%]   .stat-elem-quarter.center-obj.left-cond[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n}\n\n#store[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    clear: both;\n    text-transform: uppercase;\n}\n\n#store[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    text-align: center;\n}\n\n#store[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    float: left !important;\n}\n\n#store[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 87px;\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 8px;\n    padding: 33px;\n}\n\n#store[_ngcontent-%COMP%]   .stat-bar-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 87px;\n    background: rgba(104, 187, 207, 0.06);\n    border-radius: 8px;\n    padding: 33px;\n}\n\n#store[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#store[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n    line-height: 41px;\n}\n\n#store[_ngcontent-%COMP%]   .markers[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-elem-quarter[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-bar-secondary[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    display: inline;\n}\n\n#store[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%] {\n    float: left;\n    display: flex;\n    width: 33.3%;\n}\n\n#store[_ngcontent-%COMP%]   .stat-elem-quarter[_ngcontent-%COMP%] {\n  float: left;\n  display: flex;\n  width: 25%;\n}\n\n#store[_ngcontent-%COMP%]   .shopsafe-score[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 30px;\n    display: flex;\n    color: #FF8756;\n}\n\n#store[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 30px;\n    display: flex;\n    color: #FF8756;\n    padding-left: 10px;\n}\n\n#store[_ngcontent-%COMP%]   .stat-obj[_ngcontent-%COMP%]{\n    background: rgba(104, 187, 207, 0.1);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #68BBCF;\n    margin-right: 15px;\n}\n\n#store[_ngcontent-%COMP%]   .stat-obj[_ngcontent-%COMP%] {\n    cursor: auto;\n}\n\n#store[_ngcontent-%COMP%]   #check-in-button[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .maps-button[_ngcontent-%COMP%] {\n    background: #68BBCF;\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #EEEEEE;\n    margin-right: 15px;\n    border: none;\n    font-weight: 600;\n    font-size: 15px;\n    margin-top: 20px;\n    cursor: pointer;\n}\n\n#store[_ngcontent-%COMP%]   #check-in-button[_ngcontent-%COMP%]:hover, #store[_ngcontent-%COMP%]   .maps-button[_ngcontent-%COMP%]:hover {\n    background: rgba(104, 187, 207, 0.3);\n    color: #68BBCF;\n}\n\n#store[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 25px 40px 25px;\n  box-shadow: 0 0 12px 3px #F6F6F6;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 40px;\n}\n\n#store[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n\n.left-obj[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.right-obj[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.center-obj[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS9zdG9yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcmUvc3RvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxNjMwcHgpIHtcbiAgI3N0b3JlIC5zdGF0LWJhci1zZWNvbmRhcnkuc3RhdHMtd3JhcHBlciwgI3N0b3JlIC5zdGF0LWJhci5zdGF0cy13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDQsIDE4NywgMjA3LCAwLjA2KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMzNweDtcbiAgfVxuXG4gICNzdG9yZSAuc3RhdC1lbGVtLXF1YXJ0ZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gICNzdG9yZSAuc3RhdC1lbGVtLXF1YXJ0ZXIubGVmdC1vYmosICNzdG9yZSAuc3RhdC1lbGVtLXF1YXJ0ZXIubGVmdC1vYmoge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gICNzdG9yZSAuc3RhdC1lbGVtLXF1YXJ0ZXIuY2VudGVyLW9iaiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gICNzdG9yZSAuc3RhdC1lbGVtLXF1YXJ0ZXIuY2VudGVyLW9iai5sZWZ0LWNvbmQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4jc3RvcmUgLmhlYWRpbmctdGV4dCBoMSB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3N0b3JlIC5oZWFkaW5nLXRleHQge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3N0b3JlIC5iYWNrLWxpbmsge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuI3N0b3JlIC5zdGF0LWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4N3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDMzcHg7XG59XG5cbiNzdG9yZSAuc3RhdC1iYXItc2Vjb25kYXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg3cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDQsIDE4NywgMjA3LCAwLjA2KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMzNweDtcbn1cblxuI3N0b3JlIGgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jc3RvcmUgLnN1YnRleHQge1xuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xufVxuXG4jc3RvcmUgLm1hcmtlcnMgKiwgI3N0b3JlIC5zdGF0LWVsZW0gKiwgI3N0b3JlIC5zdGF0LWVsZW0tcXVhcnRlciAqLCAjc3RvcmUgLnN0YXQtYmFyICosICNzdG9yZSAuc3RhdC1iYXItc2Vjb25kYXJ5ICoge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4jc3RvcmUgLnN0YXQtZWxlbSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzMuMyU7XG59XG5cbiNzdG9yZSAuc3RhdC1lbGVtLXF1YXJ0ZXIge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuI3N0b3JlIC5zaG9wc2FmZS1zY29yZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjRkY4NzU2O1xufVxuXG4jc3RvcmUgLnJhdGluZyB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjRkY4NzU2O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuI3N0b3JlIC5zdGF0LW9iantcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNCwgMTg3LCAyMDcsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xuICAgIGNvbG9yOiAjNjhCQkNGO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuI3N0b3JlIC5zdGF0LW9iaiB7XG4gICAgY3Vyc29yOiBhdXRvO1xufVxuXG4jc3RvcmUgI2NoZWNrLWluLWJ1dHRvbiwgI3N0b3JlIC5tYXBzLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzY4QkJDRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG4gICAgY29sb3I6ICNFRUVFRUU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3N0b3JlICNjaGVjay1pbi1idXR0b246aG92ZXIsICNzdG9yZSAubWFwcy1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxODcsIDIwNywgMC4zKTtcbiAgICBjb2xvcjogIzY4QkJDRjtcbn1cblxuI3N0b3JlIC5jYXJkIHtcbiAgcGFkZGluZzogMjVweCA0MHB4IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDNweCAjRjZGNkY2O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbiNzdG9yZSAuY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG59XG5cbi5sZWZ0LW9iaiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yaWdodC1vYmoge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRlci1vYmoge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-store',
                templateUrl: './store.component.html',
                styleUrls: ['./store.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { onResizeDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/google-chart/covid-chart/covid-chart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/google-chart/covid-chart/covid-chart.component.ts ***!
  \*******************************************************************/
/*! exports provided: CovidChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidChartComponent", function() { return CovidChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/google-chart.service */ "./src/app/google-chart/service/google-chart.service.ts");



class CovidChartComponent {
    constructor(gChartService) {
        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load('current', { 'packages': ['corechart', 'table'], callback: this.drawChart.bind(this) });
    }
    ngOnInit() { }
    /**
     * Called when parameters are changed by the parent component.
     */
    ngOnChanges() {
        // Updates chart with new parent input values
        this.gLib.charts.load('current', { 'packages': ['corechart', 'table'], callback: this.drawChart.bind(this) });
    }
    // TODO: custom colorization with options
    /**
     * Draws line chart and renders within template.
     */
    drawChart() {
        let data = new this.gLib.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Cases');
        console.log(this.covidData);
        for (let i in this.covidData) {
            data.addRow([new Date(this.covidData[i].date), this.covidData[i].value]);
        }
        const options = {
            focusTarget: "category",
            height: 600,
            hAxis: { textPosition: 'none' },
            pointSize: 5
        };
        let chart = new this.gLib.visualization.LineChart(document.getElementById('covid-chart'));
        chart.draw(data, options);
        console.log("CLIENT: covid map has been drawn");
    }
}
CovidChartComponent.ɵfac = function CovidChartComponent_Factory(t) { return new (t || CovidChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"])); };
CovidChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CovidChartComponent, selectors: [["app-covid-chart"]], inputs: { covidData: "covidData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function CovidChartComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1jaGFydC9jb3ZpZC1jaGFydC9jb3ZpZC1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-covid-chart',
                templateUrl: './covid-chart.component.html',
                styleUrls: ['./covid-chart.component.css']
            }]
    }], function () { return [{ type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"] }]; }, { covidData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/google-chart/google-chart.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/google-chart/google-chart.module.ts ***!
  \*****************************************************/
/*! exports provided: GoogleChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartModule", function() { return GoogleChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/service.module */ "./src/app/google-chart/service/service.module.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/google-chart/line-chart/line-chart.component.ts");
/* harmony import */ var _covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./covid-chart/covid-chart.component */ "./src/app/google-chart/covid-chart/covid-chart.component.ts");






class GoogleChartModule {
}
GoogleChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoogleChartModule });
GoogleChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoogleChartModule_Factory(t) { return new (t || GoogleChartModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoogleChartModule, { declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"],
        _covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_4__["CovidChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]], exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"],
        _covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_4__["CovidChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"],
                    _covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_4__["CovidChartComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]
                ],
                exports: [
                    _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"],
                    _covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_4__["CovidChartComponent"],
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/google-chart/line-chart/line-chart.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/google-chart/line-chart/line-chart.component.ts ***!
  \*****************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/google-chart.service */ "./src/app/google-chart/service/google-chart.service.ts");



class LineChartComponent {
    constructor(gChartService) {
        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load('current', { 'packages': ['corechart', 'table'], callback: this.drawChart.bind(this) });
    }
    ngOnInit() { }
    /**
    * Called when parameters are changed by the parent component.
    */
    ngOnChanges() {
        // Updates chart with new parent input values
        this.gLib.charts.load('current', { 'packages': ['corechart', 'table'], callback: this.drawChart.bind(this) });
    }
    // TODO: custom colorization with options
    /**
     * Draws COVID-19 statistics line chart and renders within template.
     * Assumes that all input arrays are the same length
     */
    drawChart() {
        let data = new this.gLib.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Mask Usage');
        data.addColumn('number', 'Social Distancing');
        data.addColumn('number', 'Service Speed');
        data.addColumn('number', 'Cleanliness');
        for (let i in this.mask) {
            data.addRow([new Date(this.mask[i].date), this.mask[i].value, this.busy[i].value, this.line[i].value, this.hygiene[i].value]);
        }
        const options = {
            focusTarget: "category",
            height: 600,
            hAxis: { textPosition: 'none' },
            pointSize: 5,
            vAxis: {
                ticks: [0, 2, 4, 6, 8, 10]
            }
        };
        let chart = new this.gLib.visualization.LineChart(document.getElementById('line-chart'));
        chart.draw(data, options);
        console.log("CLIENT: check-in map has been drawn");
    }
}
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"])); };
LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineChartComponent, selectors: [["app-line-chart"]], inputs: { mask: "mask", busy: "busy", line: "line", hygiene: "hygiene" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function LineChartComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1jaGFydC9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-line-chart',
                templateUrl: './line-chart.component.html',
                styleUrls: ['./line-chart.component.css']
            }]
    }], function () { return [{ type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"] }]; }, { mask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], busy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], line: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hygiene: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/google-chart/service/google-chart.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/google-chart/service/google-chart.service.ts ***!
  \**************************************************************/
/*! exports provided: GoogleChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartService", function() { return GoogleChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.module */ "./src/app/google-chart/service/service.module.ts");



class GoogleChartService {
    constructor() {
        this.google = google;
    }
    getGoogle() {
        return this.google;
    }
}
GoogleChartService.ɵfac = function GoogleChartService_Factory(t) { return new (t || GoogleChartService)(); };
GoogleChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoogleChartService, factory: GoogleChartService.ɵfac, providedIn: _service_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: _service_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/google-chart/service/service.module.ts":
/*!********************************************************!*\
  !*** ./src/app/google-chart/service/service.module.ts ***!
  \********************************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



// Contains Angular service utilized to access the Google Charts library
class ServiceModule {
}
ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceModule });
ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceModule_Factory(t) { return new (t || ServiceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/round.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/round.pipe.ts ***!
  \*************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RoundPipe {
    transform(input) {
        return Math.round(input * 100) / 100;
    }
}
RoundPipe.ɵfac = function RoundPipe_Factory(t) { return new (t || RoundPipe)(); };
RoundPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "round", type: RoundPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'round' }]
    }], null, null); })();


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
const environment = {
    production: false,
    // URL of development API
    apiUrl: 'http://localhost:8080'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/caroljli/step32-2020/shopsafe-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map