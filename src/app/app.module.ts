import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ZoomchartsModule, WindowRef } from '@dvsl/angular-zoomcharts';


@NgModule({
  declarations: [
    AppComponent
  ], imports: [
    BrowserModule,
    ZoomchartsModule.forRoot({})
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }  
