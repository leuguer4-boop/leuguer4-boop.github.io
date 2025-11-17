import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nexus-code-portfolio';
  
  // État du menu pour la réactivité mobile
  isMenuOpen: boolean = false;

  /**
   * Inverse l'état d'ouverture/fermeture du menu mobile.
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Ferme le menu mobile après un clic sur un lien.
   */
  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}