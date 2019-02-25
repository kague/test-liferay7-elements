import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ListJoueursComponent } from './joueurs/list-joueurs/list-joueurs.component';
import { HomeComponent } from './home/home.component';
import { JoueurComponent } from './joueurs/joueur/joueur.component';

const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'joueurs', component: ListJoueursComponent },
  { path: 'joueurs/:id', component: JoueurComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
