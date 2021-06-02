import { Component, Input, OnInit, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  @ViewChild('mapa', { static: true }) mapa: any;

  constructor() { }

  ngOnInit() {

    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);


    mapboxgl.accessToken = 'pk.eyJ1IjoidmljdG9yY29yc2lubyIsImEiOiJja2h6ZHJhcGwwa3IxMnJuMHhreWVhNDNuIn0.46PqhI9MSLF1zNrp0KEqFQ';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 15,
      center: [ lng, lat ],
    });

    const marker = new mapboxgl.Marker()
      .setLngLat( [ lng, lat ] )
      .addTo( map );
  }

}
