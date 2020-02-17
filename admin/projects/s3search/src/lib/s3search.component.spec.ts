import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3searchComponent } from './s3search.component';

describe('S3searchComponent', () => {
  let component: S3searchComponent;
  let fixture: ComponentFixture<S3searchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3searchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3searchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
