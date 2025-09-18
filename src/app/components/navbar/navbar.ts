import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  @ViewChild('sideMenu') sideMenu!: ElementRef;
  @ViewChild('menuToggle') menuToggle!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;
menuAbierto = false;

  toggleMenu() {
      this.menuAbierto = !this.menuAbierto;

    const menu = this.sideMenu.nativeElement as HTMLElement;
    const toggle = this.menuToggle.nativeElement as HTMLElement;
    const overlay = this.overlay.nativeElement as HTMLElement;

    const isActive = menu.classList.contains('active');

    if (isActive) {
      menu.classList.remove('active');
      overlay.style.display = 'none';
      toggle.style.display = 'flex';
    } else {
      menu.classList.add('active');
      overlay.style.display = 'block';
      toggle.style.display = 'none';
    }
  }

  closeMenu() {
    this.sideMenu.nativeElement.classList.remove('active');
    this.overlay.nativeElement.style.display = 'none';
    this.menuToggle.nativeElement.style.display = 'flex';
  }
}
