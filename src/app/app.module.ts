import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectWindowComponent } from './project-window/project-window.component';
import { TopologyWindowsComponent } from './topology-windows/topology-windows.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes : Routes = [
  {path: '', component: ProjectWindowComponent}
  //{path: 'signin', component: SigninComponent},
  //{path: 'signup', component: SignupComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    ProjectWindowComponent,
    TopologyWindowsComponent,
    HomepageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
