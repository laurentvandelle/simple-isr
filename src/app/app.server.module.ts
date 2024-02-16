import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { IsrModule } from '@rx-angular/isr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule, ServerModule, IsrModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
