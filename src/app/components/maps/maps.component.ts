import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styles: [`
    agm-map {
      height: 600px;
    }
  `]
})
export class MapsComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
