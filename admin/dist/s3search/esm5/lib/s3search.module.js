import { __decorate } from "tslib";
import { S3searchComponent } from './s3search.component';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
var S3searchModule = /** @class */ (function () {
    function S3searchModule() {
    }
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
                MatTableModule
            ],
            exports: [S3searchComponent]
        })
    ], S3searchModule);
    return S3searchModule;
}());
export { S3searchModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczNzZWFyY2gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vczNzZWFyY2gvIiwic291cmNlcyI6WyJsaWIvczNzZWFyY2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFBO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFnQnpEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBZDFCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ2pDLE9BQU8sRUFBRTtnQkFDUCxrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLGNBQWM7YUFDZjtZQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1NBQzdCLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTM3NlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vczNzZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTM3NlYXJjaENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1Mzc2VhcmNoQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTM3NlYXJjaE1vZHVsZSB7IH1cbiJdfQ==