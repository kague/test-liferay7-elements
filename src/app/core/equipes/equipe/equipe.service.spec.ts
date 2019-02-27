import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { EquipeService } from './equipe.service';

describe('EquipeService', () => {
  let injector: TestBed;
  let service: EquipeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EquipeService]
    });
    injector = getTestBed();
    service = injector.get(EquipeService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: EquipeService = TestBed.get(EquipeService);
    expect(service).toBeTruthy();
  });
});
