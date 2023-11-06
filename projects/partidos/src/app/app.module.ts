import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerPartidosComponent } from './container-partidos/container-partidos.component';
import { FormsModule } from '@angular/forms';
import { DetallePartidoComponent } from './detalle-partido/detalle-partido.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { ContenedorPartidosComponent } from './contenedor-partidos/contenedor-partidos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerPartidosComponent,
    DetallePartidoComponent,
    ContenedorPartidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
