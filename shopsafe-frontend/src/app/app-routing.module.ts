import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ResultComponent } from './result/result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { 
    path: '', 
    component: LandingComponent 
  },
  {
    path: 'result', 
    component: ResultComponent, 
  },
  { 
    path: 'store', 
    component: StoreComponent,
    children: [
      {
        path: 'store/:name',
        component: StoreComponent,
      }
      // TODO: dynamic routing based on store name using https://medium.com/@itsyou/angular-dynamic-routes-with-easy-example-c3fa64fbc768
    ] 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: "**", 
    component: PageNotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
