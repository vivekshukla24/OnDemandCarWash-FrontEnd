import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddOrderComponent } from './OrderAux/add-order/add-order.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AllOrdersComponent } from './OrderAux/all-orders/all-orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { WasherDashboardComponent } from './Washer/washer-dashboard/washer-dashboard.component';
import { UnassignedOrdersComponent } from './OrderAux/unassigned-orders/unassigned-orders.component';
import { CancelledOrdersComponent } from './OrderAux/cancelled-orders/cancelled-orders.component';
import { PendingOrdersComponent } from './OrderAux/pending-orders/pending-orders.component';
import { CompletedOrdersComponent } from './OrderAux/completed-orders/completed-orders.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotAuthComponent } from './not-auth/not-auth.component';
import { AuthGuardService } from './authGuard/auth-guard.service';
import { GetallWashersComponent } from './Admin/getall-washers/getall-washers.component';
import { GetallUsersComponent } from './Admin/getall-users/getall-users.component';
import { UpdateOrderComponent } from './OrderAux/update-order/update-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuardService],
    data: { roles: ['ADMIN'] },
    children: [
      {
        path: 'completed',
        component: CompletedOrdersComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'pending',
        component: PendingOrdersComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'unassigned',
        component: UnassignedOrdersComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'cancelled',
        component: CancelledOrdersComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'allOrders',
        component: AllOrdersComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'addOrder',
        component: AddOrderComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'updateOrder/:id',
        component: UpdateOrderComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'users',
        component: GetallUsersComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'washers',
        component: GetallWashersComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [AuthGuardService],
    data: { roles: ['USER'] },
    children: [
      {
        path: 'addOrder',
        component: AddOrderComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'updateOrder',
        component: UpdateOrderComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'updateOrder/:id',
        component: UpdateOrderComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
  {
    path: 'washer',
    component: WasherDashboardComponent,
    canActivate: [AuthGuardService],
    data: { roles: ['WASHER'] },
    children: [
      {
        path: 'unassigned',
        component: UnassignedOrdersComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'badcred', component: NotAuthComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      console.log(error);
      this.router.navigate(['/404']);
    };
  }
}
export const routingComponents = [
  UserDashboardComponent,
  WasherDashboardComponent,
  AdminDashboardComponent,
  AboutusComponent,
  PageNotFoundComponent,
];
