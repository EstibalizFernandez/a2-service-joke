import { TestBed, inject } from '@angular/core/testing';

import { JokeGeneratorService } from './joke-generator.service';

describe('JokeGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeGeneratorService]
    });
  });

  it('should be created', inject([JokeGeneratorService], (service: JokeGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
