import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdadVerificacion } from './edad-verificacion';

describe('EdadVerificacion', () => {
  let component: EdadVerificacion;
  let fixture: ComponentFixture<EdadVerificacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdadVerificacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdadVerificacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
