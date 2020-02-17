import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Output, Component, NgModule } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
import * as ɵngcc2 from '@angular/common/http';
import * as ɵngcc3 from '@angular/material/form-field';
import * as ɵngcc4 from '@angular/material/input';
import * as ɵngcc5 from '@angular/material/select';
import * as ɵngcc6 from '@angular/material/core';
import * as ɵngcc7 from '@angular/material/button';
import * as ɵngcc8 from '@angular/common';
import * as ɵngcc9 from '@angular/material/table';

function S3searchComponent_div_37_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 21);
    ɵngcc0.ɵɵtext(1, "Search results");
    ɵngcc0.ɵɵelementEnd();
} }
function S3searchComponent_div_37_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 22);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r5 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", element_r5, " ");
} }
function S3searchComponent_div_37_tr_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 23);
} }
function S3searchComponent_div_37_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 24);
} }
function S3searchComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "table", 15);
    ɵngcc0.ɵɵelementContainerStart(2, 16);
    ɵngcc0.ɵɵtemplate(3, S3searchComponent_div_37_th_3_Template, 2, 0, "th", 17);
    ɵngcc0.ɵɵtemplate(4, S3searchComponent_div_37_td_4_Template, 2, 1, "td", 18);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵtemplate(5, S3searchComponent_div_37_tr_5_Template, 1, 0, "tr", 19);
    ɵngcc0.ɵɵtemplate(6, S3searchComponent_div_37_tr_6_Template, 1, 0, "tr", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("dataSource", ctx_r0.dataSource);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("matHeaderRowDef", ctx_r0.displayedColumns);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matRowDefColumns", ctx_r0.displayedColumns);
} }
let S3searchService = class S3searchService {
    constructor() {
    }
};
S3searchService.ɵfac = function S3searchService_Factory(t) { return new (t || S3searchService)(); };
S3searchService.ɵprov = ɵɵdefineInjectable({ factory: function S3searchService_Factory() { return new S3searchService(); }, token: S3searchService, providedIn: "root" });

let S3searchComponent = class S3searchComponent {
    constructor(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.displayedColumns = ['results'];
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
    ngOnInit() {
    }
    onSubmit() {
        let self = this;
        if (this.s3searchForm.valid) {
            this.http.post('/s3', this.s3searchForm.value)
                .subscribe((searchResult) => {
                console.log('Received response');
                self.requestResult = 'Search completed';
                self.dataSource = searchResult.lines;
                self.requestResultChange.emit(self.requestResult);
            }, (error) => {
                let error_message = '';
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
                this.requestResult = error_message;
                this.requestResultChange.emit(this.requestResult);
            });
        }
    }
};
S3searchComponent.ɵfac = function S3searchComponent_Factory(t) { return new (t || S3searchComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.HttpClient)); };
S3searchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: S3searchComponent, selectors: [["lib-s3search"]], outputs: { requestResultChange: "requestResultChange" }, decls: 38, vars: 3, consts: [[3, "formGroup"], [1, "row"], [1, "column2"], [1, "example-container"], ["appearance", "fill"], ["matInput", "", "formControlName", "queryText"], ["formControlName", "region"], ["value", "EMEA"], ["value", "APAC"], ["value", "NAM"], ["matInput", "", "formControlName", "pod"], ["matInput", "", "formControlName", "date"], ["mat-stroked-button", "", "color", "primary", "color", "primary", 3, "click"], [1, "column7"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "results"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function S3searchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "form", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelement(4, "br");
        ɵngcc0.ɵɵelementStart(5, "mat-form-field", 4);
        ɵngcc0.ɵɵelementStart(6, "mat-label");
        ɵngcc0.ɵɵtext(7, "Queried text");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(8, "input", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(9, "br");
        ɵngcc0.ɵɵelementStart(10, "mat-form-field", 4);
        ɵngcc0.ɵɵelementStart(11, "mat-label");
        ɵngcc0.ɵɵtext(12, "Region");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "mat-select", 6);
        ɵngcc0.ɵɵelementStart(14, "mat-option", 7);
        ɵngcc0.ɵɵtext(15, "EMEA");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "mat-option", 8);
        ɵngcc0.ɵɵtext(17, "APAC");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "mat-option", 9);
        ɵngcc0.ɵɵtext(19, "NAM");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(20, "br");
        ɵngcc0.ɵɵelementStart(21, "mat-form-field", 4);
        ɵngcc0.ɵɵelementStart(22, "mat-label");
        ɵngcc0.ɵɵtext(23, "POD");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(24, "input", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(25, "br");
        ɵngcc0.ɵɵelementStart(26, "mat-form-field", 4);
        ɵngcc0.ɵɵelementStart(27, "mat-label");
        ɵngcc0.ɵɵtext(28, "Date");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(29, "input", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(30, "br");
        ɵngcc0.ɵɵelementStart(31, "button", 12);
        ɵngcc0.ɵɵlistener("click", function S3searchComponent_Template_button_click_31_listener($event) { return ctx.onSubmit(); });
        ɵngcc0.ɵɵtext(32, "Search");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(33, "div", 13);
        ɵngcc0.ɵɵelement(34, "br");
        ɵngcc0.ɵɵtext(35);
        ɵngcc0.ɵɵelement(36, "br");
        ɵngcc0.ɵɵtemplate(37, S3searchComponent_div_37_Template, 7, 3, "div", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("formGroup", ctx.s3searchForm);
        ɵngcc0.ɵɵadvance(35);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.requestResult, " ");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dataSource.length > 0);
    } }, directives: [ɵngcc1.ɵangular_packages_forms_forms_y, ɵngcc1.NgControlStatusGroup, ɵngcc1.FormGroupDirective, ɵngcc3.MatFormField, ɵngcc3.MatLabel, ɵngcc4.MatInput, ɵngcc1.DefaultValueAccessor, ɵngcc1.NgControlStatus, ɵngcc1.FormControlName, ɵngcc5.MatSelect, ɵngcc6.MatOption, ɵngcc7.MatButton, ɵngcc8.NgIf, ɵngcc9.MatTable, ɵngcc9.MatColumnDef, ɵngcc9.MatHeaderCellDef, ɵngcc9.MatCellDef, ɵngcc9.MatHeaderRowDef, ɵngcc9.MatRowDef, ɵngcc9.MatHeaderCell, ɵngcc9.MatCell, ɵngcc9.MatHeaderRow, ɵngcc9.MatRow], styles: [".column2[_ngcontent-%COMP%]{float:left;width:20%}.column7[_ngcontent-%COMP%]{float:left;width:70%}.row[_ngcontent-%COMP%]:after{content:\"\";display:table;clear:both}table[_ngcontent-%COMP%]{width:100%}"] });
