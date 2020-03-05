import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchOption: string = 'restaurant';
  restaurant: string = 'restaurant';
  event: string = 'event';
  userLocation: any = {};
  options: any = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  showRestaurantOptions: boolean = true;
  showEventOptions: boolean = false;

  searchterm: string = '';
  searchPrice: string = '';
  openNow: boolean = false;

  sortBy: string = 'rating';
  sortByRating: string = 'rating';
  sortByBestMatch: string = 'best_match';

  startDate: Date;
  endDate: Date;

  showWarning: boolean = false;
  warning: string;

  constructor(
    private apiService: ApiServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position =>
      this.userLocation = position
    ), err => (
      console.warn(`ERROR(${err.code}): ${err.message}`)
    ),
      this.options);
  }

  async search() {
    if (this.searchOption === undefined) {
      this.showWarning = true;
      this.warning = 'Please select a search option';
    } else {
      this.showWarning = false;
      let searchResults;

      switch (this.searchOption) {
        case 'event':
          if (this.startDate == undefined || this.endDate == undefined) {
            this.showWarning = true;
            this.warning = 'Please select start and end date for event filter';
          } else {
            this.showWarning = false;
            const params = {
              longitude: this.userLocation.coords.longitude,
              latitude: this.userLocation.coords.latitude,
              start_date: this.dateToUtcTimeStamp(this.startDate),
              end_date: this.dateToUtcTimeStamp(this.endDate),
              limit: 30
            }
            searchResults = await this.apiService.searchForEvents(params)
          }
          break;
        default:
          searchResults = await this.apiService.searchForBusiness({
            type: this.restaurant,
            options: {
              term: this.searchterm,
              price: this.searchPrice,
              limit: 10,
              sort_by: this.sortBy,
              latitude: this.userLocation.coords.latitude,
              longitude: this.userLocation.coords.longitude,
              open_now: this.openNow
            }
          });
      }

      this.router.navigate(['list'], {
        state: {
          data: searchResults
        }
      });
    }

  }

  updateSearchOptions(option) {
    if (option == this.restaurant) {
      this.showRestaurantOptions = true;
      this.showEventOptions = false;
    }

    if (option == this.event) {
      this.showRestaurantOptions = false;
      this.showEventOptions = true;
    }
  }

  dateToUtcTimeStamp(date) {
    return Date.parse(date) / 1000;
  }
}
