import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { YELP_FUSION_API_URL, API_CREDENTIALS } from './config';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }

  // businesses
  searchForBusiness(searchOptions) {
    const apiUrl = YELP_FUSION_API_URL.BUSINESS;
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${API_CREDENTIALS.API_Key}`
    }

    const params = {
      term: searchOptions.options.term,
      longitude: searchOptions.options.longitude,
      latitude: searchOptions.options.latitude,
    }

    console.log(params, 'params =====')
    return this.http.get<JSON>(`${apiUrl}/search`, { params, headers }).toPromise()
      .then(response => {
        console.log(response, 'respomnse from YELP ===>')
        return response
      })
      .catch(error => {
        console.log(error)
        return false;
      })
  }

  getBusinessDetail(id){
    const apiUrl = YELP_FUSION_API_URL.BUSINESS
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${API_CREDENTIALS.API_Key}`
    }

    return this.http.get<JSON>(`${apiUrl}/${id}`, { headers }).toPromise()
      .then(response => {
        console.log(response, 'respomnse from YELP ===>')
        return response
      })
      .catch(error => {
        console.log(error)
        return false;
      })
  }

  // events
  searchForEvents(params) {
    const apiUrl = YELP_FUSION_API_URL.EVENTS;

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${API_CREDENTIALS.API_Key}`
    }

    console.log(params, 'params =====')
    return this.http.get<JSON>(`${apiUrl}`, { params, headers }).toPromise()
      .then(response => {
        console.log(response, 'respomnse from YELP ===>')
        return response
      })
      .catch(error => {
        console.log(error)
        return false;
      })
  }

  getEventDetail(id){
    const apiUrl = YELP_FUSION_API_URL.EVENTS
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${API_CREDENTIALS.API_Key}`
    }

    return this.http.get<JSON>(`${apiUrl}/${id}`, { headers }).toPromise()
      .then(response => {
        console.log(response, 'respomnse from YELP ===>')
        return response
      })
      .catch(error => {
        console.log(error)
        return false;
      })
  }
}
