import { Component } from '@angular/core';
import { EquiposService } from '../servicios/equipos.service';
import { Equipo } from '../equipo';

@Component({
  selector: 'app-container-clasificacion',
  templateUrl: './container-clasificacion.component.html',
  styleUrls: ['./container-clasificacion.component.css']
})
export class ContainerClasificacionComponent {
  titulo = 'Clasificacion de Equipos LFP';
  equipos: Equipo[] = [];

  constructor(private equiposService: EquiposService)  {
    this.equipos = this.equiposService.getEquipos();
  }
}
