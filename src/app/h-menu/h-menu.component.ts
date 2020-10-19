import { Component, OnInit } from '@angular/core';
import * as linkData from '../../assets/data/links.json'


@Component({
  selector: 'app-h-menu',
  templateUrl: './h-menu.component.html',
  styleUrls: ['./h-menu.component.css']
})
export class HMenuComponent implements OnInit {

  headers: string[] = [];
  displayButton = true;
  viewFlag = false;
  displayMenu: boolean[] = [];

  links = linkData["links"];
  
  constructor() {
  }

  ngOnInit(): void {
    this.displayMenu['menu'] = false;
    this.links.forEach(link => {
      this.displayMenu[link.heading] = false;
    });
    // console.log(JSON.stringify(this.links));
  }

  toggleMenu() {
    this.displayButton = !this.displayButton;
  }

  mouseEnter(heading: string) {
    this.displayMenu[heading] = true;
  }

  mouseLeave(heading: string) {
    this.displayMenu[heading] = false;
  }

}
