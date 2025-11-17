import { Component, OnInit } from '@angular/core';

/**
 * Composant pour la section "À Propos" (About).
 * Gère le contenu statique et les fonctionnalités d'ancrage.
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Logique d'initialisation du composant, si nécessaire.
  }
  
  /**
   * Fonction de défilement vers l'ancre spécifiée (smooth scroll).
   * Utilise l'API du navigateur pour un défilement fluide.
   * @param sectionId L'ID de la section cible (ex: 'timeline', 'impact').
   */
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Défilement fluide vers le haut de l'élément
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}