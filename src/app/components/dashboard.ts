import { Component, OnInit } from '@angular/core';
import { Room } from '../services/room';
import { RoomApi } from '../services/api/room.api';

@Component({
  selector: 'my-dashboard',
  templateUrl: '../views/dashboard.component.html',
  styleUrls: ['../style.scss'],
})

export class DashboardComponent implements OnInit{
  rooms: Room[] = [];
  constructor(
    private RoomApi: RoomApi ) { }

  ngOnInit(): void {
    this.RoomApi.getRooms().then(rooms => this.rooms = rooms);
  }
}