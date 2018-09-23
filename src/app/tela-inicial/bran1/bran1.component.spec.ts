import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bran1Component } from './bran1.component';

describe('Bran1Component', () => {
  let component: Bran1Component;
  let fixture: ComponentFixture<Bran1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bran1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bran1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
