import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Input() menuOn: boolean;
@Output() menuOnChange = new EventEmitter();
localMenuOn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.localMenuOn = this.menuOn
  }

  menuToggle() {
    this.localMenuOn = !this.localMenuOn;
    this.menuOnChange.emit(this.localMenuOn);
  }

  mouseEnter() {
    // if (!this.localMenuOn) {
    //   this.menuOnChange.emit(true);
    // }
  }

  mouseLeave() {
    // this.menuOnChange.emit(this.localMenuOn);
  }
}
