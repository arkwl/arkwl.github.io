import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleViewComponent } from './middle-view.component';

describe('MiddleViewComponent', () => {
  let component: MiddleViewComponent;
  let fixture: ComponentFixture<MiddleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
