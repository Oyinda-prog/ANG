import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emit1Component } from './emit1.component';

describe('Emit1Component', () => {
  let component: Emit1Component;
  let fixture: ComponentFixture<Emit1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Emit1Component]
    });
    fixture = TestBed.createComponent(Emit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
