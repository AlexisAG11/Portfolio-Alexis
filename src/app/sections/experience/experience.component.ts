import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experience1 = [
    {value: 'HTML', subValue: 'Intermediaire'},
    {value: 'CSS', subValue: 'Basique'},
    {value: 'HTML', subValue: 'Intermediaire'},
    {value: 'CSS', subValue: 'Basique'},
    {value: 'HTML', subValue: 'Intermediaire'},
    {value: 'CSS', subValue: 'Basique'},
  ]

}
