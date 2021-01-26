import { Joke } from './app.component';
import * as R from 'ramda';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Repository {
  public jokes: Joke[] = new Array();
  constructor() {}

  public likeORUnlike = R.ifElse(
    (x) => x.liked,
    (x) => [...x.jokes, x.data],
    (x) => x.jokes.filter((j) => j != x.data)
  );

  public replaceJoke(
    jokes: Joke[],
    data: { newJoke: Joke; index: number }
  ): Joke[] {
    return [
      ...jokes.slice(0, data.index),
      data.newJoke,
      ...jokes.slice(data.index + 1, jokes.length),
    ];
  }

  public findJokeIndex(jokes: Joke[], joke: Joke): number {
    return jokes.findIndex((j) => j === joke);
  }
}
