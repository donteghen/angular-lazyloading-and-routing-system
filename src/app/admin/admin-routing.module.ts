import { AuthGuard } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisisComponent } from './manage-crisis/manage-crisis.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent, canActivate:[AuthGuard],
    children: [
      {
        path: '', canActivateChild:[AuthGuard],
        children: [
          { path: 'crises-manager', component: ManageCrisisComponent },
          { path: 'heroes-manager', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent } 
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
