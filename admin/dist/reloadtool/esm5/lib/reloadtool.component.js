import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
var ReloadtoolComponent = /** @class */ (function () {
    function ReloadtoolComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.requestResultChange = new EventEmitter();
        this.requestResult = '';
        this.reloadForm = this.formBuilder.group({
            entity: ['', Validators.required],
            cobdate: ['', Validators.required]
        });
    }
    ReloadtoolComponent.prototype.ngOnInit = function () {
    };
    ReloadtoolComponent.prototype.onSubmit = function () {
        var _this = this;
        var self = this;
        if (this.reloadForm.valid) {
            this.http.post('/sod', this.reloadForm.value)
                .subscribe(function (response) {
                console.log('Received response');
                self.requestResult = 'Reload initiated';
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
    ReloadtoolComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient }
    ]; };
    __decorate([
        Output()
    ], ReloadtoolComponent.prototype, "requestResultChange", void 0);
    ReloadtoolComponent = __decorate([
        Component({
            selector: 'lib-reloadtool',
            template: "\n    <form [formGroup]=\"reloadForm\">\n    <div class=\"row\">\n      <div class=\"column2\">\n        <div class=\"example-container\">\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Entity</mat-label>\n            <mat-select formControlName=\"entity\">\n              <mat-option value=\"RISK\">Risks</mat-option>\n              <mat-option value=\"CURVE_DEFINITION\">Curve definitions</mat-option>\n              <mat-option value=\"TRADE\">Trades</mat-option>\n              <mat-option value=\"CURVE_INST_PRICE\">Matd tenor mappings</mat-option>\n              <mat-option value=\"JTD_WEIGHT\">JTD weights</mat-option>\n              <mat-option value=\"DURATION_WEIGHT\">Duration weights</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Date</mat-label>\n            <input matInput formControlName=\"cobdate\">\n          </mat-form-field>\n          <br>\n          <button mat-stroked-button color=\"primary\"\n                  color=\"primary\"\n                  (click)=\"onSubmit()\">Reload</button>\n        </div>\n      </div>\n      <div class=\"column7\">\n        <br>\n        {{requestResult}}\n      </div>\n    </div>\n    </form>\n  ",
            styles: [".column2{float:left;width:20%}.column7{float:left;width:70%}.row:after{content:\"\";display:table;clear:both}"]
        })
    ], ReloadtoolComponent);
    return ReloadtoolComponent;
}());
export { ReloadtoolComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsb2FkdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZWxvYWR0b29sLyIsInNvdXJjZXMiOlsibGliL3JlbG9hZHRvb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQTBDbkY7SUFDRSw2QkFBb0IsV0FBd0IsRUFBVSxJQUFnQjtRQUFsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFFNUQsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUVuQixlQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDaEMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDakMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0lBUnFFLENBQUM7SUFVM0Usc0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFDNUMsU0FBUyxDQUFDLFVBQUMsUUFBOEI7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxFQUFFLFVBQUMsS0FBd0I7Z0JBQ3pCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQTtnQkFDdEIsSUFBSSxLQUFLLENBQUMsS0FBSyxZQUFZLFVBQVUsRUFBRTtvQkFDckMsa0VBQWtFO29CQUNsRSxhQUFhLEdBQUcsb0JBQW9CLEdBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQzFEO3FCQUFNO29CQUNMLHNEQUFzRDtvQkFDdEQsNkRBQTZEO29CQUM3RCxhQUFhLEdBQUcsd0JBQXdCLEdBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxjQUFjLEdBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDbEY7Z0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDSCxDQUFDOztnQkFwQ2dDLFdBQVc7Z0JBQWdCLFVBQVU7O0lBRTVEO1FBQVQsTUFBTSxFQUFFO29FQUEwQztJQUh4QyxtQkFBbUI7UUF4Qy9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFFMUIsUUFBUSxFQUFFLGd5Q0FrQ1Q7O1NBRUYsQ0FBQztPQUNXLG1CQUFtQixDQXNDL0I7SUFBRCwwQkFBQztDQUFBLEFBdENELElBc0NDO1NBdENZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXJlbG9hZHRvb2wnLFxuICBzdHlsZVVybHM6IFsnLi9yZWxvYWR0b29sLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInJlbG9hZEZvcm1cIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnI+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPkVudGl0eTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiZW50aXR5XCI+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiUklTS1wiPlJpc2tzPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIkNVUlZFX0RFRklOSVRJT05cIj5DdXJ2ZSBkZWZpbml0aW9uczwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJUUkFERVwiPlRyYWRlczwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJDVVJWRV9JTlNUX1BSSUNFXCI+TWF0ZCB0ZW5vciBtYXBwaW5nczwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJKVERfV0VJR0hUXCI+SlREIHdlaWdodHM8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiRFVSQVRJT05fV0VJR0hUXCI+RHVyYXRpb24gd2VpZ2h0czwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF0ZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cImNvYmRhdGVcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblN1Ym1pdCgpXCI+UmVsb2FkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uN1wiPlxuICAgICAgICA8YnI+XG4gICAgICAgIHt7cmVxdWVzdFJlc3VsdH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmVsb2FkdG9vbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIEBPdXRwdXQoKSByZXF1ZXN0UmVzdWx0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZXF1ZXN0UmVzdWx0ID0gJyc7XG5cbiAgcmVsb2FkRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW50aXR5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY29iZGF0ZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmKHRoaXMucmVsb2FkRm9ybS52YWxpZCl7XG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KCcvc29kJywgdGhpcy5yZWxvYWRGb3JtLnZhbHVlKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogSHR0cFJlc3BvbnNlPHN0cmluZz4pPT57XG4gICAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHJlc3BvbnNlJyk7XG4gICAgICAgICAgc2VsZi5yZXF1ZXN0UmVzdWx0ID0gJ1JlbG9hZCBpbml0aWF0ZWQnO1xuICAgICAgICAgIHNlbGYucmVxdWVzdFJlc3VsdENoYW5nZS5lbWl0KHNlbGYucmVxdWVzdFJlc3VsdCk7XG4gICAgICAgIH0sIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgbGV0IGVycm9yX21lc3NhZ2UgPSAnJ1xuICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XG4gICAgICAgICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICAgICAgICAgZXJyb3JfbWVzc2FnZSA9ICdBbiBlcnJvciBvY2N1cnJlZDonK2Vycm9yLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gVGhlIGJhY2tlbmQgcmV0dXJuZWQgYW4gdW5zdWNjZXNzZnVsIHJlc3BvbnNlIGNvZGUuXG4gICAgICAgICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxuICAgICAgICAgICAgIGVycm9yX21lc3NhZ2UgPSAnQmFja2VuZCByZXR1cm5lZCBjb2RlICcrZXJyb3Iuc3RhdHVzKycsIGJvZHkgd2FzOiAnK2Vycm9yLmVycm9yO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgICAgIHRoaXMucmVxdWVzdFJlc3VsdCA9IGVycm9yX21lc3NhZ2U7XG4gICAgICAgICAgIHRoaXMucmVxdWVzdFJlc3VsdENoYW5nZS5lbWl0KHRoaXMucmVxdWVzdFJlc3VsdCk7XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=