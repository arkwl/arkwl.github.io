import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopViewComponent } from './top-view/top-view.component';
import { AudioViewComponent } from './audio-view/audio-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { MiddleViewComponent } from './middle-view/middle-view.component';
import { FriendViewComponent } from './friend-view/friend-view.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainViewComponent } from './main-view/main-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { WebPlayerComponent } from './web-player/web-player.component';

//packages go here
//import { AppRoutingModule, routingComponents } from './app.routing';
/*
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
}, */

@NgModule({
  declarations: [
    AppComponent,
    TopViewComponent,
    AudioViewComponent,
    UserViewComponent,
    MiddleViewComponent,
    FriendViewComponent,
    SearchBarComponent,
    MainViewComponent,
    LoginViewComponent,
    WebPlayerComponent
  ],
  imports: [
    BrowserModule /*, AppRoutingModule */
  ],
  providers: [],
  bootstrap: [AppComponent, /*routingComponents*/]
})
export class AppModule { }
