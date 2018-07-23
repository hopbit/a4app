import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  artist: string;
  title: string;
  year: number;
  url: string;
  tracks: Track[];

  constructor() {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.artist = 'Progressive Awake';
    this.title = 'It’s in my soul (June 2008)';
    this.year = 2008;
    this.url = 'https://hopbit.github.io/DJ/progressive-awake/its-in-my-soul-june-2008.html';
    this.tracks = [
      {artist: 'adam k, soha', title: 'long distance', remix: 'original mix', order: 1},
      {artist: 'ercola, heikki l', title: 'deep at night', remix: 'adam k & soha remix', order: 2},
      {artist: 'glenn morrison', title: 'no sudden moves', remix: 'original mix', order: 3},
    ];
  }

  onClick() {
    console.log('My super button was clicked');
    this.title = 'It\'s in my soule 2 (July 2008)';
    // this.year stays the same
    this.url = 'https://hopbit.github.io/DJ/progressive-awake/its-in-my-soul-2-july-2008.html';
    // this.tracks = []; // clear tracks
    this.tracks.push({artist: 'mark knight, adam k, soha', title: 'from the speaker', remix: 'original mix', order: 1},);
    this.tracks.push({artist: 'adam k, soha', title: 'long distance', remix: 'original mix', order: 2},);
    this.tracks.push({artist: 'adam k, soha', title: 'twilight ', remix: 'original mix revisited', order: 3},);
  }

  tracksVisible() {
    return this.tracks != null && this.tracks.length > 0;
  }
}

interface Track {
  artist: string;
  title: string;
  remix: string;
  order: number;
}
