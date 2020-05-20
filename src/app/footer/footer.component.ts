import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dateStr: string = moment().format('MM/DD/YYYY');

  constructor() { }

  ngOnInit(): void {
  }

}
