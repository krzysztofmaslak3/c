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
            MatTableModule
        ],
        exports: [S3searchComponent]
    })
], S3searchModule);
export { S3searchModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczNzZWFyY2gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vczNzZWFyY2gvIiwic291cmNlcyI6WyJsaWIvczNzZWFyY2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFBO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFnQnpELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBSSxDQUFBO0FBQWxCLGNBQWM7SUFkMUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFDakMsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGNBQWM7WUFDZCxlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGNBQWM7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO0tBQzdCLENBQUM7R0FDVyxjQUFjLENBQUk7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFMzc2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zM3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1Mzc2VhcmNoQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbUzNzZWFyY2hDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFMzc2VhcmNoTW9kdWxlIHsgfVxuIl19