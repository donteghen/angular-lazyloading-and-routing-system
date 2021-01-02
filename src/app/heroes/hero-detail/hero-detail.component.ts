import { HeroService } from './../hero-service';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
hero:Hero;
  constructor(private activeRoute:ActivatedRoute, private heroService:HeroService) { }

  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id'];
    this.heroService.getHeroes().subscribe(data =>{
      this.hero = data.find(h => h.id == id);
      console.log(this.hero)
    })
  }
 
  }
  
