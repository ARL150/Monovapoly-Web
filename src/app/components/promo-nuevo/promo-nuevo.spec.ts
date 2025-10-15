import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoNuevo } from './promo-nuevo';

describe('PromoNuevo', () => {
  let component: PromoNuevo;
  let fixture: ComponentFixture<PromoNuevo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoNuevo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoNuevo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
