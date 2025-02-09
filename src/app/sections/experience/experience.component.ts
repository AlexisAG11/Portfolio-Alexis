import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experience1 = [
    {value: 'JavaScript' , subValue: '', iconPath: '../../../assets/icons/javascript.png'},
    {value: 'Angular', subValue: '', iconPath: '../../../assets/icons/angularJs.png'},
    {value: 'Tailwind' , subValue: 'Css', iconPath: '../../../assets/icons/icons8-tailwind-css-48.png'},
    {value: 'Express.js', subValue: 'Node.js', iconPath: '../../../assets/icons/icons8-express-js-48.png'},
    {value: 'MongodB', subValue: '', iconPath: '../../../assets/icons/icons8-mongo-db-48.png'},
    {value: 'Php', subValue: 'Symphony', iconPath: '../../../assets/icons/icons8-logo-php-80.png'},
  ];
  experience2 = [
    {value: 'Git', subValue: '', iconPath: '../../../assets/icons/icons8-git-48.png'},
    {value: 'SQL', subValue: 'mySql', iconPath: '../../../assets/icons/icons8-mysql-48.png'},
    {value: 'python', subValue: '', iconPath: '../../../assets/icons/icons8-python-48.png'},
    {value: 'Unity', subValue: '', iconPath: '../../../assets/icons/icons8-unité-50.png'},
    {value: 'Matlab', subValue: '', iconPath: '../../../assets/icons/icons8-matlab-48.png'}
  ]

}
