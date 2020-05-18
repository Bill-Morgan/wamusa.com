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
    {type: 'link', name: 'Litchfield Moose Family Center', url: 'http://www.wamusa.com/moose/'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
