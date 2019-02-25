import { Injectable } from '@angular/core';
import { Joueur } from './joueur/joueur';
import { JOUEURS } from './list-joueurs/mock-joueurs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  constructor() {}

  getJoueurs(): Observable<Joueur[]> {
    return of(JOUEURS);
  }

  getJoueur(id: number): Observable<Joueur> {
    return of(JOUEURS.find(joueur => joueur.id === id));
  }
}
