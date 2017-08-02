import { Component } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

declare var google: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  lat = 40.510124;
  lng = -3.353459;
  clickableIcons = false;
  fullscreenControl	= true;
  gestureHandling = 'auto';
  keyboardShortcuts = false;
  mapDraggable = true;
  mapTypeControl = false;
  mapTypeId = 'hybrid'; // 'roadmap'|'hybrid'|'satellite'|'terrain'|string = 'roadmap';
  maxZoom = 20;
  zoom = 18;
  minZoom = 13;
  rotateControl = false;
  scrollwheel = false;
  zoomControl = true;
  disableDefaultUI = true;
  /*zoomControlOptions = {
    position: google.maps.ControlPosition.LEFT_CENTER
  };*/

  MapTypeStyles: any[] = [
    { elementType: 'geometry', stylers: [{ color: '#343F48' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#343F48' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#D6D4C2' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#343F4A' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#343F48' }, {visibility: 'simplified'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#4db6ac' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#D6D4C2' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#D6D4C2' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#343F48' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#D6D4C5' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#0097a7' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'geometry.fill',
      stylers: [{ color: '#4db6ac' }]
    }
  ];

}
