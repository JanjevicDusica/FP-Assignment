import { Injectable } from '@angular/core';
import { Joke } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor() {}

  public getOneJoke(url: string): Promise<any> {
    return fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        return new Joke(json.setup, json.punchline);
      })
      .catch((error) => console.error(error));
  }
}
