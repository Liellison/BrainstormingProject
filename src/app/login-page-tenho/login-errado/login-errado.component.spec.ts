import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginErradoComponent } from './login-errado.component';

describe('LoginErradoComponent', () => {
  let component: LoginErradoComponent;
  let fixture: ComponentFixture<LoginErradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginErradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginErradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
