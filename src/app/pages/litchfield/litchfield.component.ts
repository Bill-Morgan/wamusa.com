import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-litchfield',
  templateUrl: './litchfield.component.html',
  styleUrls: ['./litchfield.component.css']
})
export class LitchfieldComponent implements OnInit {

  cityDirectory = [
    {name: 'Brush Pick-up', phone: '324-5681'},
    {name: 'Building \& Zoning Dept', phone: '324-5253'},
    {name: 'Civil Defense', phone: '324-5822'},
    {name: 'Community \& Economic Development', phone: '324-5253'},
    {name: 'Fire Department', phone: '324-2111'},
    {name: 'City Clerk Office' , phone: '324-2022'},
    {name: 'City Administrator', phone: '324-5253'},
    {name: 'Lake Lou Yaeger Beach House', phone: '324-4023'},
    {name: 'Lake Lou Yaeger Campground', phone: '324-4771'},
    {name: 'Lake Lou Yaeger Maintenance Shed', phone: '324-5832'},
    {name: 'Lake Lou Yaeger', phone: '324-3416'},
    {name: 'Lake Lou Yaeger Boat Ramp #1', phone: '324-5441'},
    {name: 'Litchfield-Montgomery County Ambulance', phone: '324-4042'},
    {name: 'Mayor\'s Office', phone: '324-5253'},
    {name: 'Memorial Pool', phone: '324-6021'},
    {name: 'Police Department', phone: '324-5991'},
    {name: 'Street Department', phone: '324-4716'},
    {name: 'Tourism', phone: '324-5253'},
    {name: 'Water \& Sewer Department', phone: '324-2022'},
    {name: 'Water Tank', phone: '324-2321'},
    {name: 'Water Works Pumping Plant', phone: '324-2250'}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
