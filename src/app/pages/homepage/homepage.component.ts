import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  timeStamp: string;
  picURL: string;
  subscription: Subscription;
  source = interval(60000);
  updateEnabled = true;
  photoSmall = true;
  imgHeight = 338;
  imgWidth = 600;
  

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

  resizePhoto() {
    if (this.photoSmall) {
      this.photoSmall=false;
      this.imgHeight = 592;
      this.imgWidth = 1050;
    } else {
      this.photoSmall=true;
      this.imgHeight = 338;
      this.imgWidth = 600;
    }
  }
}
