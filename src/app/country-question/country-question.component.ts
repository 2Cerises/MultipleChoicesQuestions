import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { getNames, getCode } from 'country-list';

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

  countries: { name: string, flag: string }[] = [];
  filteredCountries: { name: string, flag: string }[] = [];
  search: string = '';
  dropdownOpen: boolean = false;

  constructor() {
    // Get all country names from the library
    const names = getNames();
    this.countries = names.map(name => ({ name, flag: this.getFlagEmoji(name) }));
    this.filteredCountries = this.countries;
  }

  // Utility to get flag emoji from country name
  getFlagEmoji(countryName: string): string {
    // Use a simple mapping for demo, or use a more complete library for production
    const code = this.getCountryCode(countryName);
    if (!code) return '';
    // Convert country code to regional indicator symbols
    return code
      .toUpperCase()
      .split('')
      .map(c => String.fromCodePoint(127397 + c.charCodeAt(0)))
      .join('');
  }

  // Get country code from name using country-list
  getCountryCode(name: string): string | undefined {
    return getCode(name) || undefined;
  }

  onSearchChange(value: string) {
    this.search = value;
    const lower = value.toLowerCase();
    this.filteredCountries = this.countries.filter(c => c.name.toLowerCase().includes(lower));
   if (this.filteredCountries.length > 1 && value.length > 0) {
      this.dropdownOpen = true;
    } else {
      this.dropdownOpen = false;
    }
  }

  selectCountry(country: any) {
    this.control.setValue(country.name);
    this.control.markAsDirty();
    this.control.markAsTouched();
    this.answered.emit(country.name);
    this.search = country.name;
    this.filteredCountries = [country];
    this.dropdownOpen = false;
  }
}
