import { HeroService } from './../hero-service';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
hero:Hero;
  constructor(private activeRoute:ActivatedRoute, private heroService:HeroService, private router:Router) { }

  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id'];
    if(id < 11 || id >20){
      console.log(true)
      this.router.navigateByUrl('/heroes/11');
      this.hero = this.heroService.getHero(11);
      return
    }
    this.heroService.getHeroes().subscribe(data =>{
      this.hero = data.find(h => h.id == id);
      console.log(this.hero)
    })
  }
 
  getNext(id:number){
    if( id == 20){
      console.log(true)
      this.router.navigateByUrl("/heroes/20");
     // this.hero = this.heroService.getHero(20);
      return
    }
    const newId = id + 1;
    this.router.navigateByUrl(`/heroes/${newId}`);
    this.hero = this.heroService.getHero(newId);
    
  }  
  getPrevious(id:number){
    if(id == 11){
      console.log(true)
      this.router.navigateByUrl('/heroes/11');
     // this.hero = this.heroService.getHero(11);
      return
    }
    const newId = id - 1;
    this.router.navigateByUrl(`/heroes/${newId}`);
    this.hero = this.heroService.getHero(newId);
  }
  }
  
