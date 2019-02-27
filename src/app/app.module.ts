import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModuleModule } from './modules/custom-material-module/custom-material-module.module';

import { InMemoryDataService } from './db/in-memory-data.service';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';

import { ListJoueursComponent } from './core/joueurs/list-joueurs/list-joueurs.component';
import { DetailJoueurComponent } from './core/joueurs/detail-joueur/detail-joueur.component';
import { FormJoueurComponent } from './core/joueurs/form-joueur/form-joueur.component';
import { SearchJoueursComponent } from './core/joueurs/search-joueurs/search-joueurs.component';

import { ListEquipesComponent } from './core/equipes/list-equipes/list-equipes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // Remove sur un vrai serveur
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          dataEncapsulation: false,
          delay: 500
        }),
    BrowserAnimationsModule,
    CustomMaterialModuleModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ListJoueursComponent,
    DetailJoueurComponent,
    FormJoueurComponent,
    SearchJoueursComponent,
    ListEquipesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
