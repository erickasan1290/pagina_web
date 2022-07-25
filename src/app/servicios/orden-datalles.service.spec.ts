import { TestBed } from '@angular/core/testing';

import { OrdenDatallesService } from './orden-datalles.service';

describe('OrdenDatallesService', () => {
  let service: OrdenDatallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenDatallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
