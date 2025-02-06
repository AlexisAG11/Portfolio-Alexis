import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navLink = [
    {href: 'me', label: 'Me'},
    {href: 'experience', label: 'Experience'},
    {href: 'projects', label: 'Projects'},
    {href: 'contact', label: 'Contact'}
  ];

  displayMenu = false;

}
