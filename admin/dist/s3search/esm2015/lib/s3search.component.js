import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
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
export { S3searchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczNzZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vczNzZWFyY2gvIiwic291cmNlcyI6WyJsaWIvczNzZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQStEbkYsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDNUIsWUFBb0IsV0FBd0IsRUFBVSxJQUFnQjtRQUFsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFFdEUscUJBQWdCLEdBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6QyxlQUFVLEdBQWEsRUFBRSxDQUFBO1FBRWYsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUVuQixhQUFRLEdBQUcsRUFBRSxDQUFBO1FBRWIsa0JBQWEsR0FBRyxDQUFDLENBQUE7UUFFakIsaUJBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pCLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBcEJxRSxDQUFDO0lBc0IzRSxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBZSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7aUJBQzNELFNBQVMsQ0FBQyxDQUFDLFlBQTBCLEVBQUMsRUFBRTtnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDO2dCQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFBO2dCQUN0QixJQUFJLEtBQUssQ0FBQyxLQUFLLFlBQVksVUFBVSxFQUFFO29CQUNyQyxrRUFBa0U7b0JBQ2xFLGFBQWEsR0FBRyxvQkFBb0IsR0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFDMUQ7cUJBQU07b0JBQ0wsc0RBQXNEO29CQUN0RCw2REFBNkQ7b0JBQzdELGFBQWEsR0FBRyx3QkFBd0IsR0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLGNBQWMsR0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNsRjtnQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNILENBQUM7Q0FDRixDQUFBOztZQWxEa0MsV0FBVztZQUFnQixVQUFVOztBQU01RDtJQUFULE1BQU0sRUFBRTs4REFBMEM7QUFQeEMsaUJBQWlCO0lBNUQ3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUV4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNEVDs7S0FFRixDQUFDO0dBQ1csaUJBQWlCLENBbUQ3QjtTQW5EWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuL3Mzc2VhcmNoLXJlc3VsdCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXMzc2VhcmNoJyxcbiAgc3R5bGVVcmxzOiBbJy4vczNzZWFyY2guY29tcG9uZW50LmNzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiczNzZWFyY2hGb3JtXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbjJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGJyPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5RdWVyaWVkIHRleHQ8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJxdWVyeVRleHRcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+UmVnaW9uPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJyZWdpb25cIj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJFTUVBXCI+RU1FQTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJBUEFDXCI+QVBBQzwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJOQU1cIj5OQU08L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8YnI+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlBPRDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInBvZFwiPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPGJyPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5EYXRlPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPGJyPlxuICAgICAgICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW43XCI+XG4gICAgICAgIDxicj5cbiAgICAgICAge3tyZXF1ZXN0UmVzdWx0fX1cbiAgICAgICAgPGJyPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YVNvdXJjZS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInJlc3VsdHNcIj5cbiAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5TZWFyY2ggcmVzdWx0czwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudH19IDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gICAgICAgICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTM3NlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydyZXN1bHRzJ107XG5cbiAgZGF0YVNvdXJjZTogc3RyaW5nW10gPSBbXVxuXG4gIEBPdXRwdXQoKSByZXF1ZXN0UmVzdWx0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZXF1ZXN0UmVzdWx0ID0gJyc7XG5cbiAgc3RhcnRLZXkgPSAnJ1xuXG4gIGtleVN0YXJ0SW5kZXggPSAwXG5cbiAgczNzZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBxdWVyeVRleHQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICByZWdpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBwb2Q6IFsnJ10sXG4gICAgICBkYXRlOiBbJyddLFxuICAgICAgc3RhcnRLZXk6IFt0aGlzLnN0YXJ0S2V5XSxcbiAgICAgIGtleVN0YXJ0SW5kZXg6IFt0aGlzLmtleVN0YXJ0SW5kZXhdXG4gICAgfSk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYodGhpcy5zM3NlYXJjaEZvcm0udmFsaWQpe1xuICAgICAgICB0aGlzLmh0dHAucG9zdDxTZWFyY2hSZXN1bHQ+KCcvczMnLCB0aGlzLnMzc2VhcmNoRm9ybS52YWx1ZSlcbiAgICAgICAgLnN1YnNjcmliZSgoc2VhcmNoUmVzdWx0OiBTZWFyY2hSZXN1bHQpPT57XG4gICAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHJlc3BvbnNlJyk7XG4gICAgICAgICAgc2VsZi5yZXF1ZXN0UmVzdWx0ID0gJ1NlYXJjaCBjb21wbGV0ZWQnO1xuICAgICAgICAgIHNlbGYuZGF0YVNvdXJjZSA9IHNlYXJjaFJlc3VsdC5saW5lcztcbiAgICAgICAgICBzZWxmLnJlcXVlc3RSZXN1bHRDaGFuZ2UuZW1pdChzZWxmLnJlcXVlc3RSZXN1bHQpO1xuICAgICAgICB9LCAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgIGxldCBlcnJvcl9tZXNzYWdlID0gJydcbiAgICAgICAgICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xuICAgICAgICAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgICAgICAgIGVycm9yX21lc3NhZ2UgPSAnQW4gZXJyb3Igb2NjdXJyZWQ6JytlcnJvci5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxuICAgICAgICAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZyxcbiAgICAgICAgICAgICBlcnJvcl9tZXNzYWdlID0gJ0JhY2tlbmQgcmV0dXJuZWQgY29kZSAnK2Vycm9yLnN0YXR1cysnLCBib2R5IHdhczogJytlcnJvci5lcnJvcjtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yX21lc3NhZ2UpO1xuICAgICAgICAgICB0aGlzLnJlcXVlc3RSZXN1bHQgPSBlcnJvcl9tZXNzYWdlO1xuICAgICAgICAgICB0aGlzLnJlcXVlc3RSZXN1bHRDaGFuZ2UuZW1pdCh0aGlzLnJlcXVlc3RSZXN1bHQpO1xuICAgICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19