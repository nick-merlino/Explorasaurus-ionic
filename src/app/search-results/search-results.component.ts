import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  shouldSortByPrice;
  searchResults = []

  constructor() { 
    this.shouldSortByPrice = true;
  }

  ngOnInit() {
  }

}
