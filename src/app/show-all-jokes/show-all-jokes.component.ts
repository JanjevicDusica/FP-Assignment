import { Component, OnInit } from '@angular/core';
import { Joke } from '../app.component';
import { Repository } from '../repository.service';

@Component({
  selector: 'app-show-all-jokes',
  templateUrl: './show-all-jokes.component.html',
  styleUrls: ['./show-all-jokes.component.css'],
})
export class ShowAllJokesComponent implements OnInit {
  constructor(public readonly jokeRepository: Repository) {}
  starRating = 0;
  ngOnInit(): void {}

  public onDeleteJoke(joke: Joke): void {
    this.jokeRepository.jokes = this.jokeRepository.jokes.filter(
      (j) => j != joke
    );
  }

  public rate(starCount: number, joke: Joke): void {
    this.jokeRepository.jokes = this.jokeRepository.replaceJoke({
      index: this.jokeRepository.findJokeIndex(joke),
      newJoke: { ...joke, rating: starCount },
    });
  }
}
