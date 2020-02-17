import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'lib-reloadtool',
  styleUrls: ['./reloadtool.component.css'],
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
  styles: []
})
export class ReloadtoolComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  @Output() requestResultChange = new EventEmitter();
  requestResult = '';

  reloadForm = this.formBuilder.group({
      entity: ['', Validators.required],
      cobdate: ['', Validators.required]
    });

  ngOnInit(): void {
  }

  onSubmit() {
    let self = this;
    if(this.reloadForm.valid){
        this.http.post('/api/userCreate', this.reloadForm.value)
        .subscribe((response: HttpResponse<string>)=>{
          console.log('Received response');
          self.requestResult = 'Reload initiated';
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
