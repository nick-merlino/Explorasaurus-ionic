import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { SavedPageModule } from '../saved/saved.module';
import { SearchPageModule } from '../search/search.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    SearchPageModule,
    SavedPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
