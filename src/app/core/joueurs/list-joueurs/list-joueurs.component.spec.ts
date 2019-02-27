import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModuleModule } from 'src/app/modules/custom-material-module/custom-material-module.module';

import { ListJoueursComponent } from './list-joueurs.component';
import { SearchJoueursComponent } from '../search-joueurs/search-joueurs.component';
import { AppComponent } from 'src/app/app.component';
import { DetailJoueurComponent } from '../detail-joueur/detail-joueur.component';

import { JoueurService } from '../joueur/joueur.service';

const spyJoueurService = jasmine.createSpyObj('spyJoueurService', [
  'getJoueurs',
  'delete'
]);

const fakeJoueursListe = [{ id: 0, surnom: 'toto' }];

spyJoueurService.getJoueurs.and.returnValue(of(fakeJoueursListe));

describe('ListJoueursComponent', () => {
  let component: ListJoueursComponent;
  let fixture: ComponentFixture<ListJoueursComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListJoueursComponent,
        SearchJoueursComponent,
        DetailJoueurComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        BrowserAnimationsModule,
        CustomMaterialModuleModule
      ],
      providers: [{ provide: JoueurService, useValue: spyJoueurService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJoueursComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('doit charger la liste', () => {
    component.getJoueurs();
    expect(spyJoueurService.getJoueurs).toHaveBeenCalled();
    expect(component.joueurs.length).toBeGreaterThan(0);
    expect(component.joueurs[0].id).toBe(0);
  });

  it('doit visualiser la liste a l ecran', () => {
    const value = debugElement.query(By.css('.joueur a')).nativeElement
      .innerText;
    expect(value).toContain('toto');
  });

  // TODO delete
});
