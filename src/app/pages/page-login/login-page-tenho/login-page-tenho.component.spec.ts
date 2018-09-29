import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageTenhoComponent } from './login-page-tenho.component';

describe('LoginPageTenhoComponent', () => {
  let component: LoginPageTenhoComponent;
  let fixture: ComponentFixture<LoginPageTenhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageTenhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageTenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
