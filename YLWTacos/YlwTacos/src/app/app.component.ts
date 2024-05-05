import { RouterOutlet } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ylw Tacos';

  deviceInfo: DeviceInfo;

  constructor(@Inject(DOCUMENT) private document: Document, private deviceService: DeviceDetectorService) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log(this.deviceInfo);
  }

  ngOnInit() {
    const isMobile = this.deviceService.isMobile();
    const isDesktop = this.deviceService.isDesktop();

    let mobileMap = this.document.getElementsByClassName('mobile') as HTMLCollectionOf<HTMLElement>;
    let desktopMap = this.document.getElementsByClassName('desktop') as HTMLCollectionOf<HTMLElement>;

    console.log(isMobile);
    console.log(isDesktop);

    if (isMobile) {
      console.log('mobile');
      mobileMap[0].style.display = "block";
    } else {
      console.log('desktop');
      desktopMap[0].style.display = "block";
    }
  }
}
