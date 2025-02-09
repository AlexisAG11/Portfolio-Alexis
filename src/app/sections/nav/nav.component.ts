import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navLink = [
    {href: 'projets', label: 'Projets'},
    {href: 'experience', label: 'Experience'},
    {href: 'moi', label: 'Moi'},
    {href: 'contact', label: 'Contact'}
  ];

  displayMenu = false;

}
