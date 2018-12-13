import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExemploLampComponent } from './page-exemplo-lamp.component';

describe('PageExemploLampComponent', () => {
  let component: PageExemploLampComponent;
  let fixture: ComponentFixture<PageExemploLampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExemploLampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExemploLampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
