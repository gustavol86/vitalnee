import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terapiaocupacional } from './terapiaocupacional';

describe('Terapiaocupacional', () => {
  let component: Terapiaocupacional;
  let fixture: ComponentFixture<Terapiaocupacional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Terapiaocupacional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Terapiaocupacional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
