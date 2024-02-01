import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emit2Component } from './emit2.component';

describe('Emit2Component', () => {
  let component: Emit2Component;
  let fixture: ComponentFixture<Emit2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Emit2Component]
    });
    fixture = TestBed.createComponent(Emit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
