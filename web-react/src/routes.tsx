import { lazy } from 'react';

const IndexDashboard = lazy(() => import('dashboard/IndexDashboard'));
const IndexCountry = lazy(() => import('features/a/country/containers/IndexCountry'));
const FormCountry = lazy(() => import('features/a/country/containers/FormCountry'));
const IndexEstate = lazy(() => import('features/a/estate/containers/IndexEstate'));
const IndexCity = lazy(() => import('features/a/city/containers/IndexCity'));
const NoMatchShared = lazy(() => import('shared/components/NoMatchShared'));

const routes = [
  { path: '/city', component: IndexCity },
  { path: '/estate', component: IndexEstate },
  {
    path: '/country', component: IndexCountry, routes: [
      { path: '/country/create', component: FormCountry },
      { path: '/country/edit/:countryId', component: FormCountry },
    ]
  },
  { path: '/', component: IndexDashboard },
  { path: '*', component: NoMatchShared }
];

export default routes;