import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // @Input() count: number;
  count = 28213878;
  countArr = this.count.toString().split('');
  message = 'visits since 11/27/2004';
  curIndex = 0;
  digitLookup = {
    '0': 'assets/images/count-digits/0.gif',
    '1': 'assets/images/count-digits/1.gif',
    '2': 'assets/images/count-digits/2.gif',
    '3': 'assets/images/count-digits/3.gif',
    '4': 'assets/images/count-digits/4.gif',
    '5': 'assets/images/count-digits/5.gif',
    '6': 'assets/images/count-digits/6.gif',
    '7': 'assets/images/count-digits/7.gif',
    '8': 'assets/images/count-digits/8.gif',
    '9': 'assets/images/count-digits/9.gif',
  }
  constructor() { }

  ngOnInit(): void {
  }

  length(str: string) {
    return str.length;
  }

  getIndex(): number {
    return this.curIndex++
  }

}
