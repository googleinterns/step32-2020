function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api/api.service.ts":
  /*!************************************!*\
    !*** ./src/app/api/api.service.ts ***!
    \************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // Provides HTTP client used to make HTTP requests within the Angular application
    // Returns Observables (can be synchronous), not Promises (always asynchronous)


    var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }
      /**
       * Creates new check-in for specific store ID and sends to API as POST request
       * @param storeId ID of the store that the check-in occurs for
       * @returns Observable
       */


      _createClass(ApiService, [{
        key: "createCheckIn",
        value: function createCheckIn(storeId, busy, line, hygiene, mask) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          params = params.set('storeId', storeId.toString()).set('busy', busy.toString()).set('line', line.toString()).set('hygiene', hygiene.toString()).set('mask', mask.toString());
          return this.http.post(API_URL + '/checkin?' + params.toString(), {}, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return console.log("API: check in from " + storeId);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message || error);
          }));
        }
        /**
         * Gets all nearby stores from backend via GET request
         * @param location inputted by user
         * @returns result as observable
         */

      }, {
        key: "getNearbyStores",
        value: function getNearbyStores(location) {
          var url = API_URL + '/stores?location=' + location; // const url = API_URL + '/stores';

          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return console.log("API: fetch nearby stores for location " + location);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.status + " " + error.statusText || error);
          }));
        }
        /**
         * Gets current store by ID, requires mapping because JSON doesn't match
         * interface typing
         * @param id ID of the store to fetch store from
         * @returns store of given ID as observable
         */

      }, {
        key: "getStoreById",
        value: function getStoreById(id) {
          var url = API_URL + '/store?id=' + id; // const url = API_URL + '/store';

          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return console.log('API: fetched store id ' + id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.status + " " + error.statusText || error);
          }));
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/result/result.component */
    "./src/app/components/result/result.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_store_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/store/store.component */
    "./src/app/components/store/store.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_feedback_forms_feedback_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/feedback-forms/feedback-forms.component */
    "./src/app/components/feedback-forms/feedback-forms.component.ts");

    var routes = [{
      path: '',
      component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    }, {
      path: 'result/:location',
      component: _components_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"]
    }, {
      path: 'store/:id',
      component: _components_store_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
    }, {
      path: "feedback",
      component: _components_feedback_forms_feedback_forms_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackFormsComponent"]
    }, {
      path: "**",
      component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/google-maps */
    "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./google-chart/google-chart.module */
    "./src/app/google-chart/google-chart.module.ts");
    /* harmony import */


    var _components_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/app.component */
    "./src/app/components/app.component.ts");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/result/result.component */
    "./src/app/components/result/result.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_store_store_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/store/store.component */
    "./src/app/components/store/store.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/check-in-modal/check-in-modal.component */
    "./src/app/components/check-in-modal/check-in-modal.component.ts");
    /* harmony import */


    var _components_feedback_forms_feedback_forms_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/feedback-forms/feedback-forms.component */
    "./src/app/components/feedback-forms/feedback-forms.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pipes/round.pipe */
    "./src/app/pipes/round.pipe.ts");
    /* harmony import */


    var _components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/http-error/http-error.component */
    "./src/app/components/http-error/http-error.component.ts");
    /* harmony import */


    var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/search-bar/search-bar.component */
    "./src/app/components/search-bar/search-bar.component.ts"); // Custom components
    // Material Angular components
    // Services
    // Pipes


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_api_api_service__WEBPACK_IMPORTED_MODULE_23__["ApiService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_7__["GoogleChartModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"], _components_result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"], _components_store_store_component__WEBPACK_IMPORTED_MODULE_12__["StoreComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_15__["CheckInModalComponent"], _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_24__["RoundPipe"], _components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_25__["HttpErrorComponent"], _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_26__["SearchBarComponent"], _components_feedback_forms_feedback_forms_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackFormsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_7__["GoogleChartModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"], _components_result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"], _components_store_store_component__WEBPACK_IMPORTED_MODULE_12__["StoreComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_15__["CheckInModalComponent"], _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_24__["RoundPipe"], _components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_25__["HttpErrorComponent"], _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_26__["SearchBarComponent"], _components_feedback_forms_feedback_forms_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackFormsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_7__["GoogleChartModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]],
          providers: [_api_api_service__WEBPACK_IMPORTED_MODULE_23__["ApiService"]],
          bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
          // Set of components to compile when NgModule is defined to be
          // dynamically loaded into view
          entryComponents: [_components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_15__["CheckInModalComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 49,
      vars: 0,
      consts: [["id", "about", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "section"], [1, "box"], ["href", "mailto:gabrielstewart@google.com"], ["href", "mailto:raulpalomo@google.com"], ["href", "mailto:caroljli@google.com"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: ["#about[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  text-align: center;\n}\n\n#about[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n#about[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: rgb(255, 135, 86, 0.7);\n}\n\n#about[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dCAuaGVhZGluZy10ZXh0IHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Fib3V0IC5ib3ggcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbiNhYm91dCAuYm94IHA6aG92ZXIge1xuICBjb2xvcjogcmdiKDI1NSwgMTM1LCA4NiwgMC43KTtcbn1cblxuI2Fib3V0IC5zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/app.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/components/app.component.ts ***!
    \*********************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppComponentsAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'shopsafe-frontend';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            if (location.protocol === 'http:') {
              window.location.href = location.href.replace('http', 'https');
            }
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/check-in-modal/check-in-modal.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/check-in-modal/check-in-modal.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CheckInModalComponent */

  /***/
  function srcAppComponentsCheckInModalCheckInModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckInModalComponent", function () {
      return CheckInModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // @Injectable({
    //   providedIn: 'root'
    // })


    var CheckInModalComponent = /*#__PURE__*/function () {
      function CheckInModalComponent(apiService, dialogRef, route) {
        _classCallCheck(this, CheckInModalComponent);

        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.route = route;
        this.busy = '';
        this.line = '';
        this.hygiene = '';
        this.mask = '';
      }

      _createClass(CheckInModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Sets ID variable of check in modal based on store id.
         * @param id of the current store
         */

      }, {
        key: "checkIn",

        /**
         * Sends check-in user data to API
         * @param id ID of store that check-in is for
         * @param busy user input busy score
         * @param line user input line score
         * @param hygiene user input hygiene score
         * @param mask user input mask score
         */
        value: function checkIn() {
          console.log("CLIENT: check-in api call");
          this.apiService.createCheckIn(CheckInModalComponent.storeId, Number(this.busy), Number(this.line), Number(this.hygiene), Number(this.mask)).subscribe();
          this.dialogRef.close();
        }
      }], [{
        key: "setId",
        value: function setId(id) {
          this.storeId = id;
          console.log("CLIENT: store id is " + this.storeId);
        }
      }]);

      return CheckInModalComponent;
    }();

    CheckInModalComponent.ɵfac = function CheckInModalComponent_Factory(t) {
      return new (t || CheckInModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    CheckInModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckInModalComponent,
      selectors: [["app-check-in-modal"]],
      decls: 48,
      vars: 4,
      consts: [["id", "check-in-modal"], [1, "title-text"], [1, "modal-content"], [1, "option"], [1, "left-text"], ["matTooltip", "How crowded is it inside the store? Essentially, is there \n                            enough space to social distance, maintain 6 feet? 1 indicates \n                            very busy (bad), and 10 indicates not busy at all (good)"], [1, "far", "fa-question-circle"], [1, "right-text", "grey-text"], [1, "far", "fa-frown"], ["min", "0", "max", "10", "step", "1", "thumbLabel", "", "tickInterval", "1", 3, "ngModel", "ngModelChange"], [1, "far", "fa-smile"], ["matTooltip", "How long is the line to get into the store from the outside?\n                            1 indicates very long (bad), and 10 indicates not long at all (good)"], ["matTooltip", "How clean is the store overall? Are the shared carts, \n                            baskets, and surfaces sanitized? 1 indicates poor hygiene \n                            (bad), and 10 indicates good hygiene (good)"], ["matTooltip", "How strict is the store with masks? Are the customers and workers \n                            wearing masks properly? 1 indicates no to little mask policy \n                            and presence (bad), and 10 indicates excellent mask usage (good)"], ["id", "submit-check-in-button", 3, "click"]],
      template: function CheckInModalComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Busy \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-slider", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_14_listener($event) {
            return ctx.busy = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Line \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-slider", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_24_listener($event) {
            return ctx.line = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Hygiene \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-slider", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_34_listener($event) {
            return ctx.hygiene = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Mask \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-slider", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_44_listener($event) {
            return ctx.mask = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInModalComponent_Template_button_click_46_listener() {
            return ctx.checkIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "CHECK IN AT THIS STORE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.busy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.line);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hygiene);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mask);
        }
      },
      directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: ["#check-in-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-align: center;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   h2.title-text[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n    margin-top: 11px;\n    width: 220px;\n    color: rgba(196, 196, 196, 0.2);\n    text-align: right;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n    white-space: pre-line; \n}\n\n#check-in-modal[_ngcontent-%COMP%]   .left-text[_ngcontent-%COMP%] {\n    width: 40%;\n    clear: left;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   #submit-check-in-button[_ngcontent-%COMP%] {\n    background: #68BBCF;\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #EEEEEE;\n    margin-right: 15px;\n    border: none;\n    font-weight: 600;\n    width: 100%;\n    font-size: 15px;\n    margin-top: 20px;\n    cursor: pointer;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   #submit-check-in-button[_ngcontent-%COMP%]:hover {\n    background: rgba(104, 187, 207, 0.3);\n    color: #68BBCF;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   .mat-tooltip[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVjay1pbi1tb2RhbC9jaGVjay1pbi1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGVjay1pbi1tb2RhbC9jaGVjay1pbi1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoZWNrLWluLW1vZGFsIGgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jY2hlY2staW4tbW9kYWwgcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NoZWNrLWluLW1vZGFsIGgyLnRpdGxlLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NoZWNrLWluLW1vZGFsIG1hdC1zbGlkZXIge1xuICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMik7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNjaGVjay1pbi1tb2RhbCAub3B0aW9uIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7IFxufVxuXG4jY2hlY2staW4tbW9kYWwgLmxlZnQtdGV4dCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBjbGVhcjogbGVmdDtcbn1cblxuI2NoZWNrLWluLW1vZGFsICNzdWJtaXQtY2hlY2staW4tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjNjhCQkNGO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcbiAgICBjb2xvcjogI0VFRUVFRTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY2hlY2staW4tbW9kYWwgI3N1Ym1pdC1jaGVjay1pbi1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxODcsIDIwNywgMC4zKTtcbiAgICBjb2xvcjogIzY4QkJDRjtcbn1cblxuI2NoZWNrLWluLW1vZGFsIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckInModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-check-in-modal',
          templateUrl: './check-in-modal.component.html',
          styleUrls: ['./check-in-modal.component.css']
        }]
      }], function () {
        return [{
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/feedback-forms/feedback-forms.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/feedback-forms/feedback-forms.component.ts ***!
    \***********************************************************************/

  /*! exports provided: FeedbackFormsComponent */

  /***/
  function srcAppComponentsFeedbackFormsFeedbackFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackFormsComponent", function () {
      return FeedbackFormsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FeedbackFormsComponent = /*#__PURE__*/function () {
      function FeedbackFormsComponent() {
        _classCallCheck(this, FeedbackFormsComponent);
      }

      _createClass(FeedbackFormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeedbackFormsComponent;
    }();

    FeedbackFormsComponent.ɵfac = function FeedbackFormsComponent_Factory(t) {
      return new (t || FeedbackFormsComponent)();
    };

    FeedbackFormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedbackFormsComponent,
      selectors: [["app-feedback-forms"]],
      decls: 25,
      vars: 0,
      consts: [["id", "title", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "section"], [1, "box"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLSeagc76SWGCG8LTBVM_ZrWZAjAoGeH2fjI2fWR15o9Z-x7J-Q/viewform?usp=sf_link"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLScJviEPTKH7Z9aITFulbhgrAc5v3GGlW24ttIoHU-2pe7Fz4g/viewform?usp=sf_link"]],
      template: function FeedbackFormsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: ["#title[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    text-align: center;\n}\n\n#title[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: justify;\n}\n\n#title[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n    color: rgb(255, 135, 86, 0.7);\n}\n\n#title[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n    padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWVkYmFjay1mb3Jtcy9mZWVkYmFjay1mb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZGJhY2stZm9ybXMvZmVlZGJhY2stZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZSAuaGVhZGluZy10ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0aXRsZSAuYm94IHAge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbiN0aXRsZSAuYm94IHA6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxMzUsIDg2LCAwLjcpO1xufVxuXG4jdGl0bGUgLnNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackFormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feedback-forms',
          templateUrl: './feedback-forms.component.html',
          styleUrls: ['./feedback-forms.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1() {
      return ["/about"];
    };

    var _c2 = function _c2() {
      return ["/feedback"];
    };

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 15,
      vars: 6,
      consts: [["id", "footer"], [1, "bottom-nav"], [3, "routerLink"], [1, "fas", "fa-bug"], [1, "copyright"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Made with \uD83D\uDE37 by Raul Palomo, Gabriel Stewart, Carol Li ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["#footer[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 15px;\n    padding-bottom: 47px;\n    position: fixed;\n    left: 0px;\n    bottom: 0px;\n    height: 30px;\n    width: 100%;\n    background: rgba(104, 187, 207, 0.1);\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    margin-left: 20px;\n    padding-bottom: 13px;\n    overflow: hidden;\n    width: 100%;\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    bottom: 0;\n    padding-bottom: 13px;\n    position: fixed;\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-weight: 500;\n    display: inline;\n    padding-right: 20px;\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: rgba(104, 187, 207);\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #FF8756;\n    background: rgb(255,135,86, 0.1);\n    padding: 2px 5px 2px;\n    border-radius: 3px;\n}\n\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    float: right;\n    padding-top: 12px;\n    margin-right: 25px;\n    color: rgba(104, 187, 207);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQ3cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDQsIDE4NywgMjA3LCAwLjEpO1xufVxuXG4jZm9vdGVyIC5ib3R0b20tbmF2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2Zvb3RlciAuYm90dG9tLW5hdiB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbiNmb290ZXIgLmJvdHRvbS1uYXYgbGkge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbiNmb290ZXIgLmJvdHRvbS1uYXYgYSB7XG4gICAgY29sb3I6IHJnYmEoMTA0LCAxODcsIDIwNyk7XG59XG5cbiNmb290ZXIgLmJvdHRvbS1uYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICNGRjg3NTY7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwxMzUsODYsIDAuMSk7XG4gICAgcGFkZGluZzogMnB4IDVweCAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4jZm9vdGVyIC5jb3B5cmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgY29sb3I6IHJnYmEoMTA0LCAxODcsIDIwNyk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/http-error/http-error.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/http-error/http-error.component.ts ***!
    \***************************************************************/

  /*! exports provided: HttpErrorComponent */

  /***/
  function srcAppComponentsHttpErrorHttpErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorComponent", function () {
      return HttpErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HttpErrorComponent = /*#__PURE__*/function () {
      function HttpErrorComponent() {
        _classCallCheck(this, HttpErrorComponent);
      }

      _createClass(HttpErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HttpErrorComponent;
    }();

    HttpErrorComponent.ɵfac = function HttpErrorComponent_Factory(t) {
      return new (t || HttpErrorComponent)();
    };

    HttpErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HttpErrorComponent,
      selectors: [["app-http-error"]],
      inputs: {
        httpErrorMessage: "httpErrorMessage"
      },
      decls: 12,
      vars: 1,
      consts: [["id", "http-error", 1, "segment"], [1, "segment-text"], ["href", "/"], [1, "error-wrapper"]],
      template: function HttpErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.httpErrorMessage);
        }
      },
      styles: ["#http-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 36px;\n}\n\n#http-error[_ngcontent-%COMP%]   .error-wrapper[_ngcontent-%COMP%] {\n  padding: 15px 30px 15px;\n  background: rgba(0, 0, 0, 0.03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9odHRwLWVycm9yL2h0dHAtZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9odHRwLWVycm9yL2h0dHAtZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNodHRwLWVycm9yIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbn1cblxuI2h0dHAtZXJyb3IgLmVycm9yLXdyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-http-error',
          templateUrl: './http-error.component.html',
          styleUrls: ['./http-error.component.css']
        }]
      }], function () {
        return [];
      }, {
        httpErrorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/landing/landing.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/landing/landing.component.ts ***!
    \*********************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppComponentsLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../search-bar/search-bar.component */
    "./src/app/components/search-bar/search-bar.component.ts");

    var _c0 = function _c0() {
      return ["/about"];
    };

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent(router, zone) {
        _classCallCheck(this, LandingComponent);

        this.router = router;
        this.zone = zone;
        this.location = '';
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getNearbyStores",
        value: function getNearbyStores() {
          this.router.navigate(['/result', this.location]);
          console.log("CLIENT: redirecting to results");
        }
        /**
         * Fetches address from search bar autocomplete by parsing returned
         * place array for 'formatted_address' value
         * @param place array emitted from setAddress event from search bar component
         */

      }, {
        key: "getAddress",
        value: function getAddress(place) {
          var _this = this;

          this.location = place['formatted_address'];
          this.zone.run(function () {
            return _this.getNearbyStores();
          });
        }
        /**
         * Fetches address from geolocation
         */

      }, {
        key: "getUserLatLng",
        value: function getUserLatLng() {
          var _this2 = this;

          console.log("getting user location");
          navigator.geolocation.getCurrentPosition(function (position) {
            var stringLocation = position.coords.latitude.toString() + ',' + position.coords.longitude.toString();

            _this2.zone.run(function () {
              return _this2.location = stringLocation;
            });

            _this2.getNearbyStores();
          }, function (positionError) {
            console.log(positionError);
          });
        }
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 15,
      vars: 2,
      consts: [["id", "landing", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [3, "routerLink"], [1, "fas", "fa-long-arrow-alt-right"], [1, "user-input"], [1, "loc-button", 3, "click"], [1, "fas", "fa-map-marked-alt"], [3, "setAddress"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ShopSafe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Information tool for safe, simple shopping during COVID-19.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Learn more about this tool \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_12_listener() {
            return ctx.getUserLatLng();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-search-bar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setAddress", function LandingComponent_Template_app_search_bar_setAddress_14_listener($event) {
            return ctx.getAddress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__["SearchBarComponent"]],
      styles: ["#landing[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-top: 100px;\n    text-align: center;\n}\n\n#landing[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#landing[_ngcontent-%COMP%]   .loc-button[_ngcontent-%COMP%] {\n    \n    width: auto;\n    margin-right: 5px;\n    padding: 14px 14px 17px 14px;\n    float: left;\n    display: flex;\n    background-color: #68bbcf;\n    color: white;\n    border-radius: 8px;\n    cursor: pointer;\n\n}\n\n#landing[_ngcontent-%COMP%]   .loc-button[_ngcontent-%COMP%]:hover {\n    \n    background-color: orange;\n    margin-left: 2.5px;\n    margin-right: 2.5px;\n    transform: scale(1.07);\n\n}\n\n#landing[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n    float: left;\n    padding-top: 30px;\n    display: flex;\n    width: 60%;\n    margin-bottom: 10px;\n}\n\n#landing[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    padding: 12px 13px 10px;\n    position: absolute;\n    color: rgba(196, 196, 196);\n}\n\n#landing[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 50px 15px;\n    outline: none;\n    border-radius: 8px;\n    background: rgba(0, 0, 0, 0.03);\n    border: none;\n    font-weight: 500;\n}\n\n#landing[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    width: 100%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    overflow: hidden;\n}\n\n#landing[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n}\n\n#landing[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    padding-top: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xhbmRpbmcgLmhlYWRpbmctdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2xhbmRpbmcgLmhlYWRpbmctdGV4dCBhIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jbGFuZGluZyAubG9jLWJ1dHRvbiB7XG4gICAgXG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZzogMTRweCAxNHB4IDE3cHggMTRweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OGJiY2Y7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cblxuI2xhbmRpbmcgLmxvYy1idXR0b246aG92ZXIge1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBtYXJnaW4tbGVmdDogMi41cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xuXG59XG5cbiNsYW5kaW5nIC5pbnB1dC1jb250YWluZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jbGFuZGluZyAuaW5wdXQtY29udGFpbmVyIC5zZWFyY2gtaWNvbiB7XG4gICAgcGFkZGluZzogMTJweCAxM3B4IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiByZ2JhKDE5NiwgMTk2LCAxOTYpO1xufVxuXG4jbGFuZGluZyAuaW5wdXQtZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHggNTBweCAxNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNsYW5kaW5nIC51c2VyLWlucHV0IHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNsYW5kaW5nIC5pbnB1dC1jb250YWluZXIgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jbGFuZGluZyBmb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogMzVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 9,
      vars: 0,
      consts: [["id", "page-not-found", 1, "segment"], [1, "segment-text"], ["href", "/"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: ["#page-not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlLW5vdC1mb3VuZCBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/result/result.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/result/result.component.ts ***!
    \*******************************************************/

  /*! exports provided: ResultComponent */

  /***/
  function srcAppComponentsResultResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
      return ResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/google-maps */
    "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _http_error_http_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../http-error/http-error.component */
    "./src/app/components/http-error/http-error.component.ts");
    /* harmony import */


    var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../pipes/round.pipe */
    "./src/app/pipes/round.pipe.ts");

    function ResultComponent_div_0_map_marker_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "map-marker", 19);
      }

      if (rf & 2) {
        var marker_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", marker_r6.position)("title", marker_r6.title)("options", marker_r6.options);
      }
    }

    function ResultComponent_div_0_mat_option_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ResultComponent_div_0_mat_option_28_Template_mat_option_valueChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.currSort = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var method_r7 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.currSort);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", method_r7, " ");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/store", a1];
    };

    function ResultComponent_div_0_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_div_0_div_29_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var store_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.recenterMap(store_r10.latitude, store_r10.longitude);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 5/10 \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var store_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, store_r10.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", store_r10.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](store_r10.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 5, store_r10.distance), " mi");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 7, store_r10.score), "/10");
      }
    }

    function ResultComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_div_0_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.recenterMap(ctx_r13.result.latLng.latitude, ctx_r13.result.latLng.longitude);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \xA0 RECENTER MAP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "google-map", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResultComponent_div_0_map_marker_13_Template, 1, 3, "map-marker", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Local Grocery Stores");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Click on a store name to view store statistics, click on the \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \xA0 to view on map ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sort Results By");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ResultComponent_div_0_mat_option_28_Template, 2, 2, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ResultComponent_div_0_div_29_Template, 26, 11, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 14)("center", ctx_r0.center)("options", ctx_r0.options);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.markers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sortingMethods);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.result.stores);
      }
    }

    function ResultComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fetching Results...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResultComponent_app_http_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-http-error", 34);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("httpErrorMessage", ctx_r2.httpErrorMessage);
      }
    }

    var ResultComponent = /*#__PURE__*/function () {
      function ResultComponent(apiService, route) {
        _classCallCheck(this, ResultComponent);

        this.apiService = apiService;
        this.route = route;
        this.markers = []; // Array of store markers rendered in Google Map.

        this.styles = [{
          featureType: "administrative",
          elementType: "geometry",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "poi",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "transit",
          stylers: [{
            visibility: "off"
          }]
        }]; // Custom map styling.

        this.options = {
          disableDefaultUI: true,
          styles: this.styles
        }; // Options for Google Map rendered in template.

        this.sortingMethods = ['Sort by ShopSafe Score', 'Sort by Google Review', 'Sort by Distance']; // Init sorting methods.
      }

      _createClass(ResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoaded = false; // Defaults to API not called yet

          this.httpError = false; // Defaults to no HTTP error

          this.location = this.route.snapshot.paramMap.get('location').toString();
          this.getResult();
        }
        /**
         * Calls API to get result and subscribes local variables using data returned
         * in the Observable from the HTTP response.
         */

      }, {
        key: "getResult",
        value: function getResult() {
          var _this3 = this;

          console.log('CLIENT: results api call at ' + this.location);
          this.apiService.getNearbyStores(this.location).subscribe(function (data) {
            return _this3.result = {
              stores: data.stores,
              latLng: data.latLng
            };
          }, function (err) {
            console.log(err), _this3.httpError = true, _this3.httpErrorMessage = err;
          }, function () {
            _this3.initTemplate();
          });
        }
        /**
         * Initializes component by using data returned from API call.
         * Sets isLoaded boolean to true, as the function can only be called when there
         * is a successful response.
         */

      }, {
        key: "initTemplate",
        value: function initTemplate() {
          // Sets loaded state to true
          this.isLoaded = true;
          console.log("CLIENT: API call finished"); // Add all map markers

          this.addMarkers();
          console.log("CLIENT: added markers"); // Set center of map to latLng of user location

          this.center = {
            lat: this.result.latLng.latitude,
            lng: this.result.latLng.longitude
          };
        }
        /**
         * Populates map with markers indicating score range based on latLng geolocation
         * of each rendered grocery store.
         *
         * Red markers: [0, 3.3], yellow markers: (3.3, 6.6], greeen markers: (6.6, 10]
         */

      }, {
        key: "addMarkers",
        value: function addMarkers() {
          var safeIcon = "http://maps.google.com/mapfiles/ms/icons/green.png";
          var cautionIcon = "http://maps.google.com/mapfiles/ms/icons/yellow.png";
          var unsafeIcon = "http://maps.google.com/mapfiles/ms/icons/red.png";
          var currIcon = '';
          var userIcon = "https://img.icons8.com/material-two-tone/24/000000/street-view.png"; // Adds current user query location to markers.

          this.markers.push({
            position: {
              lat: this.result.latLng.latitude,
              lng: this.result.latLng.longitude
            },
            title: "Your location!",
            options: {
              icon: {
                url: userIcon
              }
            }
          }); // Adds each stores as marker.

          var _iterator = _createForOfIteratorHelper(this.result.stores),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var store = _step.value;

              // Set icon according to colour.
              if (store.score <= 3.3) {
                currIcon = unsafeIcon;
              } else if (store.score <= 6.6) {
                currIcon = cautionIcon;
              } else {
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
                  icon: {
                    url: currIcon
                  }
                }
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Recenters map based on latLng
         * @param lat latitude to be recentered to
         * @param lng longitude to be recentered to
         */

      }, {
        key: "recenterMap",
        value: function recenterMap(lat, lng) {
          this.center = {
            lat: lat,
            lng: lng
          };
          this.map.center = this.center;
        }
        /**
         * Sorts results in descending order with the selected method through
         * the dropdown in the results page.
         * Method gets called when the selector is changed.
         */

      }, {
        key: "sortResults",
        value: function sortResults() {
          var sortVariable = '';
          var sortedStores = []; // Get chosen method. Since the user picks from a set list, there are only three.

          if (this.currSort == "Sort by ShopSafe Score") {} else if (this.currSort == "Sort by Google Review") {} else {} // use array.sort() 
          // define sort function

        }
      }]);

      return ResultComponent;
    }();

    ResultComponent.ɵfac = function ResultComponent_Factory(t) {
      return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultComponent,
      selectors: [["app-result"]],
      viewQuery: function ResultComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        }
      },
      decls: 3,
      vars: 3,
      consts: [["id", "result", "class", "segment", 4, "ngIf"], ["class", "loading-screen", 4, "ngIf"], [3, "httpErrorMessage", 4, "ngIf"], ["id", "result", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "maps-button", 3, "click"], [1, "fas", "fa-location-arrow"], ["id", "map"], ["height", "500px", "width", "100%", 3, "zoom", "center", "options"], [3, "position", "title", "options", 4, "ngFor", "ngForOf"], [1, "stores-list-heading"], [1, "left-text"], [1, "subtext"], [1, "fas", "fa-map-marker-alt", 2, "color", "#68BBCF"], [1, "right-text"], ["appearance", "fill"], [3, "value", "valueChange", 4, "ngFor", "ngForOf"], ["class", "stores-list", 4, "ngFor", "ngForOf"], [3, "position", "title", "options"], [3, "value", "valueChange"], [1, "stores-list"], [1, "stores-list-item"], [1, "row"], [1, "left-text", "markers"], [1, "location-icon", 3, "click"], [1, "fas", "fa-map-marker-alt"], [1, "stores-list-location", 3, "routerLink"], [1, "address"], [1, "tag"], ["matTooltip", "Google Review", 1, "tooltip"], [1, "far", "fa-question-circle"], [1, "rating"], [1, "loading-screen"], [3, "httpErrorMessage"]],
      template: function ResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResultComponent_div_0_Template, 30, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_div_1_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultComponent_app_http_error_2_Template, 1, 1, "app-http-error", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded && !ctx.httpError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded && !ctx.httpError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.httpError);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapMarker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _http_error_http_error_component__WEBPACK_IMPORTED_MODULE_10__["HttpErrorComponent"]],
      pipes: [_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_11__["RoundPipe"]],
      styles: ["#result[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#result[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    text-align: center;\n}\n\n#result[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 87px;\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 8px;\n    padding: 33px;\n}\n\n#result[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#result[_ngcontent-%COMP%]   .right-text[_ngcontent-%COMP%] {\n    float: right;\n}\n\n#result[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n    line-height: 41px;\n}\n\n#result[_ngcontent-%COMP%]   .left-text[_ngcontent-%COMP%] {\n    float: left;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-heading[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    overflow: hidden;\n}\n\n#result[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #68BBCF;\n    cursor: pointer;\n}\n\n#result[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%]:hover {\n  color: rgba(104, 187, 207, 0.3);\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-location[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    text-transform: uppercase;\n    color: #4A4A4A;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-location[_ngcontent-%COMP%]:hover {\n    background-color: rgba(104, 187, 207, 0.5);\n}\n\n#result[_ngcontent-%COMP%]   .markers[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #result[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #result[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    display: inline;\n}\n\n#result[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%] {\n    float: left;\n    display: flex;\n    width: 33.3%;\n}\n\n#result[_ngcontent-%COMP%]   .shopsafe-score[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 30px;\n    display: flex;\n    color: #FF8756;\n}\n\n#result[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    \n    color: #FF8756;\n    padding-left: 10px;\n    cursor: auto;\n}\n\n#result[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n    line-height: 0px;\n}\n\n#result[_ngcontent-%COMP%]   .stat-obj[_ngcontent-%COMP%] {\n    background: rgba(104, 187, 207, 0.1);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #68BBCF;\n    margin-right: 15px;\n    cursor: auto;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-item[_ngcontent-%COMP%] {\n  clear: both; \n  padding: 30px;\n  box-shadow: 0 0 12px 3px #F6F6F6;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n\n#result[_ngcontent-%COMP%]   .maps-button[_ngcontent-%COMP%] {\n    background: #68BBCF;\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #EEEEEE;\n    margin-right: 15px;\n    border: none;\n    font-weight: 600;\n    font-size: 15px;\n    margin-top: 20px;\n    cursor: pointer;\n}\n\n#result[_ngcontent-%COMP%]   .maps-button[_ngcontent-%COMP%]:hover {\n    background: rgba(104, 187, 207, 0.3);\n    color: #68BBCF;\n}\n\n#result[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  \n  color: rgba(0, 0, 0, 0.3);\n  padding: 5px 7px 5px;\n  margin-left: 10px;\n  \n  cursor: auto;\n}\n\n#result[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #68BBCF !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Y7b0JBQ2dCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVzdWx0IC5oZWFkaW5nLXRleHQgaDEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNyZXN1bHQgLmhlYWRpbmctdGV4dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcmVzdWx0IC5zdGF0LWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4N3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDMzcHg7XG59XG5cbiNyZXN1bHQgaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNyZXN1bHQgLnJpZ2h0LXRleHQge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuI3Jlc3VsdCAuc3VidGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XG59XG5cbiNyZXN1bHQgLmxlZnQtdGV4dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNyZXN1bHQgLnN0b3Jlcy1saXN0LWhlYWRpbmcge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNyZXN1bHQgLmxvY2F0aW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzY4QkJDRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNyZXN1bHQgLmxvY2F0aW9uLWljb246aG92ZXIge1xuICBjb2xvcjogcmdiYSgxMDQsIDE4NywgMjA3LCAwLjMpO1xufVxuXG4jcmVzdWx0IC5zdG9yZXMtbGlzdC1sb2NhdGlvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzRBNEE0QTtcbn1cblxuI3Jlc3VsdCAuc3RvcmVzLWxpc3QtbG9jYXRpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxODcsIDIwNywgMC41KTtcbn1cblxuI3Jlc3VsdCAubWFya2VycyAqLCAjcmVzdWx0IC5zdGF0LWVsZW0gKiwgI3Jlc3VsdCAuc3RhdC1iYXIgKiB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiNyZXN1bHQgLnN0YXQtZWxlbSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzMuMyU7XG59XG5cbiNyZXN1bHQgLnNob3BzYWZlLXNjb3JlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICNGRjg3NTY7XG59XG5cbiNyZXN1bHQgLnJhdGluZyB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAvKiBsaW5lLWhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIGNvbG9yOiAjRkY4NzU2O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBjdXJzb3I6IGF1dG87XG59XG5cbiNyZXN1bHQgLmFkZHJlc3Mge1xuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbiNyZXN1bHQgLnN0YXQtb2JqIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNCwgMTg3LCAyMDcsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xuICAgIGNvbG9yOiAjNjhCQkNGO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBjdXJzb3I6IGF1dG87XG59XG5cbiNyZXN1bHQgLnN0b3Jlcy1saXN0LWl0ZW0ge1xuICBjbGVhcjogYm90aDsgXG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDNweCAjRjZGNkY2O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNyZXN1bHQgLnN0b3Jlcy1saXN0LWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuXG4jcmVzdWx0IC5tYXBzLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzY4QkJDRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG4gICAgY29sb3I6ICNFRUVFRUU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Jlc3VsdCAubWFwcy1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxODcsIDIwNywgMC4zKTtcbiAgICBjb2xvcjogIzY4QkJDRjtcbn1cblxuI3Jlc3VsdCAudGFnIHtcbiAgLyogYmFja2dyb3VuZDogcmdiYSgyNTUsIDEzNSwgODYsIDAuMyk7ICovXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDVweCA3cHggNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xuICBjdXJzb3I6IGF1dG87XG59XG5cbiNyZXN1bHQgLnRvb2x0aXAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjhCQkNGICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-result',
          templateUrl: './result.component.html',
          styleUrls: ['./result.component.css']
        }]
      }], function () {
        return [{
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, {
        map: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/search-bar/search-bar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/search-bar/search-bar.component.ts ***!
    \***************************************************************/

  /*! exports provided: SearchBarComponent */

  /***/
  function srcAppComponentsSearchBarSearchBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function () {
      return SearchBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = ["address"];

    var SearchBarComponent = /*#__PURE__*/function () {
      function SearchBarComponent() {
        _classCallCheck(this, SearchBarComponent);

        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Check if API is loaded

        if (google.maps.places) {
          this.queryWait = true;
        } else {
          this.queryWait = false;
        }
      }

      _createClass(SearchBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.getPlace();
        }
        /**
         * Fetches places based on changing input values using Google Places API autocomplete feature.
         * Restricted to the US for geocoded locations (ie. not corporate)
         */

      }, {
        key: "getPlace",
        value: function getPlace() {
          var _this4 = this;

          var autocomplete = new google.maps.places.Autocomplete(this.address.nativeElement, {
            componentRestrictions: {
              country: 'US'
            },
            // Restricted to addresses (ie. not establishments)
            types: ['geocode']
          });
          google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();

            _this4.invokeEvent(place);
          });
        }
        /**
         * Invokes EventEmitter to toggle changes for autocomplete.
         * @param place contained value within event to be emitted
         */

      }, {
        key: "invokeEvent",
        value: function invokeEvent(place) {
          this.setAddress.emit(place);
        }
      }]);

      return SearchBarComponent;
    }();

    SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) {
      return new (t || SearchBarComponent)();
    };

    SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchBarComponent,
      selectors: [["app-search-bar"]],
      viewQuery: function SearchBarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.address = _t.first);
        }
      },
      outputs: {
        setAddress: "setAddress"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "input-container"], [1, "search-icon"], ["type", "text", "placeholder", "ENTER YOUR LOCATION TO FIND NEARBY GROCERY STORES", "name", "search", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], ["address", ""]],
      template: function SearchBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.autocompleteInput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.queryWait)("ngModel", ctx.autocompleteInput);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: [".input-container[_ngcontent-%COMP%] {\n    float: left;\n    padding-top: 0px;\n    display: flex;\n    width: calc(100% - 46px - 5px);\n}\n\n.input-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    padding: 12px 13px 10px;\n    position: absolute;\n    color: rgba(196, 196, 196);\n}\n\n.input-field[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 50px 15px;\n    float: right;\n    outline: none;\n    border-radius: 8px;\n    background: rgba(0, 0, 0, 0.03);\n    border: none;\n    font-weight: 500;\n}\n\n.input-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n}\n\nform[_ngcontent-%COMP%] {\n    padding-top: 0px;\n}\n\n.input-field[_ngcontent-%COMP%]:disabled {\n  background: rgba(0, 0, 0, 0.09);\n  color: rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NnB4IC0gNXB4KTtcbn1cblxuLmlucHV0LWNvbnRhaW5lciAuc2VhcmNoLWljb24ge1xuICAgIHBhZGRpbmc6IDEycHggMTNweCAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogcmdiYSgxOTYsIDE5NiwgMTk2KTtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHggMTVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5pbnB1dC1maWVsZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-bar',
          templateUrl: './search-bar.component.html',
          styleUrls: ['./search-bar.component.css']
        }]
      }], function () {
        return [];
      }, {
        setAddress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        address: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['address']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/store/store.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/store/store.component.ts ***!
    \*****************************************************/

  /*! exports provided: StoreComponent */

  /***/
  function srcAppComponentsStoreStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreComponent", function () {
      return StoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../check-in-modal/check-in-modal.component */
    "./src/app/components/check-in-modal/check-in-modal.component.ts");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _google_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../google-chart/line-chart/line-chart.component */
    "./src/app/google-chart/line-chart/line-chart.component.ts");
    /* harmony import */


    var _google_chart_covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../google-chart/covid-chart/covid-chart.component */
    "./src/app/google-chart/covid-chart/covid-chart.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _http_error_http_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../http-error/http-error.component */
    "./src/app/components/http-error/http-error.component.ts");
    /* harmony import */


    var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../pipes/round.pipe */
    "./src/app/pipes/round.pipe.ts");

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    function StoreComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_0_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.goBack();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \xA0 Back to Results");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_0_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.redirectToMap();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \xA0 VIEW ON MAPS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_0_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.openModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \xA0 CHECK IN AT THIS STORE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CHECKED IN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "STATUS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "RATING");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "SHOPSAFE SCORE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Chart statistics represent check-in entries averaged per day. To view more about the statistics, hover over each of the most current values of the statistics below. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " MASK ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "/10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " BUSY ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "/10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " LINE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "/10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " HYGIENE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "/10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-line-chart", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "TOTAL CASES");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "TOTAL DEATHS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "PERCENT AFFECTED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "app-covid-chart", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx_r0.store.open ? "#7AC665" : "#FF5151"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.open ? "OPEN" : "CLOSED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 21, ctx_r0.store.rating), "/5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 23, ctx_r0.store.score), "/10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Check-In Statistics for ", ctx_r0.store.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount == 0 ? "\u2014" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 25, ctx_r0.store.masks));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount == 0 ? "\u2014" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 27, ctx_r0.store.busy));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount == 0 ? "\u2014" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 29, ctx_r0.store.line));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount == 0 ? "\u2014" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](82, 31, ctx_r0.store.hygiene));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mask", ctx_r0.maskData)("busy", ctx_r0.busyData)("line", ctx_r0.lineData)("hygiene", ctx_r0.hygieneData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("COVID-19 Statistics for ", ctx_r0.countyStats.countyName, " County");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countyStats.cases);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countyStats.deaths);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 33, ctx_r0.proportion), "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("covidData", ctx_r0.covidData);
      }
    }

    function StoreComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading Store...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StoreComponent_app_http_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-http-error", 35);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("httpErrorMessage", ctx_r2.httpErrorMessage);
      }
    }

    var StoreComponent = /*#__PURE__*/function () {
      function StoreComponent(matDialog, apiService, route) {
        _classCallCheck(this, StoreComponent);

        this.matDialog = matDialog;
        this.apiService = apiService;
        this.route = route;
      }
      /**
       * Runs when component is loaded
       */


      _createClass(StoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Defaults to API not called yet
          this.isLoaded = false; // Defaults to no HTTP error

          this.httpError = false;
          this.getStore();
        }
        /**
         * Calls API to get store and subscribes local variables using data returned in the
         * Observable from the HTTP response.
         */

      }, {
        key: "getStore",
        value: function getStore() {
          var _this5 = this;

          var id = this.route.snapshot.paramMap.get('id').toString();
          this.storeId = id;
          this.apiService.getStoreById(id).subscribe(function (res) {
            _this5.store = res.store, _this5.countyStats = res.countyStats, _this5.covidData = _this5.countyStats.covidData, _this5.maskData = res.maskData, _this5.busyData = res.busyData, _this5.lineData = res.lineData, _this5.hygieneData = res.hygieneData;
          }, function (err) {
            console.log(err), _this5.httpError = true, _this5.httpErrorMessage = err;
          }, function () {
            _this5.initTemplate();
          });
        }
        /**
         * Initializes component by using data returned from API call.
         * Sets isLoaded boolean to true, as the function can only be called when there
         * is a successful response.
         */

      }, {
        key: "initTemplate",
        value: function initTemplate() {
          // Sets loaded state to true
          this.isLoaded = true;
          console.log("CLIENT: API call finished"); // Round proportion to 2 decimal places

          this.proportion = this.countyStats.cases / this.countyStats.population * 100;
          console.log("CLIENT: calculated percentage as " + this.proportion);
        }
        /**
         * Opens check in modal dialog using check in modal component.
         * Opens new check in modal on screen.
         */

      }, {
        key: "openModal",
        value: function openModal() {
          var _this6 = this;

          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          dialogConfig.id = "check-in-modal";
          dialogConfig.height = "510px";
          dialogConfig.width = "495px";

          _check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_2__["CheckInModalComponent"].setId(this.storeId);

          var modalDialog = this.matDialog.open(_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_2__["CheckInModalComponent"], dialogConfig); // Updates changes in place after modal closes

          modalDialog.afterClosed().subscribe(function () {
            _this6.getStore();
          });
        }
        /**
         * Opens Google Maps link using Places ID of the store.
         */

      }, {
        key: "redirectToMap",
        value: function redirectToMap() {
          var url = 'https://www.google.com/maps/place/?q=place_id:' + this.storeId;
          window.open(url, "_blank");
        }
        /**
         * Redirects to result page (previous page).
         */

      }, {
        key: "goBack",
        value: function goBack() {
          window.history.back();
        }
      }]);

      return StoreComponent;
    }();

    StoreComponent.ɵfac = function StoreComponent_Factory(t) {
      return new (t || StoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoreComponent,
      selectors: [["app-store"]],
      decls: 3,
      vars: 3,
      consts: [["id", "store", "class", "segment", 4, "ngIf"], ["class", "loading-screen", 4, "ngIf"], [3, "httpErrorMessage", 4, "ngIf"], ["id", "store", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "back-link", 3, "click"], [1, "fas", "fa-long-arrow-alt-left"], [1, "maps-button", 3, "click"], [1, "fas", "fa-map-marked-alt"], ["id", "check-in-button", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "stat-bar-wrapper"], [1, "stat-bar"], [1, "stat-elem-quarter", 2, "text-align", "left"], [1, "stat-obj"], [1, "stat-elem-quarter", 2, "text-align", "center"], [3, "ngStyle"], [1, "stat-elem-quarter", 2, "text-align", "right", "margin-top", "-5px"], [1, "shopsafe-score"], [1, "card"], [1, "stat-bar-secondary"], ["matTooltip", "How strict is the store with masks? Are the customers and workers \n                              wearing masks properly? 1 indicates no to little mask policy \n                              and presence (bad), and 10 indicates excellent mask usage (good)", 1, "stat-obj"], ["matTooltip", "How crowded is it inside the store? Essentially, is there \n                              enough space to social distance, maintain 6 feet? 1 indicates \n                              very busy (bad), and 10 indicates not busy at all (good)", 1, "stat-obj"], ["matTooltip", "How long is the line to get into the store from the outside?\n                              1 indicates very long (bad), and 10 indicates not long at all (good)", 1, "stat-obj"], [1, "stat-elem-quarter", 2, "text-align", "right"], ["matTooltip", "How clean is the store overall? Are the shared carts, \n                              baskets, and surfaces sanitized? 1 indicates poor hygiene \n                              (bad), and 10 indicates good hygiene (good)", 1, "stat-obj"], ["id", "line-chart", 1, "chart"], [3, "mask", "busy", "line", "hygiene"], [1, "stat-elem"], [1, "stat-elem", 2, "text-align", "center"], [1, "stat-elem", 2, "text-align", "right", "margin-top", "-5px"], ["id", "covid-chart", 1, "chart"], [3, "covidData"], [1, "loading-screen"], [3, "httpErrorMessage"]],
      template: function StoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreComponent_div_0_Template, 109, 37, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreComponent_div_1_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoreComponent_app_http_error_2_Template, 1, 1, "app-http-error", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded && !ctx.httpError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded && !ctx.httpError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.httpError);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _google_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__["LineChartComponent"], _google_chart_covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_8__["CovidChartComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _http_error_http_error_component__WEBPACK_IMPORTED_MODULE_10__["HttpErrorComponent"]],
      pipes: [_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_11__["RoundPipe"]],
      styles: ["#store[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    clear: both;\n    text-transform: uppercase;\n}\n\n#store[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    text-align: center;\n}\n\n#store[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    float: left !important;\n}\n\n#store[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 87px;\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 8px;\n    padding: 33px;\n}\n\n#store[_ngcontent-%COMP%]   .stat-bar-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 87px;\n    background: rgba(104, 187, 207, 0.06);\n    border-radius: 8px;\n    padding: 33px;\n}\n\n#store[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#store[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n    line-height: 41px;\n}\n\n#store[_ngcontent-%COMP%]   .markers[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-elem-quarter[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-bar-secondary[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    display: inline;\n}\n\n#store[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%] {\n    float: left;\n    display: flex;\n    width: 33.3%;\n}\n\n#store[_ngcontent-%COMP%]   .stat-elem-quarter[_ngcontent-%COMP%] {\n  float: left;\n  display: flex;\n  width: 25%;\n}\n\n#store[_ngcontent-%COMP%]   .shopsafe-score[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 30px;\n    display: flex;\n    color: #FF8756;\n}\n\n#store[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 30px;\n    display: flex;\n    color: #FF8756;\n    padding-left: 10px;\n}\n\n#store[_ngcontent-%COMP%]   .stat-obj[_ngcontent-%COMP%]{\n    background: rgba(104, 187, 207, 0.1);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #68BBCF;\n    margin-right: 15px;\n}\n\n#store[_ngcontent-%COMP%]   .stat-obj[_ngcontent-%COMP%] {\n    cursor: auto;\n}\n\n#store[_ngcontent-%COMP%]   #check-in-button[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .maps-button[_ngcontent-%COMP%] {\n    background: #68BBCF;\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #EEEEEE;\n    margin-right: 15px;\n    border: none;\n    font-weight: 600;\n    font-size: 15px;\n    margin-top: 20px;\n    cursor: pointer;\n}\n\n#store[_ngcontent-%COMP%]   #check-in-button[_ngcontent-%COMP%]:hover, #store[_ngcontent-%COMP%]   .maps-button[_ngcontent-%COMP%]:hover {\n    background: rgba(104, 187, 207, 0.3);\n    color: #68BBCF;\n}\n\n#store[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 25px 40px 25px;\n  box-shadow: 0 0 12px 3px #F6F6F6;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 40px;\n}\n\n#store[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS9zdG9yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsY0FBYztBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3RvcmUgLmhlYWRpbmctdGV4dCBoMSB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3N0b3JlIC5oZWFkaW5nLXRleHQge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3N0b3JlIC5iYWNrLWxpbmsge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuI3N0b3JlIC5zdGF0LWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4N3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDMzcHg7XG59XG5cbiNzdG9yZSAuc3RhdC1iYXItc2Vjb25kYXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg3cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDQsIDE4NywgMjA3LCAwLjA2KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMzNweDtcbn1cblxuI3N0b3JlIGgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jc3RvcmUgLnN1YnRleHQge1xuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xufVxuXG4jc3RvcmUgLm1hcmtlcnMgKiwgI3N0b3JlIC5zdGF0LWVsZW0gKiwgI3N0b3JlIC5zdGF0LWVsZW0tcXVhcnRlciAqLCAjc3RvcmUgLnN0YXQtYmFyICosICNzdG9yZSAuc3RhdC1iYXItc2Vjb25kYXJ5ICoge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4jc3RvcmUgLnN0YXQtZWxlbSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzMuMyU7XG59XG5cbiNzdG9yZSAuc3RhdC1lbGVtLXF1YXJ0ZXIge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuI3N0b3JlIC5zaG9wc2FmZS1zY29yZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjRkY4NzU2O1xufVxuXG4jc3RvcmUgLnJhdGluZyB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjRkY4NzU2O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuI3N0b3JlIC5zdGF0LW9iantcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNCwgMTg3LCAyMDcsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xuICAgIGNvbG9yOiAjNjhCQkNGO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuI3N0b3JlIC5zdGF0LW9iaiB7XG4gICAgY3Vyc29yOiBhdXRvO1xufVxuXG4jc3RvcmUgI2NoZWNrLWluLWJ1dHRvbiwgI3N0b3JlIC5tYXBzLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzY4QkJDRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG4gICAgY29sb3I6ICNFRUVFRUU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3N0b3JlICNjaGVjay1pbi1idXR0b246aG92ZXIsICNzdG9yZSAubWFwcy1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxODcsIDIwNywgMC4zKTtcbiAgICBjb2xvcjogIzY4QkJDRjtcbn1cblxuI3N0b3JlIC5jYXJkIHtcbiAgcGFkZGluZzogMjVweCA0MHB4IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDNweCAjRjZGNkY2O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbiNzdG9yZSAuY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-store',
          templateUrl: './store.component.html',
          styleUrls: ['./store.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/google-chart/covid-chart/covid-chart.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/google-chart/covid-chart/covid-chart.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CovidChartComponent */

  /***/
  function srcAppGoogleChartCovidChartCovidChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidChartComponent", function () {
      return CovidChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/google-chart.service */
    "./src/app/google-chart/service/google-chart.service.ts");

    var CovidChartComponent = /*#__PURE__*/function () {
      function CovidChartComponent(gChartService) {
        _classCallCheck(this, CovidChartComponent);

        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load('current', {
          'packages': ['corechart', 'table'],
          callback: this.drawChart.bind(this)
        });
      }

      _createClass(CovidChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Called when parameters are changed by the parent component.
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // Updates chart with new parent input values
          this.gLib.charts.load('current', {
            'packages': ['corechart', 'table'],
            callback: this.drawChart.bind(this)
          });
        } // TODO: custom colorization with options

        /**
         * Draws line chart and renders within template.
         */

      }, {
        key: "drawChart",
        value: function drawChart() {
          var data = new this.gLib.visualization.DataTable();
          data.addColumn('date', 'Date');
          data.addColumn('number', 'Cases');
          console.log(this.covidData);

          for (var i in this.covidData) {
            data.addRow([new Date(this.covidData[i].date), this.covidData[i].value]);
          }

          var options = {
            height: 600,
            hAxis: {
              textPosition: 'none'
            }
          };
          var chart = new this.gLib.visualization.LineChart(document.getElementById('covid-chart'));
          chart.draw(data, options);
          console.log("CLIENT: covid map has been drawn");
        }
      }]);

      return CovidChartComponent;
    }();

    CovidChartComponent.ɵfac = function CovidChartComponent_Factory(t) {
      return new (t || CovidChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"]));
    };

    CovidChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CovidChartComponent,
      selectors: [["app-covid-chart"]],
      inputs: {
        covidData: "covidData"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function CovidChartComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1jaGFydC9jb3ZpZC1jaGFydC9jb3ZpZC1jaGFydC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-covid-chart',
          templateUrl: './covid-chart.component.html',
          styleUrls: ['./covid-chart.component.css']
        }]
      }], function () {
        return [{
          type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"]
        }];
      }, {
        covidData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/google-chart/google-chart.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/google-chart/google-chart.module.ts ***!
    \*****************************************************/

  /*! exports provided: GoogleChartModule */

  /***/
  function srcAppGoogleChartGoogleChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleChartModule", function () {
      return GoogleChartModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _service_service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/service.module */
    "./src/app/google-chart/service/service.module.ts");
    /* harmony import */


    var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./line-chart/line-chart.component */
    "./src/app/google-chart/line-chart/line-chart.component.ts");
    /* harmony import */


    var _covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./covid-chart/covid-chart.component */
    "./src/app/google-chart/covid-chart/covid-chart.component.ts");

    var GoogleChartModule = function GoogleChartModule() {
      _classCallCheck(this, GoogleChartModule);
    };

    GoogleChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GoogleChartModule
    });
    GoogleChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GoogleChartModule_Factory(t) {
        return new (t || GoogleChartModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoogleChartModule, {
        declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_4__["CovidChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]],
        exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_4__["CovidChartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_4__["CovidChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]],
          exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _covid_chart_covid_chart_component__WEBPACK_IMPORTED_MODULE_4__["CovidChartComponent"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/google-chart/line-chart/line-chart.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/google-chart/line-chart/line-chart.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LineChartComponent */

  /***/
  function srcAppGoogleChartLineChartLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return LineChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/google-chart.service */
    "./src/app/google-chart/service/google-chart.service.ts");

    var LineChartComponent = /*#__PURE__*/function () {
      function LineChartComponent(gChartService) {
        _classCallCheck(this, LineChartComponent);

        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load('current', {
          'packages': ['corechart', 'table'],
          callback: this.drawChart.bind(this)
        });
      }

      _createClass(LineChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
        * Called when parameters are changed by the parent component.
        */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // Updates chart with new parent input values
          this.gLib.charts.load('current', {
            'packages': ['corechart', 'table'],
            callback: this.drawChart.bind(this)
          });
        } // TODO: custom colorization with options

        /**
         * Draws COVID-19 statistics line chart and renders within template.
         * Assumes that all input arrays are the same length
         */

      }, {
        key: "drawChart",
        value: function drawChart() {
          var data = new this.gLib.visualization.DataTable();
          data.addColumn('date', 'Date');
          data.addColumn('number', 'Mask');
          data.addColumn('number', 'Busy');
          data.addColumn('number', 'Line');
          data.addColumn('number', 'Hygiene');

          for (var i in this.mask) {
            data.addRow([new Date(this.mask[i].date), this.mask[i].value, this.busy[i].value, this.line[i].value, this.hygiene[i].value]);
          }

          var options = {
            height: 600,
            hAxis: {
              textPosition: 'none'
            }
          };
          var chart = new this.gLib.visualization.LineChart(document.getElementById('line-chart'));
          chart.draw(data, options);
          console.log("CLIENT: check-in map has been drawn");
        }
      }]);

      return LineChartComponent;
    }();

    LineChartComponent.ɵfac = function LineChartComponent_Factory(t) {
      return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"]));
    };

    LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineChartComponent,
      selectors: [["app-line-chart"]],
      inputs: {
        mask: "mask",
        busy: "busy",
        line: "line",
        hygiene: "hygiene"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function LineChartComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1jaGFydC9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-line-chart',
          templateUrl: './line-chart.component.html',
          styleUrls: ['./line-chart.component.css']
        }]
      }], function () {
        return [{
          type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"]
        }];
      }, {
        mask: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        busy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        line: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hygiene: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/google-chart/service/google-chart.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/google-chart/service/google-chart.service.ts ***!
    \**************************************************************/

  /*! exports provided: GoogleChartService */

  /***/
  function srcAppGoogleChartServiceGoogleChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleChartService", function () {
      return GoogleChartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service.module */
    "./src/app/google-chart/service/service.module.ts");

    var GoogleChartService = /*#__PURE__*/function () {
      function GoogleChartService() {
        _classCallCheck(this, GoogleChartService);

        this.google = google;
      }

      _createClass(GoogleChartService, [{
        key: "getGoogle",
        value: function getGoogle() {
          return this.google;
        }
      }]);

      return GoogleChartService;
    }();

    GoogleChartService.ɵfac = function GoogleChartService_Factory(t) {
      return new (t || GoogleChartService)();
    };

    GoogleChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GoogleChartService,
      factory: GoogleChartService.ɵfac,
      providedIn: _service_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: _service_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/google-chart/service/service.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/google-chart/service/service.module.ts ***!
    \********************************************************/

  /*! exports provided: ServiceModule */

  /***/
  function srcAppGoogleChartServiceServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceModule", function () {
      return ServiceModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Contains Angular service utilized to access the Google Charts library


    var ServiceModule = function ServiceModule() {
      _classCallCheck(this, ServiceModule);
    };

    ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServiceModule
    });
    ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServiceModule_Factory(t) {
        return new (t || ServiceModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/round.pipe.ts":
  /*!*************************************!*\
    !*** ./src/app/pipes/round.pipe.ts ***!
    \*************************************/

  /*! exports provided: RoundPipe */

  /***/
  function srcAppPipesRoundPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoundPipe", function () {
      return RoundPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RoundPipe = /*#__PURE__*/function () {
      function RoundPipe() {
        _classCallCheck(this, RoundPipe);
      }

      _createClass(RoundPipe, [{
        key: "transform",
        value: function transform(input) {
          return Math.round(input * 100) / 100;
        }
      }]);

      return RoundPipe;
    }();

    RoundPipe.ɵfac = function RoundPipe_Factory(t) {
      return new (t || RoundPipe)();
    };

    RoundPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "round",
      type: RoundPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'round'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/caroljli/step32-2020/shopsafe-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map