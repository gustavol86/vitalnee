import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Educaciondiferencial } from './educaciondiferencial';

describe('Educaciondiferencial', () => {
  let component: Educaciondiferencial;
  let fixture: ComponentFixture<Educaciondiferencial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Educaciondiferencial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Educaciondiferencial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
