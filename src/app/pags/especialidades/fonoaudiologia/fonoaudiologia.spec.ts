import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fonoaudiologia } from './fonoaudiologia';

describe('Fonoaudiologia', () => {
  let component: Fonoaudiologia;
  let fixture: ComponentFixture<Fonoaudiologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fonoaudiologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fonoaudiologia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
