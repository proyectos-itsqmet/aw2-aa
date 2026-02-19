import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { Register } from './features/register/register';
import { NotFound } from './features/not-found/not-found';
import { authGuardChildGuard } from './guards/auth-child-guard';
import { CanActivateChild } from './features/can-activate-child/can-activate-child';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    canActivateChild: [authGuardChildGuard],
    children: [
      {
        path: 'can-activate-child',
        component: CanActivateChild,
      },
    ],
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  { path: '**', component: NotFound },
];
