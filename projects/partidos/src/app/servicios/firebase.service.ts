import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Partido } from '../partido';
import { doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireStore: Firestore) { }

  setPartido(partido: Partido) {
    const partidoRef = doc(this.fireStore, `partidos`, `partidos`);
    return setDoc(partidoRef, partido);
  }
}
