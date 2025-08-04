import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-question.component.html',
  styleUrl: './country-question.component.css'
})
export class CountryQuestionComponent {
  @Input() questionText: string = '';
  @Input() control!: FormControl;
  @Output() answered = new EventEmitter<string>();

  countries = [
    { name: 'Afghanistan', flag: '🇦🇫' },
    { name: 'Albania', flag: '🇦🇱' },
    { name: 'Algeria', flag: '🇩🇿' },
    { name: 'Andorra', flag: '🇦🇩' },
    { name: 'Angola', flag: '🇦🇴' },
    // ... add more countries as needed
  ];
  filteredCountries = this.countries;
  search: string = '';

  onSearchChange(value: string) {
    this.search = value;
    const lower = value.toLowerCase();
    this.filteredCountries = this.countries.filter(c => c.name.toLowerCase().includes(lower));
  }

  selectCountry(country: any) {
    this.control.setValue(country.name);
    this.control.markAsDirty();
    this.control.markAsTouched();
    this.answered.emit(country.name);
    this.search = country.name;
    this.filteredCountries = [country];
  }
}
