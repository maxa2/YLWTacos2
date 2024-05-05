import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private deviceService: DeviceDetectorService){

  }


  ngOnInit(){
    let elements = this.document.getElementById('mobile-map');
  }

}
