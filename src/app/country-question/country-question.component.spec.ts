import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryQuestionComponent } from './country-question.component';

describe('CountryQuestionComponent', () => {
  let component: CountryQuestionComponent;
  let fixture: ComponentFixture<CountryQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
