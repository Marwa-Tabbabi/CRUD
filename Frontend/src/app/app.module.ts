import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from "@angular/material/dialog";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from "ngx-pagination";
import {DashboardAdminComponent} from "./pages/dashboardAdmin/dashboardAdmin.component";
import {AjoutCoursComponent} from "./pages/Ajout_Cours/ajout-cours.component";
import {AccueilComponent} from "./pages/accueil/accueil.component";




@NgModule({
  declarations: [
      AppComponent,
     DashboardAdminComponent,
      AjoutCoursComponent,
      AccueilComponent



  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        HttpClientModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        NgxPaginationModule,
        MatPaginatorModule,

    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule  {  }
