import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Psicopedagogia } from './psicopedagogia';

describe('Psicopedagogia', () => {
  let component: Psicopedagogia;
  let fixture: ComponentFixture<Psicopedagogia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Psicopedagogia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Psicopedagogia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
