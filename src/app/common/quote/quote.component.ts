import { Component, OnInit, Input } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() resetQuoteSubject: Subject<boolean> = new Subject<boolean>();

  quotes: any;
  quote: any;
  randomIndex: number = 0;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {

    this.resetQuoteSubject.subscribe(response => {
      if (response) {
        // Or do whatever operations you need.
        this.quote = this.getRandomQuote();
      }
    });

    this.getAllQuote();

  }

  getAllQuote() {
    this.quoteService.getQuotes().subscribe(response => {
      this.quotes = response;
      this.quote = this.getRandomQuote();
    })
  }

  getRandomQuote() {
    this.randomIndex = Math.floor((Math.random() * 1643));
    return this.quotes[this.randomIndex];
  }
}
