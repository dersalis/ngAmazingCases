import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthService } from './services/auth.service';
import { AuthGuardsService } from './services/auth-guards.service';

const firebaseConfig = {
  apiKey: 'AIzaSyAgzP6fPj94OA4jRFD7Mf4VVjg9ZmNMQQg',
  authDomain: 'ngjwtex.firebaseapp.com',
  databaseURL: 'https://ngjwtex.firebaseio.com',
  projectId: 'ngjwtex',
  storageBucket: 'ngjwtex.appspot.com',
  messagingSenderId: '934426594605',
  appId: '1:934426594605:web:6732c8acfdd6af509dd7a4',
  measurementId: 'G-X4D5C5FM3M'
};

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Firebase
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
