import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  @Input() id: string = '';
  @Input() control!: FormControl;

  questionTitle: string = '';
  options: { value: string; label: string }[] = [];

  async ngOnInit() {
    // Load questions from i18n JSON file
    const response = await fetch('assets/i18n/questions.en.json');
    const data = await response.json();
    const question = data.questions.find((q: any) => q.id === this.id);
    if (question) {
      this.questionTitle = question.title;
      this.options = question.options;
    }
  }

  onSelect(value: string) {
    this.control.setValue(value);
  }

  isSelected(value: string): boolean {
    return this.control.value === value;
  }
}