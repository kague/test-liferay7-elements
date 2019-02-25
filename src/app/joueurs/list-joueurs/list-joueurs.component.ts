import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur/joueur';
import { JoueurService } from '../joueur.service';

@Component({
  selector: 'app-list-joueurs',
  templateUrl: './list-joueurs.component.html',
  styleUrls: ['./list-joueurs.component.scss']
})
export class ListJoueursComponent implements OnInit {
  joueurs: Joueur[];

  constructor(private joueurService: JoueurService) {}

  ngOnInit() {
    this.getJoueurs();
  }
  getJoueurs(): void {
    this.joueurService
      .getJoueurs()
      .subscribe(joueurs => (this.joueurs = joueurs));
  }
}
