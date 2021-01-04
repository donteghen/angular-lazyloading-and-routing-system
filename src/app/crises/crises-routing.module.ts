import { CanDeactivateGuard } from './can-deactivate.guard';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';


const routes: Routes = [
  {path:'', component:CrisisListComponent},
  {path:':id', component:CrisisDetailsComponent, canDeactivate:[CanDeactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisesRoutingModule { }
