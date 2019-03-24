import {Component, OnDestroy, OnInit} from '@angular/core';
import { Question } from './question.model';
import {QuestionService} from './question.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  providers: [QuestionService]
})
export class QuestionDetailComponent implements OnInit, OnDestroy {
  question?: Question;
  loading = true;
  sub: any;

  /*question: Question = new Question(
    'esta es una nueva pregunta sobre android',
    'duda sobre la app, y estoy ...',
    new Date,
    'devicon-android-plain'
  );*/

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.sub = this.route.params.subscribe(params => {
      this.questionService
        .getQuestion(params.id)
        .subscribe( res => {
          this.question = res;
          this.loading = false;
        });
    });
  }

  ngOnDestroy(): void {
    // this.sub.unsuscribe();
  }
}
