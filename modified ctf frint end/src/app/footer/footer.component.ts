import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  x : boolean;

  constructor() { }

  ngOnInit() {
    this.x = (window.screen.width > 450);
    console.log(this.x);
  }

}
