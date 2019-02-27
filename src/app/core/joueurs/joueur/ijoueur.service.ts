import { Joueur } from './joueur';
import { Observable } from 'rxjs';

export abstract class IJoueurService {
  joueurUrl = 'api/joueurs';
  abstract getJoueurs(): Observable<Joueur[]>;
  abstract getJoueur(id: number): Observable<Joueur>;
  abstract add(joueur: Joueur): Observable<Joueur> ;
  abstract update(joueur: Joueur): Observable<any> ;
  abstract delete(joueur: Joueur | number): Observable<Joueur> ;
  abstract search(term: string): Observable<Joueur[]> ;
}
