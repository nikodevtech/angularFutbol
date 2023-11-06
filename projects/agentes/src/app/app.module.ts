import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaDeAgentesComponent } from './vistas/lista-de-agentes/lista-de-agentes.component';
import { EditorDeAgentesComponent } from './vistas/editor-de-agentes/editor-de-agentes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeAgentesComponent,
    EditorDeAgentesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //AgentesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
