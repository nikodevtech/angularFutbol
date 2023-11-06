import { Injectable } from '@angular/core';
import { Partido } from '../partido';
import { PARTIDOS } from '../mock-partidos';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  
  private partidos: Partido[] = PARTIDOS;

  getPartidos(): Partido[] {
    return this.partidos;
  }
  setPartidos(partidos: Partido[]) {
    this.partidos = partidos;
  }
  guardarUnPartido(partido: Partido, index: number) {
    this.partidos[index] = partido;
  }
}
