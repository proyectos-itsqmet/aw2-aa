import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core';

export const authGuardChildGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log(`[Guard] canActivateChild → ${_state.url}`);
  console.log(`[Guard] Ruta hija: ${_route.routeConfig?.path}`);
  console.log(`[Guard] Data: `, _route.data);

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.parseUrl('/login');
};
