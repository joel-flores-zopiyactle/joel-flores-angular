import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  @Input() urlImg:string = '';
  data!:Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
