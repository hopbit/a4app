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
  song:{
    artist:string;
    title:string;
    remix:string;
  }

  constructor() { 
    console.log("constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");
    this.artist = 'Progressive Awake';
    this.title = "It’s in my soul (June 2008)";
    this.song = {
      artist: 'adam k, soha',
      title: 'long distance',
      remix: 'original mix'
    }
  }
}
