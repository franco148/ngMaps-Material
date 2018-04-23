import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Moving material dependencies to material.module.ts

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapsComponent } from './components/maps/maps.component';
import { EditMapComponent } from './components/maps/edit-map.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  // The following is when we need to use an external component for popups for example
  entryComponents: [
    EditMapComponent
  ],
  declarations: [
    AppComponent,
    MapsComponent,
    EditMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAORmAqH2yaf9VATdFU4pczSi2lStAf9E8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
