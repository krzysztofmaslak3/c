import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
var S3searchComponent = /** @class */ (function () {
    function S3searchComponent(formBuilder, http) {
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
            template: "\n    <form [formGroup]=\"s3searchForm\">\n    <div class=\"row\">\n      <div class=\"column2\">\n        <div class=\"example-container\">\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Queried text</mat-label>\n            <input matInput formControlName=\"queryText\">\n          </mat-form-field>\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Region</mat-label>\n            <mat-select formControlName=\"region\">\n              <mat-option value=\"EMEA\">EMEA</mat-option>\n              <mat-option value=\"APAC\">APAC</mat-option>\n              <mat-option value=\"NAM\">NAM</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>POD</mat-label>\n            <input matInput formControlName=\"pod\">\n          </mat-form-field>\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Date</mat-label>\n            <input matInput formControlName=\"date\">\n          </mat-form-field>\n          <br>\n          <button mat-stroked-button color=\"primary\"\n                  color=\"primary\"\n                  (click)=\"onSubmit()\">Search</button>\n        </div>\n      </div>\n      <div class=\"column7\">\n        <br>\n        {{requestResult}}\n        <br>\n        <div *ngIf=\"dataSource.length > 0\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n            <ng-container matColumnDef=\"results\">\n              <th mat-header-cell *matHeaderCellDef>Search results</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element}} </td>\n            </ng-container>\n\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </div>\n      </div>\n    </div>\n    </form>\n  ",
            styles: [".column2{float:left;width:20%}.column7{float:left;width:70%}.row:after{content:\"\";display:table;clear:both}table{width:100%}"]
        })
    ], S3searchComponent);
    return S3searchComponent;
}());
export { S3searchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczNzZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vczNzZWFyY2gvIiwic291cmNlcyI6WyJsaWIvczNzZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQStEbkY7SUFDRSwyQkFBb0IsV0FBd0IsRUFBVSxJQUFnQjtRQUFsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFFdEUscUJBQWdCLEdBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6QyxlQUFVLEdBQWEsRUFBRSxDQUFBO1FBRWYsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUVuQixhQUFRLEdBQUcsRUFBRSxDQUFBO1FBRWIsa0JBQWEsR0FBRyxDQUFDLENBQUE7UUFFakIsaUJBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pCLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBcEJxRSxDQUFDO0lBc0IzRSxvQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkF3QkM7UUF2QkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2lCQUMzRCxTQUFTLENBQUMsVUFBQyxZQUEwQjtnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDO2dCQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBRSxVQUFDLEtBQXdCO2dCQUN6QixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUE7Z0JBQ3RCLElBQUksS0FBSyxDQUFDLEtBQUssWUFBWSxVQUFVLEVBQUU7b0JBQ3JDLGtFQUFrRTtvQkFDbEUsYUFBYSxHQUFHLG9CQUFvQixHQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUMxRDtxQkFBTTtvQkFDTCxzREFBc0Q7b0JBQ3RELDZEQUE2RDtvQkFDN0QsYUFBYSxHQUFHLHdCQUF3QixHQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsY0FBYyxHQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ2xGO2dCQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0gsQ0FBQzs7Z0JBakRnQyxXQUFXO2dCQUFnQixVQUFVOztJQU01RDtRQUFULE1BQU0sRUFBRTtrRUFBMEM7SUFQeEMsaUJBQWlCO1FBNUQ3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUV4QixRQUFRLEVBQUUsKzhEQXNEVDs7U0FFRixDQUFDO09BQ1csaUJBQWlCLENBbUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFuREQsSUFtREM7U0FuRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi9zM3NlYXJjaC1yZXN1bHQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zM3NlYXJjaCcsXG4gIHN0eWxlVXJsczogWycuL3Mzc2VhcmNoLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInMzc2VhcmNoRm9ybVwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+UXVlcmllZCB0ZXh0PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwicXVlcnlUZXh0XCI+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8YnI+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlJlZ2lvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwicmVnaW9uXCI+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiRU1FQVwiPkVNRUE8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiQVBBQ1wiPkFQQUM8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiTkFNXCI+TkFNPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPGJyPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5QT0Q8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJwb2RcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF0ZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblN1Ym1pdCgpXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uN1wiPlxuICAgICAgICA8YnI+XG4gICAgICAgIHt7cmVxdWVzdFJlc3VsdH19XG4gICAgICAgIDxicj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImRhdGFTb3VyY2UubGVuZ3RoID4gMFwiPlxuICAgICAgICAgIDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJyZXN1bHRzXCI+XG4gICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+U2VhcmNoIHJlc3VsdHM8L3RoPlxuICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnR9fSA8L3RkPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICAgICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUzNzZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncmVzdWx0cyddO1xuXG4gIGRhdGFTb3VyY2U6IHN0cmluZ1tdID0gW11cblxuICBAT3V0cHV0KCkgcmVxdWVzdFJlc3VsdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVxdWVzdFJlc3VsdCA9ICcnO1xuXG4gIHN0YXJ0S2V5ID0gJydcblxuICBrZXlTdGFydEluZGV4ID0gMFxuXG4gIHMzc2VhcmNoRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgcXVlcnlUZXh0OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcmVnaW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcG9kOiBbJyddLFxuICAgICAgZGF0ZTogWycnXSxcbiAgICAgIHN0YXJ0S2V5OiBbdGhpcy5zdGFydEtleV0sXG4gICAgICBrZXlTdGFydEluZGV4OiBbdGhpcy5rZXlTdGFydEluZGV4XVxuICAgIH0pO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmKHRoaXMuczNzZWFyY2hGb3JtLnZhbGlkKXtcbiAgICAgICAgdGhpcy5odHRwLnBvc3Q8U2VhcmNoUmVzdWx0PignL3MzJywgdGhpcy5zM3NlYXJjaEZvcm0udmFsdWUpXG4gICAgICAgIC5zdWJzY3JpYmUoKHNlYXJjaFJlc3VsdDogU2VhcmNoUmVzdWx0KT0+e1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCByZXNwb25zZScpO1xuICAgICAgICAgIHNlbGYucmVxdWVzdFJlc3VsdCA9ICdTZWFyY2ggY29tcGxldGVkJztcbiAgICAgICAgICBzZWxmLmRhdGFTb3VyY2UgPSBzZWFyY2hSZXN1bHQubGluZXM7XG4gICAgICAgICAgc2VsZi5yZXF1ZXN0UmVzdWx0Q2hhbmdlLmVtaXQoc2VsZi5yZXF1ZXN0UmVzdWx0KTtcbiAgICAgICAgfSwgKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICBsZXQgZXJyb3JfbWVzc2FnZSA9ICcnXG4gICAgICAgICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcbiAgICAgICAgICAgICAvLyBBIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuIEhhbmRsZSBpdCBhY2NvcmRpbmdseS5cbiAgICAgICAgICAgICBlcnJvcl9tZXNzYWdlID0gJ0FuIGVycm9yIG9jY3VycmVkOicrZXJyb3IuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cbiAgICAgICAgICAgICAvLyBUaGUgcmVzcG9uc2UgYm9keSBtYXkgY29udGFpbiBjbHVlcyBhcyB0byB3aGF0IHdlbnQgd3JvbmcsXG4gICAgICAgICAgICAgZXJyb3JfbWVzc2FnZSA9ICdCYWNrZW5kIHJldHVybmVkIGNvZGUgJytlcnJvci5zdGF0dXMrJywgYm9keSB3YXM6ICcrZXJyb3IuZXJyb3I7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVzdWx0ID0gZXJyb3JfbWVzc2FnZTtcbiAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVzdWx0Q2hhbmdlLmVtaXQodGhpcy5yZXF1ZXN0UmVzdWx0KTtcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==