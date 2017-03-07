import { SampleService } from './sample.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  providers: [SampleService]
})
export class SampleComponent implements OnInit {

  data;
  sampleTitle = "Title for Sample!";

  constructor(sampleService: SampleService) { 
    this.data = sampleService.getData();
  }

  ngOnInit() {
  }

}
