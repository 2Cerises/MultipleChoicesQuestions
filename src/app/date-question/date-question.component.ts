import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-date-question',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './date-question.component.html',
  styleUrl: './date-question.component.css'
})
export class DateQuestionComponent {

  @Input() questionText: string = '';
  @Input() control!: FormControl;
  @Output() answered = new EventEmitter<string>();

  constructor(private router: Router) {}

  submit() {
     this.router.navigate(['/signup']);
    this.answered.emit(this.control.value);
   
  }

}
