import { async, TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { JoueurService } from './joueur.service';

describe('JoueurService core', () => {
  let injector: TestBed;
  let service: JoueurService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JoueurService]
    });
    injector = getTestBed();
    service = injector.get(JoueurService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getJoueurs', () => {
    it('doit retourner un Observable<Joueur[]>', () => {
      // valeurs de mock
      const dummyJoueurs = [
        { id: 0, surnom: 'John', equipes: [] },
        { id: 1, surnom: 'Doe', equipes: [] }
      ];
      // Check de l'attendu
      service.getJoueurs().subscribe(j => {
        expect(j.length).toBe(2);
        expect(j).toEqual(dummyJoueurs);
      });
      // intercept la requete du GET
      const req = httpMock.expectOne(`${service.joueurUrl}`);
      expect(req.request.method).toBe('GET');
      // force la reponse
      req.flush(dummyJoueurs);
    });
  });

  describe('#getJoueur', () => {
    it('doit retourner un Observable<Joueur>', () => {
      // valeurs de mock
      const joueur0 = { id: 0, surnom: 'John', equipes: [] };
      // Check de l'attendu
      service.getJoueur(0).subscribe(resultat => {
        expect(resultat.id).toBe(0);
        expect(resultat.surnom).toBe('John');
      });
      // intercept la requete du GET
      const req = httpMock.expectOne(`${service.joueurUrl}/0`);
      expect(req.request.method).toBe('GET');
      // force la reponse
      req.flush(joueur0);
    });
  });

  // TODO update
  // TODO add
  // TODO delete
  // TODO search
});
