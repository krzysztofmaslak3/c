import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ReloadtoolComponent } from './reloadtool.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
var ReloadtoolModule = /** @class */ (function () {
    function ReloadtoolModule() {
    }
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
    return ReloadtoolModule;
}());
export { ReloadtoolModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsb2FkdG9vbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZWxvYWR0b29sLyIsInNvdXJjZXMiOlsibGliL3JlbG9hZHRvb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFBO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWV4RDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBYjVCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRTtnQkFDUCxrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixnQkFBZ0I7YUFDakI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUMvQixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWxvYWR0b29sQ29tcG9uZW50IH0gZnJvbSAnLi9yZWxvYWR0b29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUmVsb2FkdG9vbENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1JlbG9hZHRvb2xDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFJlbG9hZHRvb2xNb2R1bGUgeyB9XG4iXX0=