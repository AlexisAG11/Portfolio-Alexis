import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navLink = [
    {href: 'moi', label: 'Moi'},
    {href: 'experience', label: 'Experience'},
    {href: 'projets', label: 'Projets'},
    {href: 'contact', label: 'Contact'}
  ];

  displayMenu = false;

}
