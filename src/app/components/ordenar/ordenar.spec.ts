import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordenar } from './ordenar';

describe('Ordenar', () => {
  let component: Ordenar;
  let fixture: ComponentFixture<Ordenar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ordenar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ordenar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
