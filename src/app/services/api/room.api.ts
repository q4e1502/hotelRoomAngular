import { Injectable }          from '@angular/core';
import { Headers, Http }       from '@angular/http';
import { API_URL }             from '../../constant';
import { Room }                from '../room';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RoomApi {
  private get_all_room = API_URL + "/rooms/get_rooms";
  rooms: Room[] = [];

  constructor(private http: Http) { }

  getRooms(): Promise<Room[]>{
    return this.http.get(this.get_all_room)
                    .toPromise()
                    .then(this.responeData)
                    .catch(this.handleError);
  }

  private responeData(response) {
    return response.json() as Room[]
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
