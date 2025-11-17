import { Component, OnInit } from '@angular/core';

// Interface pour définir la structure d'un projet
export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  impact: string; // Ex: "Réduction du temps de chargement de 40%"
  type: 'Full-Stack' | 'Frontend' | 'Backend' | 'Audit';
  image: string; // Chemin vers l'image du projet
  githubUrl: string; // Lien vers le code (si public)
  liveUrl: string | null; // Lien vers la démo live
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  // Liste complète de tous les projets
  allProjects: Project[] = [
     {
    id: 1, // ID arbitraire
    title: 'Ziberia Partner Landscape Management System (ZPLMS)',
    shortDescription: "Solution informatique basée sur l'IA et entièrement personnalisable pour la gestion des réseaux de partenaires.",
    longDescription: "Plateforme complète pour centraliser, suivre et optimiser le « paysage » de partenaires (distributeurs, revendeurs, alliances stratégiques). Utilise l'Intelligence Artificielle pour la prédiction de performance, la gestion des risques et l'automatisation des workflows de partenariats.",
    technologies: [
        'Intelligence Artificielle', 
        'Machine Learning', 
        'Architecture Cloud (SaaS)', 
        'TypeScript', 
        'Microservices', 
        'API REST'
    ],
    impact: "Maximisation du retour sur investissement (ROI) des partenariats, amélioration de l'efficacité opérationnelle et prise de décision stratégique basée sur les données prédictives de l'IA.",
    type: 'Full-Stack',
    image: 'assets/yyy.avif', // Chemin d'image suggéré
    githubUrl: 'URL_DU_DEPOT_PRIVE', // Placeholder pour une solution B2B
    liveUrl: 'Https://www.zplms.com/it-solutions' // L'URL que vous avez fournie
},

   {
    id: 2, 
    title: 'Carvoit - Recherche et Distribution de Pièces Automobiles',
    shortDescription: "Plateforme e-commerce et service d'assistance pour la recherche et la distribution de pièces automobiles d’origine garanties.",
    longDescription: "Système dédié à l'approvisionnement et à la vente de pièces d'origine constructeur, certifiées et conformes aux normes. Inclut un moteur de recherche de pièces, un outil de traçabilité des commandes et une assistance client experte par chat et e-mail. Couvre un large éventail de marques et de catégories de pièces.",
    technologies: [
        'E-commerce', 
        'Gestion de l’Inventaire (ERP)', 
        'Système de Traçabilité des Commandes', 
        'Angular', 'TypeScript', 'Spring Boot', 'Java',
        'Support Client (Chat/Email)', 
        'Catalogue Produits'
    ],
    impact: "Assurer la durabilité, la performance et la sécurité des véhicules en fournissant aux professionnels et particuliers des pièces de rechange de haute qualité avec une traçabilité complète.",
    type: 'Full-Stack' ,
    image: 'assets/guyc1.jpg', 
    githubUrl: 'URL_DU_DEPOT_PRIVE_COMMERCIAL', 
    liveUrl: 'https://carvoit.com/pieces' 
},


     { id: 3,
      title: 'Plateforme E-Commerce Modulaire (B2B)',
      shortDescription: 'Développement d\'une solution Full-Stack de gestion de commandes à haut volume pour des entreprises B2B.',
      longDescription: 'Ce projet critique utilisait Angular 15+ pour une UI complexe avec RxJS pour gérer les états asynchrones. Le backend a été construit avec Spring Boot 3, implémentant des microservices RESTful et une base de données PostgreSQL. J\'ai mis l\'accent sur la sécurité (OAuth2) et la performance.',
      technologies: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL', 'Docker', 'RESTful API'],
      impact: 'Augmentation de 60% de la vitesse de traitement des commandes.',
      type: 'Full-Stack',
      image: 'assets/tech4.avif',
      githubUrl: 'URL_GITHUB_PROJET_1',
      liveUrl: 'URL_DEMO_PROJET_1',
    },
    {
      id: 4,
      title: 'API de Sécurité & Authentification (Nexus Auth)',
      shortDescription: 'Conception et implémentation d\'une API d\'authentification centralisée basée sur JWT et Spring Security.',
      longDescription: 'Axé sur le Backend, ce service offre des points de terminaison sécurisés pour la gestion des utilisateurs, l\'enregistrement et l\'autorisation via JWT. Infrastructure conteneurisée avec Docker pour un déploiement facile.',
      technologies: ['Spring Boot', 'Java', 'Spring Security', 'JWT', 'MySQL', 'Docker', 'Backend'],
      impact: 'Réduction du risque d\'exploitation par injection SQL à 0%.',
      type: 'Backend',
      image: 'assets/tech5.avif',
      githubUrl: 'URL_GITHUB_PROJET_2',
      liveUrl: null,
    },


    /*{
      id: 5,
      title: 'Dashboard de Monitoring IoT',
      shortDescription: 'Interface utilisateur moderne et réactive pour visualiser des données en temps réel provenant de capteurs IoT.',
      longDescription: 'Développé entièrement avec Angular et ses capacités graphiques (Chart.js / D3.js). Optimisation des performances des composants pour gérer des flux de données importants sans latence. Connexion via WebSockets au backend.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'HTML5/CSS3', 'Sass', 'Frontend', 'WebSockets'],
      impact: 'Visualisation des données avec un délai inférieur à 50ms.',
      type: 'Frontend',
      image: 'assets/accueil.webp',
      githubUrl: 'URL_GITHUB_PROJET_3',
      liveUrl: 'URL_DEMO_PROJET_3',
    },
      */

   /*  {
      id: 4,
      title: 'Audit de Performance et Refactoring',
      shortDescription: 'Analyse et refactoring du code legacy d\'une application bancaire pour améliorer la scalabilité et la maintenance.',
      longDescription: 'Mission d\'audit technique : identification des goulots d\'étranglement (lazy loading, architecture des composants, requêtes SQL). Fourniture d\'un rapport détaillé et implémentation des corrections (refactoring vers des modules Angular optimisés et des requêtes Spring Data JPA performantes).',
      technologies: ['Angular', 'Spring Boot', 'Audit', 'Performance', 'JPA', 'Refactoring'],
      impact: 'Réduction du temps de chargement initial de 40%.',
      type: 'Audit',
      image: 'assets/portfolio/audit.jpg',
      githubUrl: 'URL_RAPPORT_AUDIT',
      liveUrl: null,
    },*/
  ]; // Ajoutez d'autres projets ici...

  // Projet à afficher dans la modale
  selectedProject: Project | null = null; 
  
  // Liste des projets actuellement affichés (filtrés)
  filteredProjects: Project[] = []; 
  
  // Tag de filtre actuellement sélectionné
  currentFilter: string = 'All'; 

  // Liste des tags uniques pour le filtrage
  uniqueTags: string[] = ['All'];

  ngOnInit(): void {
    // Initialisation : tous les projets sont affichés
    this.filteredProjects = this.allProjects;
    
    // Générer la liste des tags uniques à partir de tous les projets
    this.allProjects.forEach(project => {
      project.technologies.forEach(tech => {
        if (!this.uniqueTags.includes(tech)) {
          this.uniqueTags.push(tech);
        }
      });
      // Ajouter les types comme tags
      if (!this.uniqueTags.includes(project.type)) {
          this.uniqueTags.push(project.type);
      }
    });
  }

  /**
   * Filtre la liste des projets en fonction du tag sélectionné.
   * @param tag Le tag sur lequel l'utilisateur a cliqué.
   */
  filterProjects(tag: string): void {
    this.currentFilter = tag;
    
    if (tag === 'All') {
      this.filteredProjects = this.allProjects;
    } else {
      // Filtrer si le tag correspond à une technologie OU au type de projet
      this.filteredProjects = this.allProjects.filter(project => 
        project.technologies.includes(tag) || project.type === tag
      );
    }
  }
  
  /**
   * Ouvre la modale des détails du projet.
   * @param project Le projet à afficher.
   */
  openProjectDetails(project: Project): void {
    this.selectedProject = project;
    // Afficher la modale (gérée par le CSS et le *ngIf dans le HTML)
  }

  /**
   * Ferme la modale.
   */
  closeProjectDetails(): void {
    this.selectedProject = null;
  }
}