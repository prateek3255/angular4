import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  cars:Array<string>=['bmw','audi'];
  myData(){
    return "hello world ";
  }
}
