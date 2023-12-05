import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  date: Date = new Date();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    console.log(this.platformId);
    if (isPlatformServer(this.platformId)) {
      console.log('SSR !');
    }
  }
}
