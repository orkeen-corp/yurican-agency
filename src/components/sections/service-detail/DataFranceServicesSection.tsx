import { SectionTitle } from '@/components/common/SectionTitle'
import { Check } from 'lucide-react'

interface ServiceCard {
  icon: string
  iconBg: string // Tailwind gradient class
  title: string
  description: string
  results: string[]
}

const services: ServiceCard[] = [
  {
    icon: '🔍',
    iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
    title: 'Sirénisation',
    description:
      "Identification et validation de vos entreprises via le numéro SIREN/SIRET. Croisement avec la base SIRENE pour garantir l'exactitude de vos données.",
    results: [
      'Une identification fiable',
      'Meilleure qualité de données',
      'Facilite le croisement avec d\'autres bases',
    ],
  },
  {
    icon: '📊',
    iconBg: 'bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-500',
    title: 'Enrichissement Entreprise',
    description:
      "Complétez vos fiches entreprises avec les données légales, financières et les événements BODACC pour une vision 360° de vos prospects.",
    results: [
      'Amélioration de la qualité de votre base',
      'Rafraîchissement des informations',
      'Meilleure exploitation de vos bases',
    ],
  },
  {
    icon: '👥',
    iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    title: 'Enrichissement Contacts',
    description:
      "Identifiez et qualifiez les décideurs clés au sein de vos entreprises cibles. Emails professionnels vérifiés et coordonnées directes.",
    results: [
      'Contacts qualifiés et à jour',
      'Emails vérifiés (95% de délivrabilité)',
      'Accès direct aux décideurs',
    ],
  },
]

export function DataFranceServicesSection() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Nos Services d'Enrichissement"
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-full ${service.iconBg} flex items-center justify-center text-2xl mb-4 shadow-lg`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Results */}
              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Résultat :
                </p>
                <ul className="space-y-2">
                  {service.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
