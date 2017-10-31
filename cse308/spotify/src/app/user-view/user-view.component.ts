import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  defaultConsts = ['Browse', 'Radio'];
  libraryConsts = [
                  'Your Daily Mix','Recently Played','Songs','Albums',
                  'Stations','Local Files','Videos', 'Podcasts'
                ];
  // This should be pulled from user.playlists
  playlists = ['Classic Rock', 'Groovy', 'Punk', 'Rap', 'Kanye is God'];

  constructor() { }

  ngOnInit() {
  }

}
