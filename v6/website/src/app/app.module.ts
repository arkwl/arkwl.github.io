import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { InfoPaneComponent } from './info-pane/info-pane.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    InfoPaneComponent,
    HomeComponent,
    EducationComponent,
    WorkComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
