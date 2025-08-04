import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './date-question.component.html',
  styleUrl: './date-question.component.css'
})
export class DateQuestionComponent {
  @Input() questionText: string = '';
  @Input() control!: FormControl;
  @Output() answered = new EventEmitter<string>();

  submit() {
    this.answered.emit(this.control.value);
  }

}
