import { Component, Input } from '@angular/core';
import { Partido } from '../partido';

@Component({
  selector: 'app-detalle-partido',
  templateUrl: './detalle-partido.component.html',
  styleUrls: ['./detalle-partido.component.css']
})
export class DetallePartidoComponent {

  @Input() partido?: Partido;
  @Input() index?: number;
}
