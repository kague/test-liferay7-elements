import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Joueur } from '../core/joueurs/joueur/joueur';
import { Equipe } from '../core/equipes/equipe/equipe';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const joueurs: Joueur[] = [
      { id: 0, surnom: 'Nana', equipes: [{ id: 0, nom: 'VBN', logo: 'vbn.svg', joueurs: [] }] },
      { id: 1, surnom: 'Poppi', equipes: [] },
      { id: 2, surnom: 'Luke', equipes: [] },
      { id: 3, surnom: 'Yoda', equipes: [] }
    ];
    const equipes: Equipe[] = [
      { id: 0, nom: 'VBN', logo: 'vbn.svg', joueurs: [{ id: 0, surnom: 'Nana', equipes: []}] },
      {
        id: 1,
        nom: 'SHVB',
        logo: 'shvb.svg',
        joueurs: [
          { id: 2, surnom: 'Luke', equipes: [] },
          { id: 3, surnom: 'Yoda', equipes: [] }
        ]
      }
    ];
    return { joueurs, equipes };
  }

  // surcharde de la methode pour s'assurer du retour.
  genId(joueurs: Joueur[]): number {
    console.log('genId');
    return joueurs.length > 0
      ? Math.max(...joueurs.map(joueur => joueur.id)) + 1
      : 0;
  }
}
