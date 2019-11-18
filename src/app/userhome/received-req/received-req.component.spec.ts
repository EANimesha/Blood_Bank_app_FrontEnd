import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedReqComponent } from './received-req.component';

describe('ReceivedReqComponent', () => {
  let component: ReceivedReqComponent;
  let fixture: ComponentFixture<ReceivedReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
