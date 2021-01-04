import { DialogService } from './dialog.service';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CrisisDetailsComponent> {
  constructor(private diaService:DialogService){}
  canDeactivate(
    component: CrisisDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!component.crises || component.crises.name === component.editName) return true
    return this.diaService.confirm('Discard Changes?')
  }
  
}
