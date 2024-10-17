import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes')
    },
    {
        path:'form',
        loadChildren: () => import('./formulario/formularios.routes')
    },
    {
        path:'*',
        redirectTo:''
    }
];
