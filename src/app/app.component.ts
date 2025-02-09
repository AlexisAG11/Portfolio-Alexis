import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-alexis';
  navLink = [
    {href: 'projets', label: 'Projets'},
    {href: 'experience', label: 'Experience'},
    {href: 'moi', label: 'Moi'},
    {href: 'contact', label: 'Contact'}
  ];
}
