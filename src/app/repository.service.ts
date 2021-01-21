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

  public replace(
    supplier: Function,
    data: { newJoke: Joke; index: number }
  ): Joke[] {
    return [
      ...supplier().slice(0, data.index),
      data.newJoke,
      ...supplier().slice(data.index + 1, supplier().length),
    ];
  }

  public findIndex(supplier: Function, joke: Joke): number {
    return supplier().findIndex((j) => j === joke);
  }

  public replaceJoke = R.curry(this.replace)(() => this.jokes);
  public findJokeIndex = R.curry(this.findIndex)(() => this.jokes);
}
