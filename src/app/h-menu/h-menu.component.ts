import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data/links.json'
import { Links } from '../core/links';
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

  // links: Links[];
  links = [ {
    heading: 'WAM Computers', url: 'http://www.wamcomputers.com',
    links: [ 
      {name: 'WAM Computers', url: 'http://www.wamcomputers.com'},
      {name: 'WAM Remote Support', url: 'http://www.wamcomputers.com/documents/remote_support.html'},
      {name: 'Pay your Internet Bill On-Line', url: 'http://www.wamusa.com/userservices/accountinfo.asp'}
    ]},
    {heading: 'Litchfield', url: '/litchfield',
    links: [
      {name:'Home', url: '/'},
      {name:'Search Engines', url: 'http://www.wamusa.com/wam.asp?p=search'},
      {name: 'Obituaries', url: '/obits'},
      {name: "Veterans' Memorial Project", url: 'http://www.wamusa.com/vetmemorial/'},
      {name: 'Litchfield Public Library', url: 'http://www.litchfieldpubliclibrary.org/'},
      {name: 'Litchfield Schools', url: 'https://www.lcusd12.org/'},
      {name: 'Fraternal Order of Eagles', url: 'http://www.wamusa.com/foe/'},
      {name: 'Litchfield Moose Family Center', url: 'http://www.wamusa.com/moose/'},
      {name: 'Litchfield Airport', url: 'http://www.wamusa.com/airport/'},
      {name: 'Local Motels and Restaurants', url: 'http://airport.litchfieldil.com/Motel-Restaurant%20Locations.htm'},
      {name: 'Now Playing @ Local Theaters', url: 'http://www.wamusa.com/wam.asp?p=skyview'},
      {name: 'City of Litchfield', url: '/litchfield'},
      {name: 'Local Businesses', url: 'http://www.wamusa.com/wam.asp?p=business'},
      {name: 'Recreation', url: 'http://www.wamusa.com/wam.asp?p=recreation'},
      {name: 'Church Services', url: 'http://www.wamusa.com/wam.asp?p=churches'},
      {name: 'Church Events', url: 'http://www.wamusa.com/wam.asp?p=churchevents'},
      {name: 'St. Francis Aux.', url: 'http://www.wamusa.com/wam.asp?p=sfh_aux'},
      {name: 'Lincoln Land', url: 'http://www.wamusa.com/wam.asp?p=lincolnland'},
      {name: 'Chamber Of Commerce', url: 'http://www.litchfieldchamber.com/'}, 
      {name: 'Route 66', url: 'http://www.wamusa.com/wam.asp?p=route66'},
      {name: 'Litchfield Pictures', url: 'http://www.wamusa.com/wam.asp?p=picts'}
    ]},
    {heading: 'Links',
    links: [
      {name: 'IL Sex Offender Search', url: 'http://www.isp.state.il.us/sor/sor.cfm'},
      {name: 'WAM Cool Sites', url: 'http://www.wamusa.com/wam.asp?p=coolsites'},
      {name: 'The Kids\' List', url: 'http://www.wamusa.com/wam.asp?p=kidslist'},
      {name: 'News Links', url: 'http://www.wamusa.com/wam.asp?p=newslinks'},
      {name: 'Business Links', url: 'http://www.wamusa.com/wam.asp?p=bizlinks'},
      {name: 'Travel Links', url: 'http://www.wamusa.com/wam.asp?p=travel'},
      {name: 'Search Engines', url: 'http://www.wamusa.com/wam.asp?p=search'}
    ]}
  ]

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
