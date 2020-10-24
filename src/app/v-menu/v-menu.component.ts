import { Component, OnInit, Input } from '@angular/core';
import * as linkData from '../../assets/data/links.json';


@Component({
  selector: 'app-v-menu',
  templateUrl: './v-menu.component.html',
  styleUrls: ['./v-menu.component.css']
})
export class VMenuComponent implements OnInit {

  // @Input() links: {};
  links = linkData["links"];

  constructor() { }

  ngOnInit(): void {
  }

}
