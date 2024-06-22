import { Routes } from '@angular/router';
import { BodyComponent } from './layout/body/body.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        component: BodyComponent,
        children: [
            {
                path: "home",
                component: HomeComponent
            },
            {
                path: "",
                component: HomeComponent
            },
            
        ]
    },
];
