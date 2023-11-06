import { Component } from '@angular/core';
import { AgentesService } from '../../servicios/agentes.service';

@Component({
  selector: 'app-lista-de-agentes',
  templateUrl: './lista-de-agentes.component.html',
  styleUrls: ['./lista-de-agentes.component.css'],
})
export class ListaDeAgentesComponent {
  agentes: any;

  constructor(private agenteService: AgentesService) {
    this.agenteService.get().subscribe((data) => {
      this.agentes = data;
    });
  }

}
