import { Injectable } from '@angular/core';
import { Joke } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor() {}

  public fetch(url: string) {
    return this.fetchIt(url).fork(console.log, (x) => x);
  }

  public fetchIt(url: string) {
    return Task((reject, resolve) =>
      fetch(url)
        .then((resp) => resp.json())
        .then((json) => new Joke(json.setup, json.punchline))
        .then(resolve)
        .catch(reject)
    );
  }
}

const Task = (fork) => ({
  map: (f) => Task((reject, resolve) => fork(reject, (a) => resolve(f(a)))),
  chain: (f) =>
    Task((reject, resolve) => fork(reject, (a) => f(a).fork(reject, resolve))),
  fork,
});
