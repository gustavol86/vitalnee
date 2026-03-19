import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Educacionemocional } from './educacionemocional';

describe('Educacionemocional', () => {
  let component: Educacionemocional;
  let fixture: ComponentFixture<Educacionemocional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Educacionemocional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Educacionemocional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
