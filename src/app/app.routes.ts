import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../Pages/home/home').then(m => m.Home),
    title: 'Aurelis — Home',
  },
  {
    path: 'store',
    loadComponent: () =>
      import('../Pages/store/store').then(m => m.Store),
    title: 'Aurelis — Our Store',
  },
  {
    path: 'collections',
    loadComponent: () =>
      import('../Pages/collections/collections').then(
        m => m.Collections
      ),
    title: 'Aurelis — Collections',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../Pages/about/about').then(m => m.About),
    title: 'Aurelis — About',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../Pages/contact/contact').then(
        m => m.Contact
      ),
    title: 'Aurelis — Contact',
  },
  {
    path: '**',
    redirectTo: '',
  },
];