import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edad-verificacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edad-verificacion.html',
  styleUrls: ['./edad-verificacion.css']
})
export class EdadVerificacion {
  @Output() verificacion = new EventEmitter<boolean>();
  visible = true; // controla si el modal se muestra o no

  confirmar(valor: boolean) {
    console.log('confirmar llamado con:', valor);
    this.visible = false;  // ocultar modal cuando se confirma o no
    this.verificacion.emit(valor);
  }

  ngOnInit() {
    document.body.style.overflow = 'hidden';
    console.log("EdadVerificacion se ha mostrado");
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
    console.log("✅ EdadVerificacion fue destruido");
  }
}