import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  @Input() id: string = '';
  @Input() form:FormGroup = new FormGroup({});
  @Output() selected = new EventEmitter<void>();

  questionTitle: string = '';
  options: { value: string; label: string }[] = [];
  controlName: string = 'answer';

  async ngOnInit() {
    // Load questions from i18n JSON file
    const response = await fetch('assets/i18n/questions.en.json');
    const data = await response.json();
    const question = data.questions.find((q: any) => q.id === this.id);
    if (question) {
      this.questionTitle = question.title;
      this.options = question.options;
      this.controlName = question.id;
      this.form.addControl(this.controlName, new FormControl(''));
    }
  }

  onSelect(value: string) {
    this.form.get(this.controlName)?.setValue(value);
    this.selected.emit();
  }

  isSelected(value: string): boolean {
    return this.form.get(this.controlName)?.value === value;
  }
}