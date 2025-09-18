import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioDomicilio } from './servicio-domicilio';

describe('ServicioDomicilio', () => {
  let component: ServicioDomicilio;
  let fixture: ComponentFixture<ServicioDomicilio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioDomicilio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioDomicilio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
