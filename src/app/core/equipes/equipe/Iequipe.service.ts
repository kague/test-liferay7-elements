import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from './equipe';

@Injectable({
  providedIn: 'root'
})
export abstract class IEquipeService {
  equipeUrl = 'api/equipes';
  abstract getEquipes(): Observable<Equipe[]>;
  abstract getEquipe(id: number): Observable<Equipe>;
  abstract add(equipe: Equipe): Observable<Equipe>;
  abstract update(equipe: Equipe): Observable<Equipe>;
  abstract delete(equipe: Equipe): Observable<Equipe>;
}
