import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-alexis';
  navLink = [
    {href: 'moi', label: 'Moi'},
    {href: 'experience', label: 'Experience'},
    {href: 'projets', label: 'Projets'},
    {href: 'contact', label: 'Contact'}
  ];
}
