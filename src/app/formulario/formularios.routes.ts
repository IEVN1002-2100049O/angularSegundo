import { Routes } from "@angular/router";
export default[
    {
        path:'zodiaco',
        loadComponent:()=> import('./zodiaco/zodiaco.component')
    },
    {
        path:'ejemplo',
        loadComponent:()=> import('./ejemplo1/ejemplo1.component')
    }
] as Routes