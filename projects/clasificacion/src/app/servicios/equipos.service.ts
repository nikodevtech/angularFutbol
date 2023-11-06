import { Injectable } from '@angular/core';
import { Equipo } from '../equipo';
import { EQUIPOS } from '../mock-equipos';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  private equipos: Equipo[] = EQUIPOS;
  
  getEquipos(): Equipo[] {
    return this.equipos;
  }
}
