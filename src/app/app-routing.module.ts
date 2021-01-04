import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { MessageComponent } from './message/message.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'crises', 
  loadChildren:() => import('./crises/crises.module').then(m => m.CrisesModule)},
  {path:'heroes', 
  loadChildren : () => import('./heroes/heroes.module').then(m => m.HeroesModule)},
  {path:'admin', 
  loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'message',  component:MessageComponent, outlet:'popup'},
  {path:'login', component:LoginComponent},
  {path:'', pathMatch:'full', redirectTo:'/heroes'},
  
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
