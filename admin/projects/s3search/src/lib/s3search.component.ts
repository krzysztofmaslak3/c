import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { SearchResult } from './s3search-result'

@Component({
  selector: 'lib-s3search',
  styleUrls: ['./s3search.component.css'],
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
  styles: []
})
export class S3searchComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  displayedColumns: string[] = ['results'];

  dataSource: string[] = []

  @Output() requestResultChange = new EventEmitter();
  requestResult = '';

  startKey = ''

  keyStartIndex = 0

  s3searchForm = this.formBuilder.group({
      queryText: ['', Validators.required],
      region: ['', Validators.required],
      pod: [''],
      date: [''],
      startKey: [this.startKey],
      keyStartIndex: [this.keyStartIndex]
    });

  ngOnInit(): void {
  }

  onSubmit() {
    let self = this;
    if(this.s3searchForm.valid){
        this.http.post<SearchResult>('/s3', this.s3searchForm.value)
        .subscribe((searchResult: SearchResult)=>{
          console.log('Received response');
          self.requestResult = 'Search completed';
          self.dataSource = searchResult.lines;
          self.requestResultChange.emit(self.requestResult);
        }, (error: HttpErrorResponse) => {
           let error_message = ''
           if (error.error instanceof ErrorEvent) {
             // A client-side or network error occurred. Handle it accordingly.
             error_message = 'An error occurred:'+error.error.message;
           } else {
             // The backend returned an unsuccessful response code.
             // The response body may contain clues as to what went wrong,
             error_message = 'Backend returned code '+error.status+', body was: '+error.error;
           }
           console.error(error_message);
           this.requestResult = error_message;
           this.requestResultChange.emit(this.requestResult);
        })
    }
  }
}
