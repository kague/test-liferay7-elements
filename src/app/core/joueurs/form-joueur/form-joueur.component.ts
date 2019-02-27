import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Joueur } from '../joueur/joueur';

import { JoueurService } from '../joueur/joueur.service';

@Component({
  selector: 'app-form-joueur',
  templateUrl: './form-joueur.component.html',
  styleUrls: ['./form-joueur.component.scss']
})
export class FormJoueurComponent implements OnInit {
  joueurControl = this.fb.group({
    surnom: ['', Validators.required]
  });

  @Input() joueur: Joueur;

  constructor(
    private fb: FormBuilder,
    private joueurService: JoueurService,
    private location: Location
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.joueurControl.value);
    if (this.joueurControl.invalid) {
      return;
    }

    this.alimenteJoueur();
    this.joueurService.add(this.joueur).subscribe(() => this.goBack());
  }

  alimenteJoueur(): void {
    this.joueur = new Joueur();
    this.joueur.surnom = this.joueurControl.get('surnom').value;
  }

  goBack(): void {
    this.location.back();
  }
}
