import { Component, OnInit } from '@angular/core';

import { Joueur } from '../joueur/joueur';
import { JoueurService } from '../joueur/joueur.service';

import { Sort } from '@angular/material';

@Component({
  selector: 'app-list-joueurs',
  templateUrl: './list-joueurs.component.html',
  styleUrls: ['./list-joueurs.component.scss']
})
export class ListJoueursComponent implements OnInit {
  joueurs: Joueur[];

  sortedData: Joueur[];

  constructor(private joueurService: JoueurService) {}

  ngOnInit() {
    this.getJoueurs();
  }

  getJoueurs(): void {
    this.joueurService.getJoueurs().subscribe(j => (this.joueurs = j));
  }

  add(surnom: string): void {
    surnom = surnom.trim();
    if (!surnom) {
      return;
    }
    this.joueurService.add({ surnom } as Joueur).subscribe(joueur => {
      this.joueurs.push(joueur);
    });
  }

  delete(joueur: Joueur): void {
    this.joueurs = this.joueurs.filter(j => j !== joueur);
    this.joueurService.delete(joueur).subscribe();
  }

  // Optimisation de l'index pour une liste.
  trackByFn(index, item) {
    return item.id; // unique id corresponding to the item
  }

  sortData(sort: Sort) {
    const data = this.joueurs.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'surnom':
          return this.compare(a.surnom, b.surnom, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
