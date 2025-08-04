import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../question/question.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { RangeQuestionComponent } from '../range-question/range-question.component';
import { CountryQuestionComponent } from '../country-question/country-question.component';
import { DateQuestionComponent } from '../date-question/date-question.component';


@Component({
  selector: 'app-multiquestions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, QuestionComponent, MatStepperModule, MatButtonModule, MatProgressBarModule, MatIconModule, RangeQuestionComponent, CountryQuestionComponent, DateQuestionComponent],
  templateUrl: './multiquestions.component.html',
  styleUrl: './multiquestions.component.css'
})
export class MultiquestionsComponent implements OnInit {
  questions: any[] = [];
  formGroups: FormGroup[] = [];
  allAnswers: any = {};

  constructor(private fb: FormBuilder) {}

  async ngOnInit() {
    const response = await fetch('assets/i18n/questions.en.json');
    const data = await response.json();
    this.questions = data.questions;
    this.formGroups = this.questions.map(q =>
      this.fb.group({ answer: ['', Validators.required] })
    );
  }

  onSubmit() {
    this.allAnswers = {};
    this.questions.forEach((q, i) => {
      this.allAnswers[q.id] = this.formGroups[i].get('answer')?.value;
    });
    // Handle submission logic here (e.g., send to API)
    console.log('Submitted answers:', this.allAnswers);
  }

  resetStepper(stepper: any) {
    this.formGroups.forEach(fg => fg.reset());
    stepper.reset();
  }

  getFormControl(i: number): FormControl {
    return this.formGroups[i].get('answer') as FormControl;
  }
}
