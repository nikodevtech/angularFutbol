import { Component } from '@angular/core';
import { FirebaseService } from '../servicios/firebase.service';
import { Partido } from '../partido';

@Component({
  selector: 'app-contenedor-partidos',
  templateUrl: './contenedor-partidos.component.html',
  styleUrls: ['./contenedor-partidos.component.css']
})
export class ContenedorPartidosComponent {

  partido: Partido = {
    jornada: 1,
    grupo: 'A',
    golesLocal: 0,
    golesVisitante: 0,
    equipoLocal: 'Betis',
    equipoVisitante: 'Sevilla'
  }

  constructor(private firebaseService: FirebaseService) {
    
  }

  //Método para probar si el servicio es capaz de guardar un partido
  guardarUnPartido() {
    this.firebaseService.setPartido(this.partido).then(() => {
      console.log('Partido guardado');
    }).catch((error) => {
      console.log(error);
    })
  }

}
