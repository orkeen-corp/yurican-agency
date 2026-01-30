import { SectionTitle } from '@/components/common/SectionTitle'

interface Advantage {
  icon: string
  iconBg: string // Tailwind gradient class
  title: string
  description: string
}

const advantages: Advantage[] = [
  {
    icon: '⚡',
    iconBg: 'from-blue-500 to-blue-600',
    title: 'Gain de Temps',
    description:
      "Éliminez les tâches répétitives et chronophages. Libérez vos équipes pour qu'elles se concentrent sur des activités à forte valeur ajoutée.",
  },
  {
    icon: '🎯',
    iconBg: 'from-pink-500 to-rose-500',
    title: 'Précision et Fiabilité',
    description:
      "Réduisez les erreurs humaines et garantissez une exécution parfaite de vos processus, 24h/24 et 7j/7.",
  },
  {
    icon: '📈',
    iconBg: 'from-purple-500 to-violet-600',
    title: 'Scalabilité',
    description:
      "Gérez facilement l'augmentation de votre volume d'activité sans augmenter proportionnellement vos ressources.",
  },
  {
    icon: '🔄',
    iconBg: 'from-cyan-500 to-blue-500',
    title: 'Synchronisation',
    description:
      "Connectez tous vos outils et assurez une circulation fluide des données entre vos différentes plateformes.",
  },
  {
    icon: '💡',
    iconBg: 'from-amber-400 to-yellow-500',
    title: 'Intelligence',
    description:
      "Créez des workflows conditionnels qui s'adaptent en temps réel selon vos données et vos règles métier.",
  },
  {
    icon: '📊',
    iconBg: 'from-indigo-500 to-purple-600',
    title: 'Visibilité',
    description:
      "Suivez en temps réel l'exécution de vos processus et obtenez des insights précieux sur vos opérations.",
  },
]

export function AutomatisationAdvantagesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Les Avantages de l'Automatisation"
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 border-t-[3px] border-t-fuchsia-500 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon with gradient background */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.iconBg} flex items-center justify-center mb-4`}
              >
                <span className="text-2xl filter drop-shadow-sm">{advantage.icon}</span>
              </div>

              <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
