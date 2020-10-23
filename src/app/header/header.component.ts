import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as bannerData from "../../assets/data/banners.json"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Input() menuOn: boolean;
lgHeaderOn: boolean = true;

@Output() menuOnChange = new EventEmitter();
buttonMouseOver = false;
index = this.getRandomInt(0,bannerData.banners.length - 1);
banner = bannerData.banners[this.index]

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuOn = !this.menuOn;
    this.menuOnChange.emit(this.menuOn);
  }

  mouseEnter() {
    this.buttonMouseOver = true;
  }

  mouseLeave() {
    this.buttonMouseOver = false;
  }

  lgHeaderToggle() {
    this.lgHeaderOn = !this.lgHeaderOn;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
