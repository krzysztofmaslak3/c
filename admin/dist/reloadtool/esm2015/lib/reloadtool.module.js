import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ReloadtoolComponent } from './reloadtool.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
let ReloadtoolModule = class ReloadtoolModule {
};
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
export { ReloadtoolModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsb2FkdG9vbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZWxvYWR0b29sLyIsInNvdXJjZXMiOlsibGliL3JlbG9hZHRvb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFBO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWV4RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFJLENBQUE7QUFBcEIsZ0JBQWdCO0lBYjVCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ25DLE9BQU8sRUFBRTtZQUNQLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixjQUFjO1lBQ2QsZUFBZTtZQUNmLGdCQUFnQjtTQUNqQjtRQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQy9CLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVsb2FkdG9vbENvbXBvbmVudCB9IGZyb20gJy4vcmVsb2FkdG9vbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCdcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1JlbG9hZHRvb2xDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtSZWxvYWR0b29sQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBSZWxvYWR0b29sTW9kdWxlIHsgfVxuIl19