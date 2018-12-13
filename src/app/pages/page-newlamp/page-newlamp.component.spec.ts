import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewlampComponent } from './page-newlamp.component';

describe('PageNewlampComponent', () => {
  let component: PageNewlampComponent;
  let fixture: ComponentFixture<PageNewlampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewlampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewlampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
