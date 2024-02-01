import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Big1Component } from './big1.component';

describe('Big1Component', () => {
  let component: Big1Component;
  let fixture: ComponentFixture<Big1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Big1Component]
    });
    fixture = TestBed.createComponent(Big1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
