import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core';

export const authGuardChildGuard: CanActivateChildFn = (_route, _state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log(`[Guard] ${_state.url}`);
  console.log(`[Guard] Ruta hija: ${_route.routeConfig?.path}`);
  console.log(`[Guard] Data: `, _route.data);

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.parseUrl('/login');
};

// class UserToken {}
// class Permissions {
//   canActivate(user: UserToken, id: string): boolean {
//     return true;
//   }
// }
// @Injectable()
// class CanActivateTeam implements CanActivateChild {
//   constructor(private permissions: Permissions, private currentUser: UserToken) {}
//   canActivateChild(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): MaybeAsync<GuardResult> {
//     return this.permissions.canActivate(this.currentUser, route.params.id);
//   }
// }

// @NgModule({
//   imports: [
//     RouterModule.forRoot([
//       {
//         path: 'root',
//         canActivateChild: [CanActivateTeam],
//         children: [
//           {
//              path: 'team/:id',
//              component: TeamComponent
//           }
//         ]
//       }
//     ])
//   ],
//   providers: [CanActivateTeam, UserToken, Permissions]
// })
// class AppModule {}
