import { Joke } from './../shared/models/joke.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JokeGeneratorService {
  private url: string = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }
  
  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.url);
  }
}
