(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common/http'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/material/table')) :
    typeof define === 'function' && define.amd ? define('s3search', ['exports', '@angular/core', '@angular/forms', '@angular/common/http', '@angular/material/form-field', '@angular/material/select', '@angular/material/input', '@angular/material/button', '@angular/material/table'], factory) :
    (global = global || self, factory(global.s3search = {}, global.ng.core, global.ng.forms, global.ng.common.http, global.ng.material['form-field'], global.ng.material.select, global.ng.material.input, global.ng.material.button, global.ng.material.table));
}(this, (function (exports, core, forms, http, formField, select, input, button, table) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var S3searchService = /** @class */ (function () {
        function S3searchService() {
        }
        S3searchService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function S3searchService_Factory() { return new S3searchService(); }, token: S3searchService, providedIn: "root" });
        S3searchService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], S3searchService);
        return S3searchService;
    }());

    var S3searchComponent = /** @class */ (function () {
        function S3searchComponent(formBuilder, http) {
            this.formBuilder = formBuilder;
            this.http = http;
            this.displayedColumns = ['Text'];
            this.dataSource = [];
            this.requestResultChange = new core.EventEmitter();
            this.requestResult = '';
            this.startKey = '';
            this.keyStartIndex = 0;
            this.s3searchForm = this.formBuilder.group({
                queryText: ['', forms.Validators.required],
                region: ['', forms.Validators.required],
                pod: [''],
                date: [''],
                startKey: [this.startKey],
                keyStartIndex: [this.keyStartIndex]
            });
        }
        S3searchComponent.prototype.ngOnInit = function () {
        };
        S3searchComponent.prototype.onSubmit = function () {
            var _this = this;
            var self = this;
            if (this.s3searchForm.valid) {
                this.http.post('/s3', this.s3searchForm.value)
                    .subscribe(function (searchResult) {
                    console.log('Received response');
                    self.requestResult = 'Search completed';
                    self.dataSource = searchResult.lines;
                    self.requestResultChange.emit(self.requestResult);
                }, function (error) {
                    var error_message = '';
                    if (error.error instanceof ErrorEvent) {
                        // A client-side or network error occurred. Handle it accordingly.
                        error_message = 'An error occurred:' + error.error.message;
                    }
                    else {
                        // The backend returned an unsuccessful response code.
                        // The response body may contain clues as to what went wrong,
                        error_message = 'Backend returned code ' + error.status + ', body was: ' + error.error;
                    }
                    console.error(error_message);
                    _this.requestResult = error_message;
                    _this.requestResultChange.emit(_this.requestResult);
                });
            }
        };
        S3searchComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: http.HttpClient }
        ]; };
        __decorate([
            core.Output()
        ], S3searchComponent.prototype, "requestResultChange", void 0);
        S3searchComponent = __decorate([
            core.Component({
                selector: 'lib-s3search',
                template: "\n    <form [formGroup]=\"s3searchForm\">\n    <div class=\"row\">\n      <div class=\"column2\">\n        <div class=\"example-container\">\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Queried text</mat-label>\n            <input matInput formControlName=\"queryText\">\n          </mat-form-field>\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Region</mat-label>\n            <mat-select formControlName=\"region\">\n              <mat-option value=\"EMEA\">EMEA</mat-option>\n              <mat-option value=\"APAC\">APAC</mat-option>\n              <mat-option value=\"NAM\">NAM</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>POD</mat-label>\n            <input matInput formControlName=\"pod\">\n          </mat-form-field>\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Date</mat-label>\n            <input matInput formControlName=\"date\">\n          </mat-form-field>\n          <br>\n          <button mat-stroked-button color=\"primary\"\n                  color=\"primary\"\n                  (click)=\"onSubmit()\">Reload</button>\n        </div>\n      </div>\n      <div class=\"column7\">\n        <br>\n        {{requestResult}}\n        <br>\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n          <ng-container matColumnDef=\"text\">\n            <th mat-header-cell *matHeaderCellDef>Text</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element}} </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </div>\n    </div>\n    </form>\n  ",
                styles: [".column2{float:left;width:20%}.column7{float:left;width:70%}.row:after{content:\"\";display:table;clear:both}table{width:100%}"]
            })
        ], S3searchComponent);
        return S3searchComponent;
    }());

    var S3searchModule = /** @class */ (function () {
        function S3searchModule() {
        }
        S3searchModule = __decorate([
            core.NgModule({
                declarations: [S3searchComponent],
                imports: [
                    formField.MatFormFieldModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    select.MatSelectModule,
                    input.MatInputModule,
                    button.MatButtonModule,
                    http.HttpClientModule,
                    table.MatTableModule
                ],
                exports: [S3searchComponent]
            })
        ], S3searchModule);
        return S3searchModule;
    }());

    exports.S3searchComponent = S3searchComponent;
    exports.S3searchModule = S3searchModule;
    exports.S3searchService = S3searchService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=s3search.umd.js.map
