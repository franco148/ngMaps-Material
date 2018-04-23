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

    if (localStorage.getItem('mapMarkers')) {
      this.markers = JSON.parse(localStorage.getItem('mapMarkers'));
    }
  }

  ngOnInit() {
  }

  addMarker(event) {
    // console.log(event);
    const latitud = event.coords.lat;
    const longitud = event.coords.lng;

    const addedMarker = new Marcador(latitud, longitud);
    this.markers.push(addedMarker);

    this.saveInfoToLocalStorage();
  }

  removeMarker(index: number) {
    this.markers.splice(index, 1);
    this.saveInfoToLocalStorage();
  }

  saveInfoToLocalStorage() {
    localStorage.setItem('mapMarkers', JSON.stringify(this.markers));
  }

}
