import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DialogService {

  confirm(message? : string):Observable<boolean>{
    const confirmatiom = window.confirm(message || 'Do want to save changes?')
    return of(confirmatiom)   
  }
}
