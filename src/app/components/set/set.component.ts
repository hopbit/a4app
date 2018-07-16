import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  artist:string;
  title:string;
  year:number;
  song: {
    artist:string;
    title:string;
    remix:string;
    length:string;
    youtubeUrl:string;
    spotifyUrl:string;
  }

  constructor() { 
    console.log("constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");
    this.artist = 'Progressive Awake';
    this.title = "It’s in my soul (June 2008)";
  }

}
