import { JokeGeneratorService } from './../../services/joke-generator.service';
import { Component, OnInit } from '@angular/core';
import { Joke } from '../../shared/models/joke.model';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html'
})
export class JokeListComponent implements OnInit {

  constructor(private jokeGenerator: JokeGeneratorService) { }

  ngOnInit() {
  }

  getJokeList(): Array<Joke> {
    return this.jokeGenerator.getArrayJoke();
  }
}
