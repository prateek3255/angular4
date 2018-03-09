import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-new-component',
  template: `<h1>hello</h1>
  <ul>
    <li *ngIf="!arr; then tmpl else otherTmpl">exist</li> 
  </ul>
  <button (click)="myevent($event)">hell0</button>
  <ng-template #otherTmpl>no. i do</ng-template>
  <ng-template #tmpl>no. i do not</ng-template>
  <p>{{someproperty}}</p>
  `,
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  // arr=['hi','hello','hola']
  status=false;
  myevent(event){
    console.log(event)
  }
  someproperty:string='';
  ngOnInit() {
    console.log(this.dataservice.cars);
    this.someproperty=this.dataservice.myData();
  }

}
