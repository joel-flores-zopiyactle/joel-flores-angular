import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Array<any> =  [
    {
      'title': 'HTML',
      'percent': 'width:90%',
    },
    {
        'title': 'CSS',
        'percent': 'width:65%',
    },
    {
        'title': 'Tailwind CSS',
        'percent': 'width:40%',
    },
    {
        'title': 'JavaScript',
        'percent': 'width:80%',
    },
    {
        'title': 'Vue js',
        'percent': 'width:60%',
    },
    {
      'title': 'Angular',
      'percent': 'width:70%',
  },
    {
        'title': 'PHP',
        'percent': 'width:75%',
    },
    {
        'title': 'Laravel',
        'percent': 'width:70%',
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
