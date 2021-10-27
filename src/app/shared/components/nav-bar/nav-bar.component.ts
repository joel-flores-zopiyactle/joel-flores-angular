import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  links:Array<any> = [
    {
      name: 'Home',
      route: 'home'
    },
    {
      name: 'About',
      route: 'about'
    },
    {
      name: 'Education',
      route: 'education'
    },
    {
      name: 'Skills',
      route: 'skills'
    },
    {
      name: 'Projects',
      route: 'projects'
    },
    {
      name: 'Contact',
      route: 'contact'
    }
  ]

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
