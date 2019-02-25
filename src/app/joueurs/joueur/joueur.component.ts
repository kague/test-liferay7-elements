import { Component, OnInit, Input } from '@angular/core';
import { Joueur } from './joueur';
import { ActivatedRoute } from '@angular/router';
import { JoueurService } from '../joueur.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent implements OnInit {
  @Input() joueur: Joueur;

  constructor(
    private route: ActivatedRoute,
    private joueurService: JoueurService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getJoueur();
  }

  getJoueur(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.joueurService
      .getJoueur(id)
      .subscribe(joueur => (this.joueur = joueur));
  }

  goBack() {
    this.location.back();
  }
}
