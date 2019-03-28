import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EvaIconModule } from 'ng-eva-icon';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EvaIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
