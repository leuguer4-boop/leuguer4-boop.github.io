import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// Interface pour un typage strict
export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string; 
  author: string;
  date: string; // Format YYYY-MM-DD
  category: 'Angular' | 'Spring Boot' | 'Architecture' | 'TypeScript';
  tags: string[];
  readingTime: number; // en minutes
  imageUrl: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  // Optimisation de la performance : ne met à jour la vue que si les @Input changent ou un événement se produit.
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class BlogComponent implements OnInit {

  // Données de base des articles (focus technique)
  private readonly postsData: BlogPost[] = [
    {
      id: 1,
      title: 'Optimisation du Rendement Angular avec OnPush et RxJS',
      summary: 'Comment utiliser la détection de changements OnPush et les streams RxJS pour réduire les cycles de rendu et améliorer la fluidité de votre application.',
      content: "L'adoption de ChangeDetectionStrategy.OnPush est la première étape vers des performances Front-end de classe mondiale. En Angular, cela signifie que les composants ne sont vérifiés pour les changements que lorsque leurs @Input changent (par référence) ou lorsqu'un événement leur est lié. Pour travailler efficacement avec OnPush, il est crucial d'utiliser des modèles d'immuabilité (évitez les push() sur un tableau, utilisez plutôt un spread `[...array, newItem]`) et de gérer l'état avec des Observables/Async Pipe. L'Async Pipe délègue la souscription/désouscription et signale à Angular qu'un changement a eu lieu dans l'Observable, déclenchant une vérification ponctuelle.",
      author: 'Rovanold',
      date: '2025-09-26',
      category: 'Angular',
      tags: ['Angular', 'TypeScript', 'Performance', 'RxJS', 'OnPush'],
      readingTime: 7,
      imageUrl: 'assets/ordi.png'
    },
    {
      id: 2,
      title: 'Microservices en Java : Gérer la Cohérence Transactionnelle avec Spring Boot',
      summary: 'Exploration des patterns Saga et Two-Phase Commit pour assurer la fiabilité des données dans une architecture distribuée Spring Cloud.',
      content: "Dans un système de microservices construit avec Spring Boot, la gestion des transactions devient un défi. Si un service échoue, comment annuler les opérations des autres services déjà terminés ? Le pattern Saga est une séquence de transactions locales où chaque transaction met à jour la base de données de son service et publie un événement qui déclenche la prochaine étape. Pour une robustesse maximale, nous utilisons Spring Cloud Stream pour les communications asynchrones entre les services et Spring Data JPA pour les transactions locales.",
      author: 'Rovanold',
      date: '2025-04-15',
      category: 'Spring Boot',
      tags: ['Java', 'Spring Boot', 'Microservices', 'Architecture', 'JPA'],
      readingTime: 12,
      imageUrl: 'assets/tech.avif'
    },
    {
      id: 3,
      title: 'TypeScript Avancé : Les Types Conditionnels pour des API REST plus Sûres',
      summary: 'Utilisation des types conditionnels (`extends`) pour créer des types d\'objets de retour dynamiques basés sur le statut de la réponse HTTP.',
      content: "TypeScript est plus qu'un simple sur-ensemble de JavaScript; il est un outil d'architecture. En utilisant les types conditionnels (A extends B ? X : Y), nous pouvons forcer le compilateur à garantir que si une réponse d'API a un statut 200, la propriété `data` existe, mais si elle a un statut d'erreur, seule la propriété `error` est présente. Cela élimine des erreurs d'exécution et renforce la sécurité de notre Front-end Angular.",
      author: 'Rovanold',
      date: '2024-12-28',
      category: 'TypeScript',
      tags: ['TypeScript', 'Angular', 'Sécurité', 'Typage Fort'],
      readingTime: 5,
      imageUrl: 'assets/tech1.avif'
    },
  ];

  public filteredPosts: BlogPost[] = [];
  public currentCategory: string = 'Tous';
  public searchTerm: string = '';
  public uniqueCategories: string[] = ['Tous'];
  public selectedPost: BlogPost | null = null; // Pour la vue détail

  constructor() { }

  ngOnInit(): void {
    // Initialisation des données au chargement
    this.generateUniqueCategories();
    this.filterPosts(this.currentCategory);
  }

  private generateUniqueCategories(): void {
    const categories = new Set<string>(['Tous']);
    this.postsData.forEach(post => categories.add(post.category));
    this.uniqueCategories = Array.from(categories);
  }

  /**
   * Filtre les articles par catégorie et terme de recherche.
   * @param category La catégorie sélectionnée.
   */
  filterPosts(category: string): void {
    this.currentCategory = category;
    this.applyFilters();
  }
  
  /**
   * Applique le filtre de recherche (input event).
   * @param event L'événement d'input contenant le terme de recherche.
   */
  onSearchChange(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.applyFilters();
  }

  /**
   * Logique centrale de filtrage.
   */
  private applyFilters(): void {
    let results = this.postsData;

    // 1. Filtrage par catégorie
    if (this.currentCategory !== 'Tous') {
      results = results.filter(post => post.category === this.currentCategory);
    }

    // 2. Filtrage par terme de recherche
    if (this.searchTerm.trim()) {
      results = results.filter(post => 
        post.title.toLowerCase().includes(this.searchTerm) ||
        post.summary.toLowerCase().includes(this.searchTerm) ||
        post.content.toLowerCase().includes(this.searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(this.searchTerm))
      );
    }
    
    // Immuabilité pour déclencher OnPush
    this.filteredPosts = [...results]; 
  }

  /**
   * Ouvre la vue détaillée de l'article.
   * @param post L'article sélectionné.
   */
  openPost(post: BlogPost): void {
    this.selectedPost = post;
  }

  /**
   * Ferme la vue détaillée et revient à la liste.
   */
  closePost(): void {
    this.selectedPost = null;
  }

  /**
   * Fonction trackBy pour optimiser le rendu de la liste *ngFor.
   * @param index Index de l'élément dans le tableau.
   * @param post L'objet BlogPost courant.
   */
  trackByPostId(index: number, post: BlogPost): number {
    return post.id;
  }
}
