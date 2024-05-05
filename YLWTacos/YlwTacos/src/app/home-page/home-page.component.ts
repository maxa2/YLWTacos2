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


  ngAfterViewInit(){
    let mobileMap = this.document.getElementsByClassName('mobile') as HTMLCollectionOf<HTMLElement>;
    let desktopMap = this.document.getElementsByClassName('desktop')as HTMLCollectionOf<HTMLElement>;;
    console.log(this.deviceService.getDeviceInfo());
    if(this.deviceService.isMobile()){
      console.log('mobile');
      mobileMap[0].style.display = "block";
      
    }else{
      console.log('desktop');
      desktopMap[0].style.display="block";
    }
  }

}
