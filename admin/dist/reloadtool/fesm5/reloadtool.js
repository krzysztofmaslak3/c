import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Output, Component, NgModule } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

var ReloadtoolService = /** @class */ (function () {
    function ReloadtoolService() {
    }
    ReloadtoolService.ɵprov = ɵɵdefineInjectable({ factory: function ReloadtoolService_Factory() { return new ReloadtoolService(); }, token: ReloadtoolService, providedIn: "root" });
    ReloadtoolService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ReloadtoolService);
    return ReloadtoolService;
}());

var ReloadtoolComponent = /** @class */ (function () {
    function ReloadtoolComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.requestResultChange = new EventEmitter();
        this.requestResult = '';
        this.reloadForm = this.formBuilder.group({
            entity: ['', Validators.required],
            cobdate: ['', Validators.required]
        });
    }
    ReloadtoolComponent.prototype.ngOnInit = function () {
    };
    ReloadtoolComponent.prototype.onSubmit = function () {
        var _this = this;
        var self = this;
        if (this.reloadForm.valid) {
            this.http.post('/sod', this.reloadForm.value)
                .subscribe(function (response) {
                console.log('Received response');
                self.requestResult = 'Reload initiated';
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
    ReloadtoolComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient }
    ]; };
    __decorate([
        Output()
    ], ReloadtoolComponent.prototype, "requestResultChange", void 0);
    ReloadtoolComponent = __decorate([
        Component({
            selector: 'lib-reloadtool',
            template: "\n    <form [formGroup]=\"reloadForm\">\n    <div class=\"row\">\n      <div class=\"column2\">\n        <div class=\"example-container\">\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Entity</mat-label>\n            <mat-select formControlName=\"entity\">\n              <mat-option value=\"RISK\">Risks</mat-option>\n              <mat-option value=\"CURVE_DEFINITION\">Curve definitions</mat-option>\n              <mat-option value=\"TRADE\">Trades</mat-option>\n              <mat-option value=\"CURVE_INST_PRICE\">Matd tenor mappings</mat-option>\n              <mat-option value=\"JTD_WEIGHT\">JTD weights</mat-option>\n              <mat-option value=\"DURATION_WEIGHT\">Duration weights</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Date</mat-label>\n            <input matInput formControlName=\"cobdate\">\n          </mat-form-field>\n          <br>\n          <button mat-stroked-button color=\"primary\"\n                  color=\"primary\"\n                  (click)=\"onSubmit()\">Reload</button>\n        </div>\n      </div>\n      <div class=\"column7\">\n        <br>\n        {{requestResult}}\n      </div>\n    </div>\n    </form>\n  ",
            styles: [".column2{float:left;width:20%}.column7{float:left;width:70%}.row:after{content:\"\";display:table;clear:both}"]
        })
    ], ReloadtoolComponent);
    return ReloadtoolComponent;
}());

var ReloadtoolModule = /** @class */ (function () {
    function ReloadtoolModule() {
    }
    ReloadtoolModule = __decorate([
        NgModule({
            declarations: [ReloadtoolComponent],
            imports: [
                MatFormFieldModule,
                FormsModule,
                ReactiveFormsModule,
                MatSelectModule,
                MatInputModule,
                MatButtonModule,
                HttpClientModule
            ],
            exports: [ReloadtoolComponent]
        })
    ], ReloadtoolModule);
    return ReloadtoolModule;
}());

/*
 * Public API Surface of reloadtool
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ReloadtoolComponent, ReloadtoolModule, ReloadtoolService };
//# sourceMappingURL=reloadtool.js.map
