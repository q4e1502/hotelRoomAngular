import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { RoomApi }              from '../services/api/room.api';
import { Room }                       from '../services/room';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'room-detail',
  templateUrl: '../views/room-detail.component.html',
  styleUrls: ['../style.scss']
})

export class RoomDetailComponent implements OnInit{

  constructor(
    private RoomApi: RoomApi,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

}