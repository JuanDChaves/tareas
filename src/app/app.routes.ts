import { Routes } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Error } from './error/error';

export const routes: Routes = [
    {
        path: "bienvenida",
        component: Bienvenida
    }, 
    {
        path: "login",
        component: Login
    }, 
    {
        path: "registro",
        component: Registro
    }, 
    {
        path: "sobre-mi",
        component: SobreMi
    }, 
    {
        path: "",
        redirectTo: "bienvenida",
        pathMatch: "full"
    }, 
    {
        path: "**",
        component: Error
    }
];
