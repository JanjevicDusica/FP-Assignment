import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllBtnComponent } from './show-all-btn.component';

describe('ShowAllBtnComponent', () => {
  let component: ShowAllBtnComponent;
  let fixture: ComponentFixture<ShowAllBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
