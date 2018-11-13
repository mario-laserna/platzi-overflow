import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Question} from './question.model';
import icons from './icons';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styles: [`
    i {
      font-size: 36px;
    }
    small {
      display: block;
      font-size: 10px;
    }
  `]
})
export class QuestionFormComponent {
  icons: Object[] = icons;

  getIconVersion(icon: any) {
    let version;

    if (icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark';
    } else {
      version = icon.version.font[0];
    }

    return version;
  }

  onSubmit(form: NgForm) {
    const q = new Question(
      form.value.titulo,
      form.value.descripcion,
      new Date(),
      form.value.icon
    );
    console.log(q);
  }
}
