import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditMapComponent } from './edit-map.component';

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

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {

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

    // Simple message with an action.
    this.snackBar.open('New marker has been added.', 'Close', { duration: 3000 });
  }

  removeMarker(index: number) {
    this.markers.splice(index, 1);
    this.saveInfoToLocalStorage();

    // Simple message with an action.
    this.snackBar.open(`marker #${ index } has been removed.`, 'Close', { duration: 3000 });
  }

  editMarker(marker: Marcador) {
    const dialogRef = this.dialog.open(EditMapComponent, {
      width: '250px',
      data: { title: marker.title, description: marker.description }
    });
  }

  saveInfoToLocalStorage() {
    localStorage.setItem('mapMarkers', JSON.stringify(this.markers));
  }

}
