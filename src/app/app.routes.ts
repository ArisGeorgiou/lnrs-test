import { Routes } from '@angular/router';
import {CompanySearchComponent} from "./components/company-search/company-search.component";

export const routes: Routes = [
  {
    path: 'search',
    pathMatch: 'full',
    component: CompanySearchComponent,
  },
  {
    path: 'results/:searchTerm',
    loadComponent: () => import('./components/company-search-results/company-search-results.component').then((m) => m.CompanySearchResultsComponent),
    canActivate: [],
    pathMatch: 'full',
  },
  {
    path: 'details',
    loadComponent: () => import('./components/company-detail/company-detail.component').then((m) => m.CompanyDetailComponent),
    canActivate: [],
    loadChildren: () => DETAILS_CHILDREN_ROUTES
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/search'
  },
];

const DETAILS_CHILDREN_ROUTES: Routes = [
  {
    path: 'officers/:companyNumber',
    loadComponent: () => import('./components/officer-list/officer-list.component').then((m) => m.OfficerListComponent),
    canActivate: [],
  },
];
