import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerClasificacionComponent } from './container-clasificacion/container-clasificacion.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerClasificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
