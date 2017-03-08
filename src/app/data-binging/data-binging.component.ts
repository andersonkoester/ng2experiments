import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binging',
  templateUrl: './data-binging.component.html',
  styleUrls: ['./data-binging.component.css']
})
export class DataBingingComponent{
  url = 'http://google.com/';
  utlImg = "http://lorempixel.com/200/200/animals";

  getValue(){
    return 1;
  }

  constructor() { }


}