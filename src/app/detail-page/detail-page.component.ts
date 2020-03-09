import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  business: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private apiService: ApiServiceService,
  ) { }

  ngOnInit(): void {
    this.getBusinessDetail().then(res => this.business = res);
  }

  async getBusinessDetail(){
    const businessId = this.activeRoute.snapshot.paramMap.get('id')
    const response = await this.apiService.getBusinessDetail(businessId);

    return response;
  }
}

