// Service Detail Page Data Types and Content

export interface Platform {
  id: string
  name: string
  description: string
  color: string // Tailwind border color class
  icon: string
}

export interface MethodologyStep {
  step: number
  icon: string
  title: string
  description: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface Guarantee {
  icon: string
  title: string
  description: string
}

export interface ServiceDetail {
  id: string
  icon: string
  title: string
  subtitle: string
  highlightedSubtitle?: string // Part of subtitle to highlight
  price: string
  valueProp: {
    title: string
    description: string
  }
  platforms?: Platform[]
  methodology: MethodologyStep[]
  features: Feature[]
  benefits: Benefit[]
  guarantees: Guarantee[]
  // Optional section title overrides
  platformsTitle?: string
  platformsSubtitle?: string
  methodologyTitle?: string
  methodologySubtitle?: string
  featuresTitle?: string
  benefitsTitle?: string
}

// Service Detail Data
const serviceDetails: Record<string, ServiceDetail> = {
  'implementation-crm': {
    id: 'implementation-crm',
    icon: '🚀',
    title: 'Implémentation CRM',
    subtitle: 'Déploiement HubSpot, Salesforce ou Pipedrive sur mesure pour booster votre croissance',
    highlightedSubtitle: 'HubSpot, Salesforce ou Pipedrive',
    price: 'À partir de 8 000€',
    valueProp: {
      title: 'Pourquoi une Implémentation CRM Sur Mesure ?',
      description: 'Un CRM mal configuré est pire que pas de CRM du tout. Notre expertise garantit un déploiement adapté à vos processus métier, une adoption maximale par vos équipes et un ROI rapide. Nous transformons votre CRM en véritable moteur de croissance.',
    },
    platforms: [
      {
        id: 'hubspot',
        name: 'HubSpot',
        description: 'Solution all-in-one idéale pour les PME et scale-ups. Marketing, Sales et Service Hub intégrés pour une expérience client unifiée.',
        color: 'border-t-orange-500',
        icon: '🟠',
      },
      {
        id: 'salesforce',
        name: 'Salesforce',
        description: 'Plateforme enterprise ultra-personnalisable. Parfaite pour les grandes organisations avec des besoins complexes et des processus avancés.',
        color: 'border-t-blue-500',
        icon: '🔵',
      },
      {
        id: 'pipedrive',
        name: 'Pipedrive',
        description: 'CRM simple et efficace centré sur la vente. Interface intuitive pour les équipes commerciales qui veulent des résultats rapides.',
        color: 'border-t-green-500',
        icon: '🟢',
      },
    ],
    methodology: [
      {
        step: 1,
        icon: '🎯',
        title: 'Cadrage & Analyse',
        description: 'Atelier de découverte pour comprendre vos processus, vos besoins métier et vos objectifs. Définition du périmètre du projet et des KPIs de succès.',
      },
      {
        step: 2,
        icon: '📐',
        title: 'Architecture & Design',
        description: 'Conception de l\'architecture CRM : objets personnalisés, propriétés, workflows, pipelines et automatisations. Documentation complète de la solution.',
      },
      {
        step: 3,
        icon: '⚙️',
        title: 'Configuration & Développement',
        description: 'Mise en place technique du CRM : paramétrage, intégrations API, migrations de données et développement de fonctionnalités sur mesure.',
      },
      {
        step: 4,
        icon: '🧪',
        title: 'Tests & Validation',
        description: 'Phase de tests complets avec les utilisateurs clés. Validation des workflows, des automatisations et de la qualité des données migrées.',
      },
      {
        step: 5,
        icon: '🎓',
        title: 'Formation & Déploiement',
        description: 'Formation des équipes (administrateurs et utilisateurs), documentation utilisateur et accompagnement au changement pour garantir l\'adoption.',
      },
      {
        step: 6,
        icon: '📈',
        title: 'Support & Optimisation',
        description: 'Suivi post-déploiement, résolution des problèmes, optimisation continue et nouvelles fonctionnalités selon vos besoins évolutifs.',
      },
    ],
    features: [
      {
        icon: '📊',
        title: 'Migration de Données',
        description: 'Nettoyage, transformation et migration sécurisée de vos données depuis vos anciens outils.',
      },
      {
        icon: '🔗',
        title: 'Intégrations',
        description: 'Connexion avec vos outils existants (ERP, facturation, email, calendrier, téléphonie).',
      },
      {
        icon: '⚡',
        title: 'Automatisations',
        description: 'Workflows intelligents pour automatiser les tâches répétitives et gagner en productivité.',
      },
      {
        icon: '📈',
        title: 'Dashboards & Rapports',
        description: 'Tableaux de bord personnalisés pour suivre vos KPIs et piloter votre activité.',
      },
      {
        icon: '⚙️',
        title: 'Personnalisation',
        description: 'Champs, objets et processus sur mesure adaptés à vos besoins métier spécifiques.',
      },
      {
        icon: '🔒',
        title: 'Gestion des Droits',
        description: 'Configuration des permissions, rôles et niveaux d\'accès pour sécuriser vos données.',
      },
    ],
    benefits: [
      {
        icon: '⏱️',
        title: 'Gain de Temps',
        description: 'Automatisation des tâches répétitives et processus optimisés pour gagner jusqu\'à 40% de temps.',
      },
      {
        icon: '📊',
        title: 'Visibilité 360°',
        description: 'Vue complète du parcours client et données centralisées pour de meilleures décisions.',
      },
      {
        icon: '💰',
        title: '+25% de CA',
        description: 'Augmentation du chiffre d\'affaires grâce à un meilleur suivi et une conversion optimisée.',
      },
      {
        icon: '🎯',
        title: 'Adoption Maximale',
        description: 'Interface intuitive et formation complète pour que vos équipes utilisent vraiment le CRM.',
      },
      {
        icon: '🔄',
        title: 'Évolutivité',
        description: 'Solution qui grandit avec votre entreprise et s\'adapte à vos nouveaux besoins.',
      },
      {
        icon: '📱',
        title: 'Mobilité',
        description: 'Accès depuis n\'importe où pour vos équipes terrain et commerciales nomades.',
      },
    ],
    guarantees: [
      {
        icon: '✅',
        title: 'Go-Live Garanti',
        description: 'Respect des délais et mise en production réussie',
      },
      {
        icon: '📚',
        title: 'Documentation',
        description: 'Guide complet et procédures détaillées',
      },
      {
        icon: '🎓',
        title: 'Formation Incluse',
        description: 'Sessions pour tous les niveaux d\'utilisateurs',
      },
      {
        icon: '🛟',
        title: 'Support 3 Mois',
        description: 'Accompagnement post-lancement inclus',
      },
    ],
  },
  'audit-revops': {
    id: 'audit-revops',
    icon: '🎯',
    title: 'Audit RevOps Complet',
    subtitle: 'Optimisez vos processus Revenue Operations et alignez vos équipes Sales, Marketing & Customer Success',
    highlightedSubtitle: 'processus Revenue Operations',
    price: 'À partir de 5 000€',
    // Section title overrides
    platformsTitle: "Les 3 Piliers de l'Audit",
    platformsSubtitle: "Une analyse complète de votre organisation commerciale",
    methodologyTitle: "Notre Méthodologie en 5 Étapes",
    methodologySubtitle: "Une approche structurée pour un audit complet et actionnable",
    featuresTitle: "Livrables de l'Audit",
    benefitsTitle: "Bénéfices de l'Audit RevOps",
    valueProp: {
      title: "Qu'est-ce qu'un Audit RevOps ?",
      description: "L'audit RevOps est une analyse approfondie de vos opérations commerciales pour identifier les points de friction, les opportunités d'optimisation et les leviers de croissance. Il permet d'aligner vos équipes, vos processus et vos outils pour maximiser votre efficacité commerciale.",
    },
    platforms: [
      {
        id: 'people',
        name: 'People (Personnes)',
        description: "Analyse de l'organisation des équipes, des rôles et responsabilités, de la collaboration inter-départements et des compétences clés.",
        color: 'border-t-primary-light',
        icon: '👥',
      },
      {
        id: 'process',
        name: 'Process (Processus)',
        description: "Évaluation des workflows commerciaux, du parcours client, des processus de lead management et de la cohérence opérationnelle.",
        color: 'border-t-primary-light',
        icon: '⚙️',
      },
      {
        id: 'technology',
        name: 'Technology (Technologie)',
        description: "Audit de votre stack technologique, de l'intégration des outils, de la qualité des données et de l'utilisation du CRM.",
        color: 'border-t-primary-light',
        icon: '🔧',
      },
    ],
    methodology: [
      {
        step: 1,
        icon: '🔍',
        title: 'Interviews & Découverte',
        description: "Entretiens avec les parties prenantes clés (Sales, Marketing, CS, Direction) pour comprendre les enjeux, les douleurs et les objectifs de chaque équipe.",
      },
      {
        step: 2,
        icon: '🔎',
        title: 'Analyse des Processus',
        description: "Cartographie complète de vos processus actuels : lead generation, qualification, nurturing, closing, onboarding et expansion.",
      },
      {
        step: 3,
        icon: '📊',
        title: 'Audit Technique & Data',
        description: "Évaluation de votre stack technologique, analyse de la qualité des données, des intégrations et de l'utilisation des outils.",
      },
      {
        step: 4,
        icon: '📈',
        title: 'Analyse des Métriques',
        description: "Examen des KPIs actuels, identification des métriques manquantes et proposition d'un framework de mesure de la performance.",
      },
      {
        step: 5,
        icon: '📋',
        title: 'Restitution & Roadmap',
        description: "Présentation des findings, recommandations priorisées et roadmap d'implémentation sur 3, 6 et 12 mois.",
      },
    ],
    features: [
      {
        icon: '📄',
        title: "Rapport d'Audit",
        description: "Document complet avec analyse détaillée de chaque pilier (People, Process, Technology).",
      },
      {
        icon: '🗺️',
        title: 'Process Mapping',
        description: "Cartographie visuelle de vos processus actuels et des flux de données.",
      },
      {
        icon: '📊',
        title: 'Dashboard KPIs',
        description: "Framework de métriques et indicateurs de performance recommandés.",
      },
      {
        icon: '✅',
        title: 'Quick Wins',
        description: "Liste d'actions rapides à implémenter pour des résultats immédiats.",
      },
      {
        icon: '📅',
        title: 'Roadmap Stratégique',
        description: "Plan d'action priorisé sur 3, 6 et 12 mois avec estimation d'impact.",
      },
      {
        icon: '💡',
        title: 'Recommandations Tech',
        description: "Suggestions d'outils et d'intégrations pour optimiser votre stack.",
      },
    ],
    benefits: [
      {
        icon: '📈',
        title: '+30% de Productivité',
        description: "Optimisation des processus et automatisation des tâches répétitives pour gagner en efficacité.",
      },
      {
        icon: '🎯',
        title: 'Alignement des Équipes',
        description: "Vision unifiée et collaboration renforcée entre Marketing, Sales et Customer Success.",
      },
      {
        icon: '📊',
        title: 'Qualité des Données',
        description: "Données fiables et exploitables pour prendre de meilleures décisions stratégiques.",
      },
      {
        icon: '⚡',
        title: 'Time-to-Market Réduit',
        description: "Processus plus fluides pour convertir les leads plus rapidement en clients.",
      },
      {
        icon: '👁️',
        title: 'Visibilité Accrue',
        description: "Métriques et dashboards pour suivre la performance en temps réel.",
      },
      {
        icon: '💰',
        title: 'ROI Optimisé',
        description: "Meilleure allocation des ressources et réduction des coûts opérationnels.",
      },
    ],
    guarantees: [], // Empty - not shown in reference
  },
  'data-france': {
    id: 'data-france',
    icon: '🇫🇷',
    title: 'Data France',
    subtitle: 'Enrichissement BODACC, SIRENE, BOAMP dans votre CRM',
    highlightedSubtitle: 'BODACC, SIRENE, BOAMP',
    price: '500€/mois',
    valueProp: {
      title: '',
      description: '',
    },
    methodology: [],
    features: [],
    benefits: [],
    guarantees: [],
  },
  'integration': {
    id: 'integration',
    icon: '🔗',
    title: 'Intégrations',
    subtitle: 'Connecteurs API custom, ERP français, systèmes legacy',
    highlightedSubtitle: 'API custom, ERP français, systèmes legacy',
    price: 'Sur devis',
    valueProp: {
      title: '',
      description: '',
    },
    methodology: [],
    features: [],
    benefits: [],
    guarantees: [],
  },
  'automatisation': {
    id: 'automatisation',
    icon: '🤖',
    title: 'Automatisation',
    subtitle: 'Optimisez vos opérations avec des workflows intelligents',
    highlightedSubtitle: 'workflows intelligents',
    price: 'À partir de 3 000€',
    // Section title overrides
    platformsTitle: "Nos Solutions d'Automatisation",
    platformsSubtitle: "Des outils puissants pour automatiser vos processus métier",
    benefitsTitle: "Les Avantages de l'Automatisation",
    valueProp: {
      title: "Pourquoi Automatiser vos Processus ?",
      description: "L'automatisation transforme vos opérations en éliminant les tâches répétitives et chronophages. Libérez vos équipes pour qu'elles se concentrent sur des activités à forte valeur ajoutée. Nos solutions d'automatisation connectent vos outils, synchronisent vos données et créent des workflows intelligents qui s'adaptent à vos règles métier.",
    },
    platforms: [
      {
        id: 'n8n',
        name: 'Workflows N8N',
        description: "Plateforme open-source puissante pour créer des automatisations complexes. Interface visuelle intuitive pour connecter vos applications et orchestrer vos processus métier.",
        color: 'border-t-blue-500',
        icon: '🔵',
      },
      {
        id: 'make',
        name: 'Make (Integromat)',
        description: "Solution no-code pour automatiser vos tâches entre applications. Créez des scénarios visuels et connectez plus de 1000 applications en quelques clics.",
        color: 'border-t-purple-500',
        icon: '⚙️',
      },
      {
        id: 'sequences',
        name: 'Séquences',
        description: "Automatisez vos parcours clients avec des séquences intelligentes. Nurturing email, suivi commercial, onboarding client personnalisés selon vos règles.",
        color: 'border-t-orange-500',
        icon: '📋',
      },
      {
        id: 'routing',
        name: 'Routing Intelligent',
        description: "Dirigez automatiquement vos leads, tickets ou demandes vers les bonnes équipes selon des critères personnalisables (secteur, montant, urgence...).",
        color: 'border-t-red-500',
        icon: '🚦',
      },
      {
        id: 'enrichissement',
        name: 'Enrichissement',
        description: "Enrichissez automatiquement vos contacts et entreprises avec des données externes (réseaux sociaux, bases B2B, informations légales et financières).",
        color: 'border-t-yellow-500',
        icon: '✨',
      },
      {
        id: 'revops',
        name: 'RevOps',
        description: "Alignez Sales, Marketing et Customer Success avec des processus unifiés. Optimisez votre funnel de bout en bout pour maximiser la croissance.",
        color: 'border-t-green-500',
        icon: '🚀',
      },
    ],
    methodology: [
      {
        step: 1,
        icon: '🔍',
        title: 'Audit des Processus',
        description: "Analyse approfondie de vos workflows actuels pour identifier les tâches répétitives, les goulots d'étranglement et les opportunités d'automatisation.",
      },
      {
        step: 2,
        icon: '📐',
        title: 'Conception des Workflows',
        description: "Design des automatisations avec définition des triggers, des conditions et des actions. Validation avec vos équipes avant développement.",
      },
      {
        step: 3,
        icon: '⚙️',
        title: 'Développement & Intégration',
        description: "Construction des workflows sur N8N, Make ou directement dans votre CRM. Connexion sécurisée avec vos outils existants via API.",
      },
      {
        step: 4,
        icon: '🧪',
        title: 'Tests & Validation',
        description: "Phase de tests complète avec données réelles. Vérification des cas limites et ajustement des règles métier si nécessaire.",
      },
      {
        step: 5,
        icon: '🚀',
        title: 'Déploiement & Monitoring',
        description: "Mise en production progressive avec monitoring en temps réel. Documentation et formation de vos équipes pour l'autonomie.",
      },
    ],
    features: [
      {
        icon: '🔄',
        title: 'Workflows Multi-étapes',
        description: "Création de workflows complexes avec conditions, boucles et branchements logiques.",
      },
      {
        icon: '🔗',
        title: 'Intégrations API',
        description: "Connexion avec vos outils : CRM, ERP, email, Slack, bases de données et applications métier.",
      },
      {
        icon: '📊',
        title: 'Tableaux de Bord',
        description: "Suivi en temps réel de l'exécution des workflows et des métriques de performance.",
      },
      {
        icon: '🔔',
        title: 'Alertes & Notifications',
        description: "Système d'alertes automatiques en cas d'erreur ou d'événement important.",
      },
      {
        icon: '📝',
        title: 'Documentation',
        description: "Documentation complète de chaque workflow pour faciliter la maintenance et l'évolution.",
      },
      {
        icon: '🛡️',
        title: 'Gestion des Erreurs',
        description: "Mécanismes de retry, fallback et logging pour garantir la fiabilité des automatisations.",
      },
    ],
    benefits: [
      {
        icon: '⚡',
        title: 'Gain de Temps',
        description: "Éliminez les tâches répétitives et chronophages. Libérez vos équipes pour qu'elles se concentrent sur des activités à forte valeur ajoutée.",
      },
      {
        icon: '🎯',
        title: 'Précision et Fiabilité',
        description: "Réduisez les erreurs humaines et garantissez une exécution parfaite de vos processus, 24h/24 et 7j/7.",
      },
      {
        icon: '📈',
        title: 'Scalabilité',
        description: "Gérez facilement l'augmentation de votre volume d'activité sans augmenter proportionnellement vos ressources.",
      },
      {
        icon: '🔄',
        title: 'Synchronisation',
        description: "Connectez tous vos outils et assurez une circulation fluide des données entre vos différentes plateformes.",
      },
      {
        icon: '💡',
        title: 'Intelligence',
        description: "Créez des workflows conditionnels qui s'adaptent en temps réel selon vos données et vos règles métier.",
      },
      {
        icon: '📊',
        title: 'Visibilité',
        description: "Suivez en temps réel l'exécution de vos processus et obtenez des insights précieux sur vos opérations.",
      },
    ],
    guarantees: [], // No guarantees section for this service
  },
}

/**
 * Get service detail by slug
 */
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug]
}

/**
 * Get all service slugs (for generating routes)
 */
export function getAllServiceSlugs(): string[] {
  return Object.keys(serviceDetails)
}
