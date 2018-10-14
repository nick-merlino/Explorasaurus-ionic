import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';

let cities = require('../cities.json');

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  date = new Date().toISOString();
  sourceSearchTerm: string = '';
  sourceOptions;
  destinationOptions;
  locs = cities;
  destinationSearchTerm: string = '';

  constructor(){}

  goToSearchResults() {}

  ionViewDidLoad() {
    this.setFilteredItems();
  }

  setDestSearchTerm(term) {
    this.destinationSearchTerm = term;
  }

  setFilteredDestItems() {
    this.destinationOptions = this.locs.filter((city) => city.startsWith(this.destinationSearchTerm));
  }

  setSourceSearchTerm(term) {
    this.sourceSearchTerm = term;
  }

  setFilteredItems() {
    this.sourceOptions = this.locs.filter((city) => city.startsWith(this.sourceSearchTerm));
  }
}
