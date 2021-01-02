import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisesListComponent } from './crises-list/crises-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'crisis-list', component:CrisesListComponent},
  {path:'heroes', 
  loadChildren : () => import('./heroes/heroes.module').then(m => m.HeroesModule)},
  {path:'', pathMatch:'full', redirectTo:'/heroes'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
