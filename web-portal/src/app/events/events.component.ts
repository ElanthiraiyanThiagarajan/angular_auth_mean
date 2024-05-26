import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService) { }

  events = [];


  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      console.log(data);
      this.events = data;
    }, err => {
      console.log(err);
    });

  }



}
