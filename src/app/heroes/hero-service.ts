import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable({
    providedIn: 'root',
  })
  export class HeroService {
  
    constructor() { }
  
    getHeroes(): Observable<Hero[]> {
      // TODO: send the message _after_ fetching the heroes
      //this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
    }
  }