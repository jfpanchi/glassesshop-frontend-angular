/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlassesDataService } from './glasses-data.service';

describe('Service: GlassesData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlassesDataService]
    });
  });

  it('should ...', inject([GlassesDataService], (service: GlassesDataService) => {
    expect(service).toBeTruthy();
  }));
});
