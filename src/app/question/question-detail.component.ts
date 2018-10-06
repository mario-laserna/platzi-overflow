import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {
  question: Question = new Question(
    'esta es una nueva pregunta sobre android',
    'duda sobre la app, y estoy ...',
    new Date,
    'devicon-android-plain'
  );
}
