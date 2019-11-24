import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarsComponent } from './donars.component';

describe('DonarsComponent', () => {
  let component: DonarsComponent;
  let fixture: ComponentFixture<DonarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
