import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Crisis } from './crisis';
import { CRISES } from "./mock-crises";


@Injectable({
    providedIn: 'root',
  })
  export class CrisisService {
  
    constructor() { }
  
    getCrises(): Observable<Crisis[]> {
      // TODO: send the message _after_ fetching the heroes
      //this.messageService.add('HeroService: fetched heroes');
      return of(CRISES);
    }
    getCrisis(id:number):Crisis{
    return CRISES.find(h => h.id == id);
    }
  }