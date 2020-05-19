import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Input() menuOn: boolean;
@Output() menuOnChange = new EventEmitter();
buttonMouseOver = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuToggle() {
    this.menuOn = !this.menuOn;
    this.menuOnChange.emit(this.menuOn);
  }

  mouseEnter() {
    this.buttonMouseOver = true;
  }

  mouseLeave() {
    this.buttonMouseOver = false;
  }
}
