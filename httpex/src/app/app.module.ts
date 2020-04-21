import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GetdataComponent } from './components/getdata/getdata.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { PostdataComponent } from './components/postdata/postdata.component';
import { PutdataComponent } from './components/putdata/putdata.component';
import { DeletedataComponent } from './components/deletedata/deletedata.component';
import { PatchdataComponent } from './components/patchdata/patchdata.component';

@NgModule({
  declarations: [
    AppComponent,
    GetdataComponent,
    PostdataComponent,
    PutdataComponent,
    DeletedataComponent,
    PatchdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
