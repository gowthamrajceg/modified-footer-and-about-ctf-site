import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  x : boolean;

  constructor() { }

  ngOnInit() {
    this.x = (window.screen.width > 450);
  }

}
