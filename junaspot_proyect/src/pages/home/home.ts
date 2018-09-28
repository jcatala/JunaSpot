import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//DONE BY ME

import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker, GoogleMapsAnimation, GoogleMapOptions
} from "@ionic-native/google-maps";

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  map: GoogleMap;
  user_info: {};


  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public googleMaps: GoogleMaps,
              public database: AngularFireDatabase) {

  }

  ionViewDidLoad(){



  };


  //metodo a cargo de cargar el mapa

  loadMap(positiona: Geoposition){

    let latitude = positiona.coords.latitude;
    let longitud = positiona.coords.longitude;

    let element: HTMLElement = document.getElementById("map");

    let map: GoogleMap = this.googleMaps.create(element);

    this.map = map;

    //LAT LNG OBJECT
    let myPosition: LatLng = new LatLng(latitude, longitud);

    //POSICION DE LA CAMARA
    let position: CameraPosition<LatLng> = {
      target: myPosition,
      zoom:18,
      tilt:60
    };


    map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map rudy");

      this.map.setMyLocationEnabled(true);
      map.moveCamera(position);
    })

  }

}
