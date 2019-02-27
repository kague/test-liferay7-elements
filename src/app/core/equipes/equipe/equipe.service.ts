import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { IEquipeService } from './Iequipe.service';
import { Equipe } from './equipe';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EquipeService extends IEquipeService {
  constructor(private http: HttpClient) {
    super();
  }
  getEquipes(): Observable<Equipe[]> {
    return this.http
      .get<Equipe[]>(this.equipeUrl)
      .pipe(catchError(this.handleError));
  }
  getEquipe(id: number): Observable<Equipe> {
    const urlDetail = `${this.equipeUrl}/${id}`;
    return this.http.get<Equipe>(urlDetail).pipe(catchError(this.handleError));
  }

  add(equipe: Equipe): Observable<Equipe> {
    return this.http
      .post<Equipe>(this.equipeUrl, equipe, httpOptions)
      .pipe(catchError(this.handleError));
  }

  update(equipe: Equipe): Observable<Equipe> {
    return this.http
      .put<Equipe>(this.equipeUrl, equipe, httpOptions)
      .pipe(catchError(this.handleError));
  }

  delete(equipe: Equipe): Observable<Equipe> {
    const id = typeof equipe === 'number' ? equipe : equipe.id;
    const url = `${this.equipeUrl}/${id}`;

    return this.http
      .delete<Equipe>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}
