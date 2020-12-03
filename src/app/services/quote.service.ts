import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private httpClient: HttpClient) { }

  private quoteEndpoint = environment.quote_service;

  getQuotes() {
    const url = this.quoteEndpoint;
    return this.httpClient.get(url);
  }
}
