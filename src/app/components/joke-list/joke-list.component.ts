import { JokeGeneratorService } from './../../services/joke-generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html'
})
export class JokeListComponent implements OnInit {

  constructor(private jokeGenerator: JokeGeneratorService) { }

  ngOnInit() {
  }

  


}
