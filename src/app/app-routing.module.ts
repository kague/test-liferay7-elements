import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ListJoueursComponent } from './core/joueurs/list-joueurs/list-joueurs.component';
import { DetailJoueurComponent } from './core/joueurs/detail-joueur/detail-joueur.component';

const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'joueurs', component: ListJoueursComponent },
  { path: 'joueurs/:id', component: DetailJoueurComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
