import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ActionCable from 'actioncable';
import { HeroService } from '../services/hero.service';
import { Hero } from '../services/utils/hero';
import { CABLE_URL } from '../services/utils/mock-hero';

@Component({
  selector: 'my-heroes',
  templateUrl: '../views/heroes.component.html',
  styleUrls: ['../style.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit{
  cable: any;
  subscription: any;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHeroes();
    this.subscribe(CABLE_URL, "RoomsChannel");
  }

  setCable(url): void {
    this.cable = ActionCable.createConsumer(url);
  }

  subscribe(url, channel) {
    this.setCable(url);
    this.subscription = this.cable.subscriptions.create(channel, {
      connected: () => {
        console.log('Connected WS')
      },
      received: (data) => {
        console.log(data)
      }
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getRooms().then( heroes => this.heroes = heroes );
  }

  getRooms(): void {
    this.heroService.getRooms().then( heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
