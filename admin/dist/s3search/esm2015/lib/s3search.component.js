import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
let S3searchComponent = class S3searchComponent {
    constructor(formBuilder, http) {
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
                  (click)="onSubmit()">Reload</button>
        </div>
      </div>
      <div class="column7">
        <br>
        {{requestResult}}
        <br>
        <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
          <ng-container matColumnDef="text">
            <th mat-header-cell *matHeaderCellDef>Text</th>
            <td mat-cell *matCellDef="let element"> {{element}} </td>
          </ng-container>


          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </div>
    </div>
    </form>
  `,
        styles: [".column2{float:left;width:20%}.column7{float:left;width:70%}.row:after{content:\"\";display:table;clear:both}table{width:100%}"]
    })
], S3searchComponent);
export { S3searchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczNzZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vczNzZWFyY2gvIiwic291cmNlcyI6WyJsaWIvczNzZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQTZEbkYsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDNUIsWUFBb0IsV0FBd0IsRUFBVSxJQUFnQjtRQUFsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFFdEUscUJBQWdCLEdBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QyxlQUFVLEdBQWEsRUFBRSxDQUFBO1FBRWYsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUVuQixhQUFRLEdBQUcsRUFBRSxDQUFBO1FBRWIsa0JBQWEsR0FBRyxDQUFDLENBQUE7UUFFakIsaUJBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pCLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBcEJxRSxDQUFDO0lBc0IzRSxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBZSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7aUJBQzNELFNBQVMsQ0FBQyxDQUFDLFlBQTBCLEVBQUMsRUFBRTtnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDO2dCQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFBO2dCQUN0QixJQUFJLEtBQUssQ0FBQyxLQUFLLFlBQVksVUFBVSxFQUFFO29CQUNyQyxrRUFBa0U7b0JBQ2xFLGFBQWEsR0FBRyxvQkFBb0IsR0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFDMUQ7cUJBQU07b0JBQ0wsc0RBQXNEO29CQUN0RCw2REFBNkQ7b0JBQzdELGFBQWEsR0FBRyx3QkFBd0IsR0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLGNBQWMsR0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNsRjtnQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNILENBQUM7Q0FDRixDQUFBOztZQWxEa0MsV0FBVztZQUFnQixVQUFVOztBQU01RDtJQUFULE1BQU0sRUFBRTs4REFBMEM7QUFQeEMsaUJBQWlCO0lBMUQ3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUV4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvRFQ7O0tBRUYsQ0FBQztHQUNXLGlCQUFpQixDQW1EN0I7U0FuRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi9zM3NlYXJjaC1yZXN1bHQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zM3NlYXJjaCcsXG4gIHN0eWxlVXJsczogWycuL3Mzc2VhcmNoLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInMzc2VhcmNoRm9ybVwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+UXVlcmllZCB0ZXh0PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwicXVlcnlUZXh0XCI+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8YnI+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlJlZ2lvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwicmVnaW9uXCI+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiRU1FQVwiPkVNRUE8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiQVBBQ1wiPkFQQUM8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiTkFNXCI+TkFNPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPGJyPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5QT0Q8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJwb2RcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF0ZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblN1Ym1pdCgpXCI+UmVsb2FkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uN1wiPlxuICAgICAgICA8YnI+XG4gICAgICAgIHt7cmVxdWVzdFJlc3VsdH19XG4gICAgICAgIDxicj5cbiAgICAgICAgPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlRleHQ8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50fX0gPC90ZD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gICAgICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICAgICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFMzc2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ1RleHQnXTtcblxuICBkYXRhU291cmNlOiBzdHJpbmdbXSA9IFtdXG5cbiAgQE91dHB1dCgpIHJlcXVlc3RSZXN1bHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlcXVlc3RSZXN1bHQgPSAnJztcblxuICBzdGFydEtleSA9ICcnXG5cbiAga2V5U3RhcnRJbmRleCA9IDBcblxuICBzM3NlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHF1ZXJ5VGV4dDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHJlZ2lvbjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHBvZDogWycnXSxcbiAgICAgIGRhdGU6IFsnJ10sXG4gICAgICBzdGFydEtleTogW3RoaXMuc3RhcnRLZXldLFxuICAgICAga2V5U3RhcnRJbmRleDogW3RoaXMua2V5U3RhcnRJbmRleF1cbiAgICB9KTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZih0aGlzLnMzc2VhcmNoRm9ybS52YWxpZCl7XG4gICAgICAgIHRoaXMuaHR0cC5wb3N0PFNlYXJjaFJlc3VsdD4oJy9zMycsIHRoaXMuczNzZWFyY2hGb3JtLnZhbHVlKVxuICAgICAgICAuc3Vic2NyaWJlKChzZWFyY2hSZXN1bHQ6IFNlYXJjaFJlc3VsdCk9PntcbiAgICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgcmVzcG9uc2UnKTtcbiAgICAgICAgICBzZWxmLnJlcXVlc3RSZXN1bHQgPSAnU2VhcmNoIGNvbXBsZXRlZCc7XG4gICAgICAgICAgc2VsZi5kYXRhU291cmNlID0gc2VhcmNoUmVzdWx0LmxpbmVzO1xuICAgICAgICAgIHNlbGYucmVxdWVzdFJlc3VsdENoYW5nZS5lbWl0KHNlbGYucmVxdWVzdFJlc3VsdCk7XG4gICAgICAgIH0sIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgbGV0IGVycm9yX21lc3NhZ2UgPSAnJ1xuICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XG4gICAgICAgICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICAgICAgICAgZXJyb3JfbWVzc2FnZSA9ICdBbiBlcnJvciBvY2N1cnJlZDonK2Vycm9yLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gVGhlIGJhY2tlbmQgcmV0dXJuZWQgYW4gdW5zdWNjZXNzZnVsIHJlc3BvbnNlIGNvZGUuXG4gICAgICAgICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxuICAgICAgICAgICAgIGVycm9yX21lc3NhZ2UgPSAnQmFja2VuZCByZXR1cm5lZCBjb2RlICcrZXJyb3Iuc3RhdHVzKycsIGJvZHkgd2FzOiAnK2Vycm9yLmVycm9yO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgICAgIHRoaXMucmVxdWVzdFJlc3VsdCA9IGVycm9yX21lc3NhZ2U7XG4gICAgICAgICAgIHRoaXMucmVxdWVzdFJlc3VsdENoYW5nZS5lbWl0KHRoaXMucmVxdWVzdFJlc3VsdCk7XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=