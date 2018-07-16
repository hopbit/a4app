import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  artist:string = 'Quantum Energy';

  constructor() { 
    console.log("constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");
    this.artist = 'Progressive Awake';
  }

}
