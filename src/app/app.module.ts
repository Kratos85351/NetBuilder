import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AnimationDialog, NewTopologyDialog, ProjectWindowComponent} from './project-window/project-window.component';
import { TopologyWindowsComponent } from './topology-windows/topology-windows.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

const appRoutes : Routes = [
  {path: '', component: HomepageComponent},
  {path: 'projects', component: ProjectWindowComponent},
  {path: 'topology', component: TopologyWindowsComponent}
  //{path: 'signup', component: SignupComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    ProjectWindowComponent,
    TopologyWindowsComponent,
    HomepageComponent,
    HeaderComponent,
    NewTopologyDialog,
    AnimationDialog
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
        RouterModule.forRoot(appRoutes),
        MatDialogModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
