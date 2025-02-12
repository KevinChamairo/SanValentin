import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { FinalComponent } from './final/final.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Página principal
  { path: 'second', component: SecondComponent }, // Segunda página
  { path: 'final', component: FinalComponent } // Agregar la nueva vista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
