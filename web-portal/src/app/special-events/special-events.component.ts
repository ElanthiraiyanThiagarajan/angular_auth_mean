import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrl: './special-events.component.css'
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = []


  constructor(private _eventService: EventService, private _router: Router) { }
  ngOnInit(): void {

    this._eventService.getEventSpecials().subscribe(data => {
      this.specialEvents = data;
    }, err => {
      console.log(err);
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this._router.navigate(['/login'])
        }
      }
    });
  }

}
