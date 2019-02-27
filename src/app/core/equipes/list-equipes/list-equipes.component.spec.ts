import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModuleModule } from 'src/app/modules/custom-material-module/custom-material-module.module';

import { ListEquipesComponent } from './list-equipes.component';

import { EquipeService } from '../equipe/equipe.service';


const spyEquipeService = jasmine.createSpyObj('spyEquipeService', [
  'getEquipes',
  'delete'
]);

describe('ListEquipesComponent', () => {
  let component: ListEquipesComponent;
  let fixture: ComponentFixture<ListEquipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEquipesComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        BrowserAnimationsModule,
        CustomMaterialModuleModule,
        ReactiveFormsModule
      ],
      providers: [{ provide: EquipeService, useValue: spyEquipeService }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
