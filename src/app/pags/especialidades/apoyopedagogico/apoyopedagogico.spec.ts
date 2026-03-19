import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apoyopedagogico } from './apoyopedagogico';

describe('Apoyopedagogico', () => {
  let component: Apoyopedagogico;
  let fixture: ComponentFixture<Apoyopedagogico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apoyopedagogico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apoyopedagogico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
