import { Component } from '@angular/core';
import { PartidosService } from '../servicios/partidos.service';
import { Partido } from '../partido';

@Component({
  selector: 'app-container-partidos',
  templateUrl: './container-partidos.component.html',
  styleUrls: ['./container-partidos.component.css']
})
export class ContainerPartidosComponent {


  partidos: Partido[] = [];

  constructor(private servicioPartidos: PartidosService) {
    this.partidos = servicioPartidos.getPartidos();
  }
}
