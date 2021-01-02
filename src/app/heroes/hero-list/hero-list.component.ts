import { HeroService } from './../hero-service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
heroes:Hero[]
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(data => this.heroes = data);
  }

}
