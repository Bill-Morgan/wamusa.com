import { Component, OnInit, ɵConsole } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from './testdata.json'


@Component({
  selector: 'app-gas-buddy',
  templateUrl: './gas-buddy.component.html',
  styleUrls: ['./gas-buddy.component.css']
})

@Injectable()
export class GasBuddyComponent implements OnInit {

  constructor(private httpClient: HttpClient) {}

  testing1234 = data;
  tabLen = this.testing1234.length;

  ngOnInit(): void {
    // this.testing1234 = this.getPosts()
    console.log(this.testing1234);
  }

  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }
}
