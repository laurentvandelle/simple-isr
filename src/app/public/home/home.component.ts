import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  date: Date = new Date();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    console.log(this.platformId);
    if (isPlatformServer(this.platformId)) {
      console.log('SSR !');
    }
  }
}
