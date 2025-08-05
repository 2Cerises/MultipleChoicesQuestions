import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
  @Output() answered = new EventEmitter<void>();

  questionTitle: string = '';
  options: { value: string; label: string }[] = [];

  async ngOnInit() {
    // Load questions from i18n JSON file
    const language = sessionStorage.getItem('language') || 'en'; // Default to 'en' if not set
    const response = await fetch(`assets/i18n/questions.${language}.json`);
    const data = await response.json();
    const question = data.questions.find((q: any) => q.id === this.id);
    if (question) {
      this.questionTitle = question.title;
      this.options = question.options;
    }
  }

  onSelect(value: string) {
    this.control.setValue(value);
    this.answered.emit();
  }

  isSelected(value: string): boolean {
    return this.control.value === value;
  }
}