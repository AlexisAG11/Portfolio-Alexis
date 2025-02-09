import { Component } from '@angular/core';

@Component({
  selector: 'app-video-demo',
  templateUrl: './video-demo.component.html',
  styleUrls: ['./video-demo.component.css']
})
export class VideoDemoComponent {

  isOverlayVideo = false;

  onOverlayVideo(){
    this.isOverlayVideo = true;
  }


}
