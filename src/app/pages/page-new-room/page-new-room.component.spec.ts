import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewRoomComponent } from './page-new-room.component';

describe('PageNewRoomComponent', () => {
  let component: PageNewRoomComponent;
  let fixture: ComponentFixture<PageNewRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
