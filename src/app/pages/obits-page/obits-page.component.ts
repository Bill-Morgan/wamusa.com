import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/fh.json'

@Component({
  selector: 'app-obits-page',
  templateUrl: './obits-page.component.html',
  styleUrls: ['./obits-page.component.css']
})
export class ObitsPageComponent implements OnInit {

  // funeralHomes = [
  //   {name: 'Plumer Funeral Home', 
  //   img: 'assets/images/fh/p-fh.jpg', 
  //   src: 'https://www.plummerfuneralservices.com/listings'}
  // ]

  currentPage;
  funeralHomes;

  constructor() { }

  ngOnInit(): void {
    this.funeralHomes = data.funeralHomes;
    this.currentPage = this.funeralHomes[0];
    console.log(this.currentPage);
  }

}
