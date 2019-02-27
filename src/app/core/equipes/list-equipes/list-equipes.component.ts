import { Component, OnInit } from '@angular/core';

import { Equipe } from '../equipe/equipe';
import { EquipeService } from '../equipe/equipe.service';

import { Sort } from '@angular/material';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.scss']
})
export class ListEquipesComponent implements OnInit {
  equipes: Equipe[];
  sortedData: Equipe[];

  constructor(private equipeService: EquipeService) {}

  ngOnInit() {
    this.getEquipes();
  }

  getEquipes(): void {
    this.equipeService.getEquipes().subscribe(e => (this.equipes = e));
  }

  delete(equipe: Equipe): void {
    this.equipes = this.equipes.filter(e => e !== equipe);
    this.equipeService.delete(equipe).subscribe();
  }

  sortData(sort: Sort) {
    const data = this.equipes.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nom':
          return this.compare(a.nom, b.nom, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
