import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor() { }

  getData(){
    return ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'];
  }

}
