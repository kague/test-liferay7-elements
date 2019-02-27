import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModuleModule } from './modules/custom-material-module/custom-material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './core/home/home.component';
import { ListJoueursComponent } from './core/joueurs/list-joueurs/list-joueurs.component';
import { SearchJoueursComponent } from './core/joueurs/search-joueurs/search-joueurs.component';
import { DetailJoueurComponent } from './core/joueurs/detail-joueur/detail-joueur.component';
import { FormJoueurComponent } from './core/joueurs/form-joueur/form-joueur.component';
import { ListEquipesComponent } from './core/equipes/list-equipes/list-equipes.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ListJoueursComponent,
        FormJoueurComponent,
        SearchJoueursComponent,
        DetailJoueurComponent,
        ListEquipesComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        BrowserAnimationsModule,
        CustomMaterialModuleModule,
        ReactiveFormsModule
      ],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SHVB'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SHVB');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('SHVB !');
  });
});
