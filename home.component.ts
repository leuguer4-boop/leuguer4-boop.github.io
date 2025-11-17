import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // Utiliser OnPush pour garantir la performance, même si c'est une page simple
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class HomeComponent implements OnInit {

  // Données de la proposition de valeur (VP)
  public valuePropositions = [
    {
      icon: 'fas fa-layer-group',
      title: 'Applications Métier Sur Mesure',
      text: "Développement d'applications back-end **Java/Spring** et front-end **Angular/TypeScript** complexes pour automatiser vos processus critiques.",
    },
    {
      icon: 'fas fa-desktop',
      title: 'Sites Web et Plateformes Élégantes',
      text: "Création de sites vitrine **professionnels, rapides et ultra-responsives**, optimisés pour l'expérience utilisateur et un référencement maximal.",
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'Solutions E-commerce Robustes',
      text: "Conception et intégration de plateformes de vente en ligne performantes et sécurisées, avec gestion complète des transactions et des stocks.",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
