import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  data: any;
  businesses: any;
  events: any;

  constructor(
    private router: Router
  ) {
    this.data = this.router.getCurrentNavigation().extras.state.data;
   }

  ngOnInit(): void {
    this.businesses = this.data.businesses;
    this.events = this.data.events
  }

  goToDetailPage(id){
    this.router.navigate(['business-detail', id]);
  }

  goToEventDetailPage(id){
    this.router.navigate(['event-detail', id]);
  }

}
