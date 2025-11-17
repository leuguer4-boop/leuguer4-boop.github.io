import { Component, OnInit } from '@angular/core';

// Interface pour typer strictement les services offerts
export interface ServiceCard {
  icon: string; // Nom d'icône FontAwesome (e.g., 'code', 'server')
  title: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public sectionTitle: string = "Expertise Technologique Pointue";
  public sectionSubtitle: string = "Notre engagement : des architectures robustes et des expériences utilisateur sans compromis.";
  
  // Les services, fortement orientés vers votre stack Java/Spring et Angular/TypeScript
  public services: ServiceCard[] = [
    {
      icon: 'fas fa-server',
      title: 'Architecture Microservices (Java/Spring)',
      description: "Conception et déploiement d'architectures distribuées résilientes et hautement disponibles, exploitant les capacités avancées de **Spring Boot** et **Spring Cloud** (Eureka, Gateway, Config).",
      technologies: ['Java', 'Spring Boot 3', 'Microservices', 'Docker/Kubernetes', 'API REST'],
    },
    {
      icon: 'fas fa-code-branch',
      title: 'Développement Backend Robuste',
      description: "Implémentation de logiques métier complexes et sécurisées, en mettant l'accent sur l'intégrité des données avec **Spring Data JPA** et la gestion des transactions (y compris distribuées).",
      technologies: ['Java EE', 'Spring Security', 'Hibernate/JPA', 'Tests Unitaires/Intégration', 'PostgreSQL/MySQL'],
    },
    {
      icon: 'fas fa-globe',
      title: 'Ingénierie Frontend (Angular/TS)',
      description: "Création d'interfaces utilisateur modernes, réactives et ergonomiques, en tirant parti du **typage fort de TypeScript** et des dernières versions d'**Angular** (RxJS, OnPush).",
      technologies: ['Angular 17+', 'TypeScript', 'RxJS', 'NgRx/Signal', 'PWA', 'Accessibilité'],
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Sécurité Applicative et Conformité',
      description: "Intégration de mécanismes d'authentification et d'autorisation solides (OAuth 2.0/JWT) sur les couches **Spring Security** (Backend) et **Angular Guards** (Frontend).",
      technologies: ['Spring Security', 'JWT/OAuth2', 'CORS', 'OWASP Top 10', 'Encryption'],
    },
    {
      icon: 'fas fa-cogs',
      title: 'Optimisation de la Performance & CI/CD',
      description: "Audit et amélioration des performances (Core Web Vitals, temps de réponse du serveur). Automatisation des pipelines de build et de déploiement (CI/CD).",
      technologies: ['GitLab/Jenkins', 'SonarQube', 'Maven/Gradle', 'Performance Tuning', 'Change Detection'],
    },
    {
      icon: 'fas fa-cube',
      title: 'Formation et Transfert de Compétences',
      description: "Accompagnement de vos équipes sur les bonnes pratiques de développement, l'adoption de nouveaux frameworks et la mise en place de standards de code élevés.",
      technologies: ['Mentorat', 'Code Reviews', 'Ateliers Angular', 'Bonnes Pratiques Java'],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}