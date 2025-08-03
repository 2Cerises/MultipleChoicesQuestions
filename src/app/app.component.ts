import { Component } from '@angular/core';
import { QuestionComponent } from "./question/question.component";
import { MultiquestionsComponent } from "./multiquestions/multiquestions.component";
@Component({
  selector: 'app-root',
  imports: [QuestionComponent, MultiquestionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multipleChoicesQuestions';
}
