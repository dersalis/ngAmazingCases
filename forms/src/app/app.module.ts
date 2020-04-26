import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedrivenformsComponent } from './components/templatedrivenforms/templatedrivenforms.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformsComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Dla template form
    ReactiveFormsModule // Dla reactive form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
