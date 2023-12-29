import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./pages/accueil/accueil.component";
import {DashboardAdminComponent} from "./pages/dashboardAdmin/dashboardAdmin.component";



const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'admin', component:DashboardAdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
