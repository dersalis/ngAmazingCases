import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetdataComponent } from './components/getdata/getdata.component';
import { PostdataComponent } from './components/postdata/postdata.component';
import { PutdataComponent } from './components/putdata/putdata.component';
import { DeletedataComponent } from './components/deletedata/deletedata.component';
import { PatchdataComponent } from './components/patchdata/patchdata.component';


const routes: Routes = [
  { path: 'get', component: GetdataComponent},
  { path: 'post', component: PostdataComponent},
  { path: 'put', component: PutdataComponent},
  { path: 'delete', component: DeletedataComponent},
  { path: 'patch', component: PatchdataComponent},
  { path: '', redirectTo: 'get', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
