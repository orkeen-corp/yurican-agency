import { SectionTitle } from '@/components/common/SectionTitle'

interface IntegrationCard {
  icon: string
  iconColor: string // Tailwind text color
  title: string
  titleColor: string // Tailwind text color
  description?: string // Optional intro text before items
  items: {
    label?: string // Optional bold label
    text: string
  }[]
}

const integrationCards: IntegrationCard[] = [
  {
    icon: '🔄',
    iconColor: 'text-blue-500',
    title: 'CRM ↔ ERP',
    titleColor: 'text-blue-600',
    items: [
      { label: 'Clients', text: 'comptes, contacts, historique' },
      { label: 'Commandes', text: 'devis, bons de commande' },
      { label: 'Facturation', text: 'factures, avoirs, paiements' },
      { label: 'Produits', text: 'catalogue, stocks, prix' },
    ],
  },
  {
    icon: '📊',
    iconColor: 'text-purple-500',
    title: 'CRM → BI / Data Warehouse',
    titleColor: 'text-purple-600',
    items: [
      { label: 'Pipeline', text: 'commercial en temps réel' },
      { label: 'KPIs', text: 'de performance des équipes' },
      { label: 'Prévisions', text: 'de CA et forecasting' },
      { label: 'Tableaux de bord', text: 'décisionnels' },
    ],
  },
  {
    icon: '📧',
    iconColor: 'text-rose-500',
    title: 'CRM ↔ Outils Marketing',
    titleColor: 'text-rose-600',
    items: [
      { label: 'Segments', text: 'synchronisation des listes' },
      { label: 'Campagnes', text: 'suivi des performances' },
      { label: 'Leads', text: 'scoring et qualification' },
      { label: 'Comportements', text: 'tracking des actions' },
    ],
  },
  {
    icon: '🗄️',
    iconColor: 'text-teal-500',
    title: 'Bases de Données Legacy',
    titleColor: 'text-teal-600',
    description: 'Connexion à vos anciennes bases (AS/400, Oracle, SQL Server...).',
    items: [
      { label: 'Extraction', text: 'de données historiques' },
      { label: 'Transformation', text: 'vers formats modernes' },
      { label: 'Chargement', text: 'dans vos nouveaux outils' },
      { label: 'Synchronisation', text: 'continue si besoin' },
    ],
  },
  {
    icon: '📞',
    iconColor: 'text-orange-500',
    title: 'CRM ↔ Téléphonie',
    titleColor: 'text-orange-600',
    description: 'Intégration avec votre standard téléphonique (IPBX, VoIP).',
    items: [
      { label: 'Click-to-call', text: 'depuis le CRM' },
      { label: 'Remontée', text: 'de fiches automatique' },
      { label: 'Historique', text: 'des appels tracés' },
      { label: 'Enregistrements', text: 'liés aux contacts' },
    ],
  },
  {
    icon: '🛒',
    iconColor: 'text-green-500',
    title: 'Marketplaces & E-commerce',
    titleColor: 'text-green-600',
    description: 'Connexion avec vos sites web et places de marché.',
    items: [
      { label: 'Commandes', text: 'web vers CRM/ERP' },
      { label: 'Stocks', text: 'synchronisés en temps réel' },
      { label: 'Clients', text: 'web centralisés' },
      { label: 'SAV', text: 'unifié multicanal' },
    ],
  },
]

export function IntegrationsTypesSection() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Types d'Intégrations"
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-2xl ${card.iconColor}`}>{card.icon}</span>
                <h3 className={`font-display text-lg font-semibold ${card.titleColor}`}>
                  {card.title}
                </h3>
              </div>

              {/* Optional description */}
              {card.description && (
                <p className="text-sm text-slate-600 mb-3">
                  {card.description}
                </p>
              )}

              {/* Data items list */}
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-slate-300 mt-1.5">•</span>
                    <span>
                      {item.label && <strong className="text-slate-700">{item.label}</strong>}
                      {item.label && ' : '}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
