import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Output, Component, NgModule } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
import * as ɵngcc2 from '@angular/common/http';
import * as ɵngcc3 from '@angular/material/form-field';
import * as ɵngcc4 from '@angular/material/select';
import * as ɵngcc5 from '@angular/material/core';
import * as ɵngcc6 from '@angular/material/input';
import * as ɵngcc7 from '@angular/material/button';
let ReloadtoolService = class ReloadtoolService {
    constructor() {
    }
};
ReloadtoolService.ɵfac = function ReloadtoolService_Factory(t) { return new (t || ReloadtoolService)(); };
ReloadtoolService.ɵprov = ɵɵdefineInjectable({ factory: function ReloadtoolService_Factory() { return new ReloadtoolService(); }, token: ReloadtoolService, providedIn: "root" });

let ReloadtoolComponent = class ReloadtoolComponent {
    constructor(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.requestResultChange = new EventEmitter();
        this.requestResult = '';
        this.reloadForm = this.formBuilder.group({
            entity: ['', Validators.required],
            cobdate: ['', Validators.required]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        let self = this;
        if (this.reloadForm.valid) {
            this.http.post('/sod', this.reloadForm.value)
                .subscribe((response) => {
                console.log('Received response');
                self.requestResult = 'Reload initiated';
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
ReloadtoolComponent.ɵfac = function ReloadtoolComponent_Factory(t) { return new (t || ReloadtoolComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.HttpClient)); };
ReloadtoolComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ReloadtoolComponent, selectors: [["lib-reloadtool"]], outputs: { requestResultChange: "requestResultChange" }, decls: 32, vars: 2, consts: [[3, "formGroup"], [1, "row"], [1, "column2"], [1, "example-container"], ["appearance", "fill"], ["formControlName", "entity"], ["value", "RISK"], ["value", "CURVE_DEFINITION"], ["value", "TRADE"], ["value", "CURVE_INST_PRICE"], ["value", "JTD_WEIGHT"], ["value", "DURATION_WEIGHT"], ["matInput", "", "formControlName", "cobdate"], ["mat-stroked-button", "", "color", "primary", "color", "primary", 3, "click"], [1, "column7"]], template: function ReloadtoolComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "form", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelement(4, "br");
        ɵngcc0.ɵɵelementStart(5, "mat-form-field", 4);
        ɵngcc0.ɵɵelementStart(6, "mat-label");
        ɵngcc0.ɵɵtext(7, "Entity");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "mat-select", 5);
        ɵngcc0.ɵɵelementStart(9, "mat-option", 6);
        ɵngcc0.ɵɵtext(10, "Risks");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "mat-option", 7);
        ɵngcc0.ɵɵtext(12, "Curve definitions");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "mat-option", 8);
        ɵngcc0.ɵɵtext(14, "Trades");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "mat-option", 9);
        ɵngcc0.ɵɵtext(16, "Matd tenor mappings");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(17, "mat-option", 10);
        ɵngcc0.ɵɵtext(18, "JTD weights");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "mat-option", 11);
        ɵngcc0.ɵɵtext(20, "Duration weights");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(21, "br");
        ɵngcc0.ɵɵelementStart(22, "mat-form-field", 4);
        ɵngcc0.ɵɵelementStart(23, "mat-label");
        ɵngcc0.ɵɵtext(24, "Date");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(25, "input", 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(26, "br");
        ɵngcc0.ɵɵelementStart(27, "button", 13);
        ɵngcc0.ɵɵlistener("click", function ReloadtoolComponent_Template_button_click_27_listener($event) { return ctx.onSubmit(); });
        ɵngcc0.ɵɵtext(28, "Reload");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(29, "div", 14);
        ɵngcc0.ɵɵelement(30, "br");
        ɵngcc0.ɵɵtext(31);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("formGroup", ctx.reloadForm);
        ɵngcc0.ɵɵadvance(31);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.requestResult, " ");
    } }, directives: [ɵngcc1.ɵangular_packages_forms_forms_y, ɵngcc1.NgControlStatusGroup, ɵngcc1.FormGroupDirective, ɵngcc3.MatFormField, ɵngcc3.MatLabel, ɵngcc4.MatSelect, ɵngcc1.NgControlStatus, ɵngcc1.FormControlName, ɵngcc5.MatOption, ɵngcc6.MatInput, ɵngcc1.DefaultValueAccessor, ɵngcc7.MatButton], styles: [".column2[_ngcontent-%COMP%]{float:left;width:20%}.column7[_ngcontent-%COMP%]{float:left;width:70%}.row[_ngcontent-%COMP%]:after{content:\"\";display:table;clear:both}"] });
ReloadtoolComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient }
];
__decorate([
    Output()
], ReloadtoolComponent.prototype, "requestResultChange", void 0);

let ReloadtoolModule = class ReloadtoolModule {
};
ReloadtoolModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ReloadtoolModule });
ReloadtoolModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ReloadtoolModule_Factory(t) { return new (t || ReloadtoolModule)(); }, imports: [[
            MatFormFieldModule,
            FormsModule,
            ReactiveFormsModule,
            MatSelectModule,
            MatInputModule,
            MatButtonModule,
            HttpClientModule
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReloadtoolService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReloadtoolComponent, [{
        type: Component,
        args: [{
                selector: 'lib-reloadtool',
                template: `
    <form [formGroup]="reloadForm">
    <div class="row">
      <div class="column2">
        <div class="example-container">
          <br>
          <mat-form-field appearance="fill">
            <mat-label>Entity</mat-label>
            <mat-select formControlName="entity">
              <mat-option value="RISK">Risks</mat-option>
              <mat-option value="CURVE_DEFINITION">Curve definitions</mat-option>
              <mat-option value="TRADE">Trades</mat-option>
              <mat-option value="CURVE_INST_PRICE">Matd tenor mappings</mat-option>
              <mat-option value="JTD_WEIGHT">JTD weights</mat-option>
              <mat-option value="DURATION_WEIGHT">Duration weights</mat-option>
            </mat-select>
          </mat-form-field>
          <br>
          <mat-form-field appearance="fill">
            <mat-label>Date</mat-label>
            <input matInput formControlName="cobdate">
          </mat-form-field>
          <br>
          <button mat-stroked-button color="primary"
                  color="primary"
                  (click)="onSubmit()">Reload</button>
        </div>
      </div>
      <div class="column7">
        <br>
        {{requestResult}}
      </div>
    </div>
    </form>
  `,
                styles: [".column2{float:left;width:20%}.column7{float:left;width:70%}.row:after{content:\"\";display:table;clear:both}"]
            }]
    }], function () { return [{ type: ɵngcc1.FormBuilder }, { type: ɵngcc2.HttpClient }]; }, { requestResultChange: [{
            type: Output
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ReloadtoolModule, { declarations: function () { return [ReloadtoolComponent]; }, imports: function () { return [MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule]; }, exports: function () { return [ReloadtoolComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReloadtoolModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/*
 * Public API Surface of reloadtool
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ReloadtoolComponent, ReloadtoolModule, ReloadtoolService };

//# sourceMappingURL=reloadtool.js.map