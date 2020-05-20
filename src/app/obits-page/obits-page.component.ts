import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obits-page',
  templateUrl: './obits-page.component.html',
  styleUrls: ['./obits-page.component.css']
})
export class ObitsPageComponent implements OnInit {

  funeralHomes = [
    {name: 'Plumer Funeral Home', img: 'assets/images/fh/p-fh.jpg'},
    {name: ''}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
