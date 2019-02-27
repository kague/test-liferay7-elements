import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { JoueurService } from '../joueur/joueur.service';
import { Joueur } from '../joueur/joueur';

@Component({
  selector: 'app-search-joueurs',
  templateUrl: './search-joueurs.component.html',
  styleUrls: ['./search-joueurs.component.scss']
})
export class SearchJoueursComponent implements OnInit {
  joueurs$: Observable<Joueur[]>;
  private searchTerms = new Subject<string>();

  constructor(private joueurService: JoueurService) {}

  ngOnInit() {
    this.joueurs$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.joueurService.search(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
