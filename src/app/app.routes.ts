import { Routes } from '@angular/router';
import { Bienvenida } from './pages/bienvenida/bienvenida';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Error } from './pages/error/error';

export const routes: Routes = [
    {
        path: "bienvenida",
        loadComponent: () => import("./pages/bienvenida/bienvenida").then((archivo) => archivo.Bienvenida)
    }, 
    {
        path: "login",
        loadComponent: () => import("./pages/login/login").then((archivo) => archivo.Login)
    }, 
    {
        path: "registro",
        loadComponent: () => import("./pages/registro/registro").then((archivo) => archivo.Registro)
    }, 
    {
        path: "sobre-mi",
        loadComponent: () => import("./pages/sobre-mi/sobre-mi").then((archivo) => archivo.SobreMi)
    }, 
    {
        path: "",
        redirectTo: "bienvenida",
        pathMatch: "full"
    }, 
    {
        path: "**",
        loadComponent: () => import("./pages/error/error").then((archivo) => archivo.Error)
    }
];
