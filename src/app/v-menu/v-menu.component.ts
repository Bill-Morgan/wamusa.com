import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-menu',
  templateUrl: './v-menu.component.html',
  styleUrls: ['./v-menu.component.css']
})
export class VMenuComponent implements OnInit {

  links = [
    {type: 'link', name: 'WAM Remote Support', url: 'http://www.wamcomputers.com/documents/remote_support.html'},
    {type: 'link', name: 'Pay your Internet Bill On-Line', url: 'http://www.wamusa.com/userservices/accountinfo.asp'},
    {type: 'space'},
    {type: 'link', name:'Home', url: '/'},
    {type: 'link', name:'Search Engines', url: 'http://www.wamusa.com/wam.asp?p=search'},
    {type: 'space'},
    {type: 'heading', name: 'Litchfield'},
    {type: 'link', name: 'Obituaries', url: 'http://www.wamusa.com/?p=obits.htm'},
    {type: 'link', name: "Veterans' Memorial Project", url: 'http://www.wamusa.com/vetmemorial/'},
    {type: 'link', name: 'Litchfield Public Library', url: 'http://www.litchfieldpubliclibrary.org/'},
    {type: 'link', name: 'Fraternal Order of Eagles', url: 'http://www.wamusa.com/foe/'},
    {type: 'link', name: 'Litchfield Moose Family Center', url: 'http://www.wamusa.com/moose/'},
    {type: 'link', name: 'Litchfield Airport', url: 'http://www.wamusa.com/airport/'},
    {type: 'link', name: 'Local Motels and Restaurants', url: 'http://airport.litchfieldil.com/Motel-Restaurant%20Locations.htm'},
    {type: 'link', name: 'Now Playing @ Local Theaters', url: 'http://www.wamusa.com/wam.asp?p=skyview'},
    {type: 'link', name: 'City of Litchfield', url: 'http://www.wamusa.com/wam.asp?p=litchfield'},
    {type: 'link', name: 'Local Businesses', url: 'http://www.wamusa.com/wam.asp?p=business'},
    {type: 'link', name: 'Recreation', url: 'http://www.wamusa.com/wam.asp?p=recreation'},
    {type: 'link', name: 'Church Services', url: 'http://www.wamusa.com/wam.asp?p=churches'},
    {type: 'link', name: 'Church Events', url: 'http://www.wamusa.com/wam.asp?p=churchevents'},
    {type: 'link', name: 'St. Francis Aux.', url: 'http://www.wamusa.com/wam.asp?p=sfh_aux'},
    {type: 'link', name: 'Lincoln Land', url: 'http://www.wamusa.com/wam.asp?p=lincolnland'},
    {type: 'link', name: 'Chamber Of Commerce', url: 'http://www.litchfieldchamber.com/'}, 
    {type: 'link', name: 'Route 66', url: 'http://www.wamusa.com/wam.asp?p=route66'},
    {type: 'link', name: 'Litchfield Pictures', url: 'http://www.wamusa.com/wam.asp?p=picts'},
    {type: 'space'},
    {type: 'heading', name: 'Links'},
    {type: 'link', name: 'IL Sex Offender Search', url: 'http://www.isp.state.il.us/sor/sor.cfm'},
    {type: 'link', name: 'WAM Cool Sites', url: 'http://www.wamusa.com/wam.asp?p=coolsites'},
    {type: 'link', name: 'The Kids\' List', url: 'http://www.wamusa.com/wam.asp?p=kidslist'},
    {type: 'link', name: 'News Links', url: 'http://www.wamusa.com/wam.asp?p=newslinks'},
    {type: 'link', name: 'Business Links', url: 'http://www.wamusa.com/wam.asp?p=bizlinks'},
    {type: 'link', name: 'Travel Links', url: 'http://www.wamusa.com/wam.asp?p=travel'},
    {type: 'link', name: 'Search Engines', url: 'http://www.wamusa.com/wam.asp?p=search'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
