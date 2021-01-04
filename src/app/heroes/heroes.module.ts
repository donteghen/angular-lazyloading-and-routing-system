import { SharedModule } from './../shared/shared.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { NgModule } from '@angular/core';


import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
  imports: [
    HeroesRoutingModule,
    SharedModule
  ],
  declarations: [HeroListComponent, HeroDetailComponent],
  
})
export class HeroesModule { }
