import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

import { ListJoueursComponent } from './core/joueurs/list-joueurs/list-joueurs.component';
import { DetailJoueurComponent } from './core/joueurs/detail-joueur/detail-joueur.component';
import { FormJoueurComponent } from './core/joueurs/form-joueur/form-joueur.component';

import { ListEquipesComponent } from './core/equipes/list-equipes/list-equipes.component';

const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'joueurs', component: ListJoueursComponent },
  { path: 'joueurs/new', component: FormJoueurComponent },
  { path: 'joueurs/:id', component: DetailJoueurComponent },
  { path: 'equipes', component: ListEquipesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
