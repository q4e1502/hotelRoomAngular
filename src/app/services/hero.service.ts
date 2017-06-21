import { Injectable } from '@angular/core';
import { Headers, Http }       from '@angular/http';
import { Hero } from '../services/utils/hero';
import { rooms, API_URL } from '../services/utils/mock-hero';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private roomssUrl = API_URL + "/rooms/get_rooms";

  constructor(private http: Http) { }

  getheroes(): Promise<Hero[]> {
    return Promise.resolve(rooms);
  }

  getHero(id: number): Promise<Hero> {
    return this.getheroes()
               .then(rooms => rooms.find(hero => hero.id === id));
  }


  getRooms(): Promise<Hero[]>{
    return this.http.get(this.roomssUrl)
                    .toPromise()
                    .then(response => response.json() as Hero[])
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
