import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Joueur } from '../joueurs/joueur/joueur';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const joueurs: Joueur[] = [
      { id: 0, surnom: 'Nana' },
      { id: 1, surnom: 'Poppi' },
      { id: 2, surnom: 'Luke' },
      { id: 3, surnom: 'Yoda' }
    ];
    return { joueurs };
  }

  // surcharde de la methode pour s'assurer du retour.
  genId(joueurs: Joueur[]): number {
    console.log("genId");
    return joueurs.length > 0
      ? Math.max(...joueurs.map(joueur => joueur.id)) + 1
      : 0;
  }
}
