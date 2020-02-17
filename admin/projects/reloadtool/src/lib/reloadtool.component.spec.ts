import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadtoolComponent } from './reloadtool.component';

describe('ReloadtoolComponent', () => {
  let component: ReloadtoolComponent;
  let fixture: ComponentFixture<ReloadtoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReloadtoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloadtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
