import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRestComponent } from './admin-rest/admin-rest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserRestComponent } from './user-rest/user-rest.component';
import { WasherRestComponent } from './washer-rest/washer-rest.component';

const routes: Routes = [
  {path:'',redirectTo: '/user',pathMatch:'full'},
  {path: 'admin',component:AdminRestComponent},
  {path: 'user',component: UserRestComponent},
  {path: 'washer',component: WasherRestComponent},
  {path: "**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AdminRestComponent,UserRestComponent,WasherRestComponent,PageNotFoundComponent]