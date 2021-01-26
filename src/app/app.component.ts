import { Component, ViewEncapsulation } from '@angular/core';
import { JokeService } from './joke.service';
import * as R from 'ramda';
import { Repository } from './repository.service';

const INITIAL_TITLE: string = 'Wanna hear a joke?';
const NEXT_JOKE_TITLE: string = 'Want another one?';

export class Joke {
  constructor(
    public jokeQuestion: string,
    public jokeAnswer: string,
    public rating: number = 0
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public title: string = INITIAL_TITLE;
  public showAllJokes: boolean;
  public showJoke: boolean = false;
  public joke: Joke;

  constructor(
    private readonly service: JokeService,
    private readonly jokeRepository: Repository
  ) {
    let arr2 = [1, 2, 4, 5, 6].map((x) => x + 1);
    console.log(arr2);
    let arr1 = R.map((x) => [x, x + 1], [1, 2, 4, 5, 6]);
    console.log(arr1);

    const duplicate = (n) => [n, n];
    console.log(R.chain(duplicate, [1, 2, 3]));
  }

  public async onHearJoke(): Promise<void> {
    this.title = NEXT_JOKE_TITLE;
    const JOKE_API_URL = 'https://official-joke-api.appspot.com/jokes/random';
    this.showJoke = false;
    this.joke = await this.service.fetch(JOKE_API_URL);
    this.showJoke = true;
  }

  public showJokes(showAllJokes: boolean): void {
    this.showAllJokes = showAllJokes;
  }

  public onLikeJoke(liked: boolean) {
    this.jokeRepository.jokes = this.jokeRepository.likeORUnlike({
      liked,
      data: this.joke,
      jokes: this.jokeRepository.jokes,
    });
  }
}
