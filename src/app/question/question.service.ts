import {Injectable} from '@angular/core';
import {Question} from './question.model';
import {environment} from '../../environments/environment';
import urljoin from 'url-join';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  getQuestion(id): Observable<Question> {
    const url = urljoin(this.questionsUrl, id);

    return this.http.get(url)
      .pipe(
        map(res => {
          return res as Question;
        }),
        catchError(err => {
          const errMsg = err.message ? err.message :
            (err.status ? `${err.status} - ${err.statusText}` : 'Server Error');
          console.log(errMsg);
          return throwError(err);
        })
      );
  }

  addQuestion(question: Question) {
    const body = JSON.stringify(question);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(this.questionsUrl, body, {headers})
      .pipe(
        map((response: Response) => {
          // console.log(response.body.toString());
          return response;
        }),
        catchError((error: Response) => {
          console.log(error.body.toString());
          return throwError(error);
        })
      );
  }
}

