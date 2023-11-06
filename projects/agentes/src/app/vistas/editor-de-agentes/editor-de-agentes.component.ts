import { Component } from '@angular/core';
import { AgentesService } from '../../servicios/agentes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Agente } from '../../modelos/agente';

@Component({
  selector: 'app-editor-de-agentes',
  templateUrl: './editor-de-agentes.component.html',
  styleUrls: ['./editor-de-agentes.component.css'],
})
export class EditorDeAgentesComponent {
  idAgente!: number | null;
  agente: Agente = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };

  constructor(
    private agentesService: AgentesService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.activatedRouter.snapshot.paramMap.get('id')) {
      this.idAgente = Number(this.activatedRouter.snapshot.paramMap.get('id'));
      this.agentesService.getAgenteById(this.idAgente).subscribe((response) => {
        this.agente = response.data;
      });
    }
  }
  volver() {
    this.router.navigate(['lista-de-agentes']);
  }
}
