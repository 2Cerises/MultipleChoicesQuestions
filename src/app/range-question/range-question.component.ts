import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-range-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './range-question.component.html',
  styleUrl: './range-question.component.css'
})
export class RangeQuestionComponent {
  @Input() questionText: string = '';
  @Input() control!: FormControl;
  @Output() answered = new EventEmitter<number>();
  rangeNumbers = [1,2,3,4,5,6,7,8,9,10];

  select(num: number) {
    this.control.setValue(num);
    this.control.markAsDirty();
    this.control.markAsTouched();
    this.answered.emit(num);
  }
}
