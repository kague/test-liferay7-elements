import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModuleModule } from './modules/custom-material-module/custom-material-module.module';

import { HomeComponent } from './core/home/home.component';
import { ListJoueursComponent } from './core/joueurs/list-joueurs/list-joueurs.component';
import { SearchJoueursComponent } from './core/joueurs/search-joueurs/search-joueurs.component';
import { JoueurService } from './core/joueurs/joueur/joueur.service';
import { DetailJoueurComponent } from './core/joueurs/detail-joueur/detail-joueur.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ListJoueursComponent,
        SearchJoueursComponent,
        DetailJoueurComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        CustomMaterialModuleModule
      ],
      providers: [JoueurService]
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
