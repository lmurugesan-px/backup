import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { PxDashboardComponent } from './px-dashboard/px-dashboard.component';
import { PxLoginComponent } from './px-login/px-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: PxLoginComponent,
  },
  {
    path: 'dashboard',
    component: PxDashboardComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
