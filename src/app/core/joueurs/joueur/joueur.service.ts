import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IJoueurService } from './ijoueur.service';
import { Joueur } from './joueur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JoueurService extends IJoueurService {
  constructor(private http: HttpClient) {
    super();
  }

  getJoueurs(): Observable<Joueur[]> {
    return this.http
      .get<Joueur[]>(this.joueurUrl)
      .pipe(catchError(this.handleError));
  }

  getJoueur(id: number): Observable<Joueur> {
    const urlDetail = `${this.joueurUrl}/${id}`;
    return this.http.get<Joueur>(urlDetail).pipe(catchError(this.handleError));
  }

  add(joueur: Joueur): Observable<Joueur> {
    return this.http
      .post<Joueur>(this.joueurUrl, joueur, httpOptions)
      .pipe(catchError(this.handleError));
  }

  update(joueur: Joueur): Observable<any> {
    return this.http
      .put(this.joueurUrl, joueur, httpOptions)
      .pipe(catchError(this.handleError));
  }

  delete(joueur: Joueur | number): Observable<Joueur> {
    const id = typeof joueur === 'number' ? joueur : joueur.id;
    const url = `${this.joueurUrl}/${id}`;
    return this.http
      .delete<Joueur>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  search(term: string): Observable<Joueur[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
      .get<Joueur[]>(`${this.joueurUrl}/?name=${term}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}
