import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModuleModule } from 'src/app/modules/custom-material-module/custom-material-module.module';

import { AppComponent } from 'src/app/app.component';
import { ListJoueursComponent } from '../list-joueurs/list-joueurs.component';
import { SearchJoueursComponent } from '../search-joueurs/search-joueurs.component';
import { DetailJoueurComponent } from '../detail-joueur/detail-joueur.component';
import { FormJoueurComponent } from './form-joueur.component';

import { JoueurService } from '../joueur/joueur.service';

const spyJoueurService = jasmine.createSpyObj('spyJoueurService', ['add']);

describe('FormJoueurComponent', () => {
  let component: FormJoueurComponent;
  let fixture: ComponentFixture<FormJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListJoueursComponent,
        SearchJoueursComponent,
        DetailJoueurComponent,
        FormJoueurComponent
      ],
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
