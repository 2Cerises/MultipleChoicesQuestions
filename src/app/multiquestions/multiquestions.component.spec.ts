import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiquestionsComponent } from './multiquestions.component';

describe('MultiquestionsComponent', () => {
  let component: MultiquestionsComponent;
  let fixture: ComponentFixture<MultiquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiquestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
