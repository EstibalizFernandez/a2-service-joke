import { JokeGeneratorService } from './../../services/joke-generator.service';
import { Joke } from './../../shared/models/joke.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html'
})
export class RandomJokeComponent implements OnInit {

  joke: Joke;
  constructor(private jokeGenerator: JokeGeneratorService) { }

  ngOnInit() {
    this.getTheRandomJoke();
  }

  onClickJoke() {
   this.getTheRandomJoke();
  }

  private getTheRandomJoke(): void {
    this.jokeGenerator.getRandomJoke().subscribe((aJoke: Joke) => {
      this.joke = aJoke;
    });
  }

  addJoke(joke): void {
    this.jokeGenerator.pushAddJoke(joke);
  }

}
