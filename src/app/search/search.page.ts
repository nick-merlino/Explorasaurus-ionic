import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  date = new Date().toISOString();
  sourceSearchTerm: String = '';
  sourceOptions;
  locs = ["hi", "there"]

  ionViewDidLoad() {
       this.setFilteredItems();
   }

   setFilteredItems() {
       this.sourceOptions = this.locs.filter((city) => city.startsWith(this.sourceSearchTerm));
   }
}
