import {Injectable} from '@angular/core';
import {Question} from './question.model';
import {environment} from '../../environments/environment';
import urljoin from 'url-join';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QuestionService {
  private questionsUrl: string;

  constructor(private http: HttpClient) {
    this.questionsUrl = urljoin(environment.apiUrl, 'questions');
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get(this.questionsUrl)
      .pipe(
        map(res => {
          return res as Question[];
        })
      );
  }

  /*getQuestion(id): Observable<Question> {
    const url = urljoin(this.questionsUrl, id);

    return this.http.get(url)
      .pipe(
        map(res => {
          return res as Question;
        })
      );
  }*/

  handleError(error: any) {
    const errMsg = error.message ? error.message :
      (error.status ? `${error.status} - ${error.statusText}` : 'Server Error');
    console.log(errMsg);
  }
}
