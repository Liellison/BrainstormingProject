import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightRatingComponent } from './light-rating.component';

describe('LightRatingComponent', () => {
  let component: LightRatingComponent;
  let fixture: ComponentFixture<LightRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
