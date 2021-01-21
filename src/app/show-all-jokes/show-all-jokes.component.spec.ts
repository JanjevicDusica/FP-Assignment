import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllJokesComponent } from './show-all-jokes.component';

describe('ShowAllJokesComponent', () => {
  let component: ShowAllJokesComponent;
  let fixture: ComponentFixture<ShowAllJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
