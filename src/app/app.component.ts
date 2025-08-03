import { Component } from '@angular/core';
import { MultiquestionsComponent } from "./multiquestions/multiquestions.component";
@Component({
  selector: 'app-root',
  imports: [MultiquestionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multipleChoicesQuestions';
}
