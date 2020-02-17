import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Output, Component, NgModule } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

var S3searchService = /** @class */ (function () {
    function S3searchService() {
    }
    S3searchService.ɵprov = ɵɵdefineInjectable({ factory: function S3searchService_Factory() { return new S3searchService(); }, token: S3searchService, providedIn: "root" });
    S3searchService = __decorate([
        Injectable({
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
        this.requestResultChange = new EventEmitter();
        this.requestResult = '';
        this.startKey = '';
        this.keyStartIndex = 0;
        this.s3searchForm = this.formBuilder.group({
            queryText: ['', Validators.required],
            region: ['', Validators.required],
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
        { type: FormBuilder },
        { type: HttpClient }
    ]; };
    __decorate([
        Output()
    ], S3searchComponent.prototype, "requestResultChange", void 0);
    S3searchComponent = __decorate([
        Component({
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
        NgModule({
            declarations: [S3searchComponent],
            imports: [
                MatFormFieldModule,
                FormsModule,
                ReactiveFormsModule,
                MatSelectModule,
                MatInputModule,
                MatButtonModule,
                HttpClientModule,
                MatTableModule
            ],
            exports: [S3searchComponent]
        })
    ], S3searchModule);
    return S3searchModule;
}());

/*
 * Public API Surface of s3search
 */

/**
 * Generated bundle index. Do not edit.
 */

export { S3searchComponent, S3searchModule, S3searchService };
//# sourceMappingURL=s3search.js.map
