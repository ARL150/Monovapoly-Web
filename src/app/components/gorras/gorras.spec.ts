import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gorras } from './gorras';

describe('Gorras', () => {
  let component: Gorras;
  let fixture: ComponentFixture<Gorras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gorras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gorras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
