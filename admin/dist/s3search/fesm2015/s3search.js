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

let S3searchService = class S3searchService {
    constructor() {
    }
};
S3searchService.ɵprov = ɵɵdefineInjectable({ factory: function S3searchService_Factory() { return new S3searchService(); }, token: S3searchService, providedIn: "root" });
S3searchService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], S3searchService);

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
S3searchComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient }
];
__decorate([
    Output()
], S3searchComponent.prototype, "requestResultChange", void 0);
S3searchComponent = __decorate([
    Component({
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
    })
], S3searchComponent);

let S3searchModule = class S3searchModule {
};
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
            MatTableModule,
            BrowserModule
        ],
        exports: [S3searchComponent]
    })
], S3searchModule);

/*
 * Public API Surface of s3search
 */

/**
 * Generated bundle index. Do not edit.
 */

export { S3searchComponent, S3searchModule, S3searchService };
//# sourceMappingURL=s3search.js.map
