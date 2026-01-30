import { SectionTitle } from '@/components/common/SectionTitle'

interface DataCard {
  icon: string
  iconColor: string // Tailwind text color
  title: string
  titleColor: string // Tailwind text color
  items: string[]
}

const dataCards: DataCard[] = [
  {
    icon: '📄',
    iconColor: 'text-blue-500',
    title: 'Données Légales (SIRENE)',
    titleColor: 'text-blue-600',
    items: [
      'Dénomination : nom officiel',
      'Forme juridique : SA, SAS, SARL...',
      'SIREN/SIRET : identifiants uniques',
      'Code NAF/APE : activité',
      'Date de création',
      'Capital social',
      'Adresse du siège',
    ],
  },
  {
    icon: '📋',
    iconColor: 'text-blue-500',
    title: 'Événements Légaux (BODACC)',
    titleColor: 'text-blue-600',
    items: [
      "Créations d'entreprises",
      'Modifications statutaires',
      'Changements de dirigeants',
      'Procédures collectives',
      'Liquidations',
      'Radiations',
    ],
  },
  {
    icon: '🏛️',
    iconColor: 'text-orange-500',
    title: 'Marchés Publics (BOAMP)',
    titleColor: 'text-orange-600',
    items: [
      'Attributions de marchés',
      'Avis de concession',
      'Montants des marchés',
      "Secteurs d'activité",
      'Donneurs d\'ordre publics',
    ],
  },
  {
    icon: '💰',
    iconColor: 'text-amber-500',
    title: 'Données Financières',
    titleColor: 'text-amber-600',
    items: [
      "Chiffre d'affaires",
      'Résultat net',
      'Effectifs totaux',
      'Bilans comptables',
      'Scoring financier',
    ],
  },
  {
    icon: '👔',
    iconColor: 'text-blue-500',
    title: 'Dirigeants',
    titleColor: 'text-blue-600',
    items: [
      'Identité : nom, prénom',
      'Fonction officielle',
      'Date de nomination',
      'Mandataires sociaux',
      'Bénéficiaires effectifs',
    ],
  },
  {
    icon: '📧',
    iconColor: 'text-purple-500',
    title: 'Contacts Nominatifs',
    titleColor: 'text-purple-600',
    items: [
      'Email professionnel vérifié',
      'Téléphone direct (mobile)',
      'LinkedIn : URL du profil',
      'Fonction précise',
      'Département (commercial, RH...)',
      'Données conformes RGPD',
    ],
  },
]

export function DataFranceDataSection() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Données Disponibles"
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataCards.map((card, index) => (
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

              {/* Data items list */}
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-slate-300 mt-1.5">•</span>
                    <span>{item}</span>
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
