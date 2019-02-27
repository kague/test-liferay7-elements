import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Joueur } from '../joueur/joueur';
import { JoueurService } from '../joueur/joueur.service';

@Component({
  selector: 'app-detail-joueur',
  templateUrl: './detail-joueur.component.html',
  styleUrls: ['./detail-joueur.component.scss']
})
export class DetailJoueurComponent implements OnInit {

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
      .subscribe(j => (this.joueur = j));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.joueurService.update(this.joueur).subscribe(() => this.goBack());
  }

}
