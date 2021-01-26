import { Component, OnInit } from '@angular/core';
import { Joke } from '../app.component';
import * as R from 'ramda';
import { Repository } from '../repository.service';

const newLineMail: string = '%0D%0A'; // Encoding for line breaks.
const newLineMenu: string = '\n\n';
const mailBeginning: string =
  'Dear friend,' +
  newLineMail +
  'Let me tell you one joke:' +
  newLineMail +
  newLineMail;
const mailEnd: string = newLineMail + newLineMail + 'I hope you liked it';

@Component({
  selector: 'app-show-all-jokes',
  templateUrl: './show-all-jokes.component.html',
  styleUrls: ['./show-all-jokes.component.css'],
})
export class ShowAllJokesComponent implements OnInit {
  public mailSubject: string = 'Wanna hear a joke? 😆';
  public mailBody: string;

  constructor(public readonly jokeRepository: Repository) {}
  starRating = 0;
  ngOnInit(): void {}

  public onDeleteJoke(joke: Joke): void {
    this.jokeRepository.jokes = this.jokeRepository.jokes.filter(
      (j) => j != joke
    );
  }

  public rate(starCount: number, joke: Joke): void {
    this.jokeRepository.jokes = this.jokeRepository.replaceJoke(
      this.jokeRepository.jokes,
      {
        index: this.jokeRepository.findJokeIndex(
          this.jokeRepository.jokes,
          joke
        ),
        newJoke: { ...joke, rating: starCount },
      }
    );
  }

  public generateMailBody(joke: Joke): string {
    return R.compose(this.formatMail, this.formatJoke)(joke);
  }

  private formatJoke(joke: Joke): string {
    return joke.jokeQuestion + newLineMail + joke.jokeAnswer;
  }

  private formatMail(text: string): string {
    return mailBeginning + text + mailEnd;
  }

  public createMatMenuFormat(joke: Joke): string {
    return R.pipe(this.formatJoke, this.replaceNewLineClosure)(joke);
  }

  // #region CurryFunction
  private replaceInText(regex: string, replacement: string, text: string) {
    return text.replace(regex, replacement);
  }

  private replaceNewLine = R.curry(this.replaceInText)(
    newLineMail,
    newLineMenu
  );
  //#endregion

  //#region Closure
  private replaceInTextClosure(regex: string, replacement: string): Function {
    return function replaceClosure(text: string) {
      return text.replace(regex, replacement);
    };
  }

  private replaceNewLineClosure = this.replaceInTextClosure(
    newLineMail,
    newLineMenu
  );
  //#endregion
}
