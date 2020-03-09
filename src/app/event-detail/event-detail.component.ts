import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getEventDetail().then(res => this.event = res)
  }

  async getEventDetail(){
    const businessId = this.activeRoute.snapshot.paramMap.get("id")
    const response = await this.apiService.getEventDetail(businessId);

    return response;
  }
}
