import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  {
    path: 'admin',component: AdminDashboardComponent,
    children: [
      { path: 'completed', component: CompletedOrdersComponent},
      { path: 'pending', component: PendingOrdersComponent },
      { path: 'unassigned', component: UnassignedOrdersComponent },
      { path: 'cancelled', component: CancelledOrdersComponent },
      { path: 'allOrders', component: AllOrdersComponent },
      { path: 'aboutus', component: AboutusComponent },
    ],
  },

  { path: 'user', component: UserDashboardComponent,
    children:[
      { path: 'addOrder', component: AddOrderComponent},
    ],

  },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'washer', component: WasherDashboardComponent, 
    children: [
      { path: 'completed', component: CompletedOrdersComponent},
      { path: 'pending', component: PendingOrdersComponent },
      { path: 'unassigned', component: UnassignedOrdersComponent },
      { path: 'cancelled', component: CancelledOrdersComponent },
      { path: 'allOrders', component: AllOrdersComponent },
      { path: 'aboutus', component: AboutusComponent },
    ],
  },
  { path: 'allOrders', component: AllOrdersComponent },
  { path: 'addOrder', component: AddOrderComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  UserDashboardComponent,
  WasherDashboardComponent,
  AdminDashboardComponent,
  AboutusComponent,
  PageNotFoundComponent,
];
