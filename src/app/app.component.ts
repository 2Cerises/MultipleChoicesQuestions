import { Component } from '@angular/core';
import { QuestionComponent } from "./question/question.component";
@Component({
  selector: 'app-root',
  imports: [QuestionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multipleChoicesQuestions';
}
