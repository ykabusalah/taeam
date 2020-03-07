import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MouseEvent } from '@agm/core';

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  name: string;
  image_url: string;
  address: string;
  description?: string;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  data: any;
  businesses: any;
  events: any;

  // google maps zoom level
  zoom: number = 10;

  // initial center position for the map
  lat: number;
  lng: number;

  markers: marker[];

  options: any = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  constructor(
    private router: Router
  ) {
    this.data = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    // set to use user location for map centering

    navigator.geolocation.getCurrentPosition((position => {
      this.lng = position.coords.longitude
      this.lat = position.coords.latitude
    }), err => (
      console.warn(`ERROR(${err.code}): ${err.message}`)
    ),
      this.options);

    // business/events passed as search results from home
    this.businesses = this.data.businesses;
    this.events = this.data.events

    if (this.businesses) {
      this.markers = this.buildMarkersFromBusinesses(this.businesses)
    }
    if (this.events) {
      this.markers = this.buildMarkersFromEvents(this.events)
    }
  }

  goToDetailPage(id) {
    this.router.navigate(['business-detail', id]);
  }

  goToEventDetailPage(id) {
    this.router.navigate(['event-detail', id]);
  }

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }


  // map methods
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  buildMarkersFromBusinesses(businesses) {
    return businesses.map(business => (
      {
        lat: parseFloat(business.coordinates.latitude),
        lng: parseFloat(business.coordinates.longitude),
        name: business.name,
        image_url: business.image_url,
        address: `${business.location.address1}, ${business.location.city},${business.location.country}`
      }
    ))
  }

  buildMarkersFromEvents(events) {
    return events.map(event => (
      {
        lat: parseFloat(event.latitude),
        lng: parseFloat(event.longitude),
        name: event.name,
        image_url: event.image_url,
        address: `${event.location.address1}, ${event.location.city},${event.location.country}`,
        description: event.description
      }
    ))
  }

  backToHome(){
    this.router.navigate(['home']);
  }
}
