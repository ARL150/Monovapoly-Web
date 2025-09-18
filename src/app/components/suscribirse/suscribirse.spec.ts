import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suscribirse } from './suscribirse';

describe('Suscribirse', () => {
  let component: Suscribirse;
  let fixture: ComponentFixture<Suscribirse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suscribirse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Suscribirse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
