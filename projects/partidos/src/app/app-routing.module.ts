import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerPartidosComponent } from './container-partidos/container-partidos.component';

const routes: Routes = [
  {
    path: 'partidos',
    component: ContainerPartidosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
