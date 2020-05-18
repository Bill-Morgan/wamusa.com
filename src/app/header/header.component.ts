import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Input() menuOn: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  menuToggle() {
    this.menuOn = !this.menuOn;
  }
}
