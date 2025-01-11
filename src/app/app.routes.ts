import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'impressum',
        loadComponent: () => import('./pages/impressum/impressum.component').then(c => c.ImpressumComponent)
    }
];