S3searchComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient }
];
__decorate([
    Output()
], S3searchComponent.prototype, "requestResultChange", void 0);

let S3searchModule = class S3searchModule {
};
S3searchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: S3searchModule });
S3searchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function S3searchModule_Factory(t) { return new (t || S3searchModule)(); }, imports: [[
            MatFormFieldModule,
            FormsModule,
            ReactiveFormsModule,
            MatSelectModule,
            MatInputModule,
            MatButtonModule,
            HttpClientModule,
            MatTableModule,
            BrowserModule
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(S3searchService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(S3searchComponent, [{
        type: Component,
        args: [{
                selector: 'lib-s3search',
                template: `
    <form [formGroup]="s3searchForm">
    <div class="row">
      <div class="column2">
        <div class="example-container">
          <br>
          <mat-form-field appearance="fill">
            <mat-label>Queried text</mat-label>
            <input matInput formControlName="queryText">
          </mat-form-field>
          <br>
          <mat-form-field appearance="fill">
            <mat-label>Region</mat-label>
            <mat-select formControlName="region">
              <mat-option value="EMEA">EMEA</mat-option>
              <mat-option value="APAC">APAC</mat-option>
              <mat-option value="NAM">NAM</mat-option>
            </mat-select>
          </mat-form-field>
          <br>
          <mat-form-field appearance="fill">
            <mat-label>POD</mat-label>
            <input matInput formControlName="pod">
          </mat-form-field>
          <br>
          <mat-form-field appearance="fill">
            <mat-label>Date</mat-label>
            <input matInput formControlName="date">
          </mat-form-field>
          <br>
          <button mat-stroked-button color="primary"
                  color="primary"
                  (click)="onSubmit()">Search</button>
        </div>
      </div>
      <div class="column7">
        <br>
        {{requestResult}}
        <br>
        <div *ngIf="dataSource.length > 0">
          <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
            <ng-container matColumnDef="results">
              <th mat-header-cell *matHeaderCellDef>Search results</th>
              <td mat-cell *matCellDef="let element"> {{element}} </td>
            </ng-container>


            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </div>
      </div>
    </div>
    </form>
  `,
                styles: [".column2{float:left;width:20%}.column7{float:left;width:70%}.row:after{content:\"\";display:table;clear:both}table{width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc1.FormBuilder }, { type: ɵngcc2.HttpClient }]; }, { requestResultChange: [{
            type: Output
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(S3searchModule, { declarations: function () { return [S3searchComponent]; }, imports: function () { return [MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        MatTableModule,
        BrowserModule]; }, exports: function () { return [S3searchComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(S3searchModule, [{
        type: NgModule,
        args: [{
                declarations: [S3searchComponent],
                imports: [
                    MatFormFieldModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatSelectModule,
                    MatInputModule,
                    MatButtonModule,
                    HttpClientModule,
                    MatTableModule,
                    BrowserModule
                ],
                exports: [S3searchComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of s3search
 */

/**
 * Generated bundle index. Do not edit.
 */

export { S3searchComponent, S3searchModule, S3searchService };

//# sourceMappingURL=s3search.js.map