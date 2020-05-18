import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-downtown-cam',
  templateUrl: './downtown-cam.component.html',
  styleUrls: ['./downtown-cam.component.css']
})
export class DowntownCamComponent implements OnInit, OnDestroy {

  timeStamp: string;
  picURL: string;
  subscription: Subscription;
  source = interval(60000);
  updateEnabled = true;
  

  constructor() { }

  ngOnInit(): void {
    this.updateImage();
    this.subscription = this.source.subscribe(() => this.updateImage());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateImage() {
    this.picURL = '';
    this.picURL = 'http://www.wamcomputers.com/pic/pic.jpg?rnd=' + Math.random();
    this.timeStamp = moment().format('MM/DD/YY h:mm:ss a');
    console.log(this.timeStamp, 'picture updated')
  }

  stopUpdate() {
    this.subscription.unsubscribe();
    this.updateEnabled = false;
  }

  startUpdate() {
    this.updateImage();
    this.subscription = this.source.subscribe(() => this.updateImage());
    this.updateEnabled = true;
  }
}
