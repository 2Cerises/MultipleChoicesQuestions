import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-multiquestions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, QuestionComponent],
  templateUrl: './multiquestions.component.html',
  styleUrl: './multiquestions.component.css'
})
export class MultiquestionsComponent implements OnInit {
  questions: any[] = [];
  form = new FormGroup({});

  async ngOnInit() {
    const response = await fetch('assets/i18n/questions.en.json');
    const data = await response.json();
    this.questions = data.questions;
    this.questions.forEach(q => {
      this.form.addControl(q.id, new FormControl(''));
    });
  }
}
