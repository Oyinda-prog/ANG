import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emit3Component } from './emit3.component';

describe('Emit3Component', () => {
  let component: Emit3Component;
  let fixture: ComponentFixture<Emit3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Emit3Component]
    });
    fixture = TestBed.createComponent(Emit3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
