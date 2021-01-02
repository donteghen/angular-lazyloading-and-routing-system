import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class HeroesModule { }
