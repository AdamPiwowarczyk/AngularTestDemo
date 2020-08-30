import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EmitterComponent } from './components/emitter/emitter.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    EmitterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
