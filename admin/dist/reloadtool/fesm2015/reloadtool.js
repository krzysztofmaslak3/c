import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Output, Component, NgModule } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

let ReloadtoolService = class ReloadtoolService {
    constructor() {
    }
};
ReloadtoolService.ɵprov = ɵɵdefineInjectable({ factory: function ReloadtoolService_Factory() { return new ReloadtoolService(); }, token: ReloadtoolService, providedIn: "root" });
ReloadtoolService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ReloadtoolService);

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
ReloadtoolComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient }
];
__decorate([
    Output()
], ReloadtoolComponent.prototype, "requestResultChange", void 0);
ReloadtoolComponent = __decorate([
    Component({
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
    })
], ReloadtoolComponent);

let ReloadtoolModule = class ReloadtoolModule {
};
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

/*
 * Public API Surface of reloadtool
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ReloadtoolComponent, ReloadtoolModule, ReloadtoolService };
//# sourceMappingURL=reloadtool.js.map
