import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModuleModule } from 'src/app/modules/custom-material-module/custom-material-module.module';

import { DetailJoueurComponent } from './detail-joueur.component';

import { JoueurService } from '../joueur/joueur.service';

const spyJoueurService = jasmine.createSpyObj('spyJoueurService', [
  'getJoueur',
]);

const fakeJoueur = { id: 0, surnom: 'toto' };

spyJoueurService.getJoueur.and.returnValue(of(fakeJoueur));

describe('DetailJoueurComponent', () => {
  let component: DetailJoueurComponent;
  let fixture: ComponentFixture<DetailJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailJoueurComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        BrowserAnimationsModule,
        CustomMaterialModuleModule,
        ReactiveFormsModule
      ],
     providers: [{ provide: JoueurService, useValue: spyJoueurService }],
     schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
