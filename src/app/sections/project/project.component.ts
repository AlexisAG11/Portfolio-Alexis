import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  isOverlayVideo = false;

  videoUrl = [
    '../../../assets/images/video-tyf.mp4',
    '../../../assets/images/video-kc.mp4'
  ]
  actualVideo = this.videoUrl[0];

  onOverlayVideo(number: number){
    this.actualVideo=this.videoUrl[number];
    this.isOverlayVideo = true;
  }
  
}
