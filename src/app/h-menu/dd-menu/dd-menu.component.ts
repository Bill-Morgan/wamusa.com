import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dd-menu',
  templateUrl: './dd-menu.component.html',
  styleUrls: ['./dd-menu.component.css']
})
export class DdMenuComponent implements OnInit {

  @Input() menuItems: object[];

  constructor() { }

  ngOnInit(): void {
  }

}
