import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatedrivenformsComponent } from './components/templatedrivenforms/templatedrivenforms.component';
import { ReactiveComponent } from './components/reactive/reactive.component';


const routes: Routes = [
  { path: 'tempdri', component: TemplatedrivenformsComponent},
  { path: 'react', component: ReactiveComponent},
  { path: '', redirectTo: 'tempdri', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
