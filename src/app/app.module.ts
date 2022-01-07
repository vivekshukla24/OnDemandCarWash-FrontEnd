import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminCompletedOrdersComponent } from './Admin/admin-completed-orders/admin-completed-orders.component';
import { AdminPendingOrdersComponent } from './Admin/admin-pending-orders/admin-pending-orders.component';
import { AllOrdersComponent } from './OrderAux/all-orders/all-orders.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { WasherDashboardComponent } from './Washer/washer-dashboard/washer-dashboard.component';
import { AddOrderComponent } from './OrderAux/add-order/add-order.component';
import { AngularMaterialModule } from './angularMaterial/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { UpdateOrderComponent } from './OrderAux/update-order/update-order.component';
import { UnassignedOrdersComponent } from './OrderAux/unassigned-orders/unassigned-orders.component';
import { CancelledOrdersComponent } from './OrderAux/cancelled-orders/cancelled-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    AboutusComponent,
    NavbarComponent,
    AdminDashboardComponent,
    AdminCompletedOrdersComponent,
    AdminPendingOrdersComponent,
    AllOrdersComponent,
    UserDashboardComponent,
    WasherDashboardComponent,
    AddOrderComponent,
    UpdateOrderComponent,
    UnassignedOrdersComponent,
    CancelledOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularMaterialModule,
    FormsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
