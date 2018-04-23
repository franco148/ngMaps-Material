import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

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

  markers: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() {

    const newMarker = new Marcador(51.678418, 7.809007);

    this.markers.push(newMarker);
  }

  ngOnInit() {
  }

  addMarker(event) {
    // console.log(event);
    const latitud = event.coords.lat;
    const longitud = event.coords.lng;

    const addedMarker = new Marcador(latitud, longitud);
    this.markers.push(addedMarker);
  }

}
