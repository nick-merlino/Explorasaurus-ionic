import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { SearchPage } from '../search/search.page';
import { SavedPage } from '../saved/saved.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(search:search)',
        pathMatch: 'full',
      },
      {
        path: 'search',
        outlet: 'search',
        component: SearchPage
      },
      {
        path: 'saved',
        outlet: 'saved',
        component: SavedPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(search:search)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
