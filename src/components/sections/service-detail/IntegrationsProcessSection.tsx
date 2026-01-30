import { SectionTitle } from '@/components/common/SectionTitle'

interface ProcessStep {
  step: number
  icon: string
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    step: 1,
    icon: '🔍',
    title: 'Audit Technique',
    description:
      'Analyse de votre architecture existante : API disponibles, formats de données, contraintes techniques, volumes, fréquence de synchronisation souhaitée.',
  },
  {
    step: 2,
    icon: '📄',
    title: 'Conception du Connecteur',
    description:
      'Définition du mapping de données, des règles de transformation, de la gestion des erreurs et des mécanismes de reprise sur incident.',
  },
  {
    step: 3,
    icon: '⚙️',
    title: 'Développement & Tests',
    description:
      'Développement du connecteur, tests unitaires et d\'intégration, validation sur un environnement de préproduction avec vos données réelles.',
  },
  {
    step: 4,
    icon: '🚀',
    title: 'Déploiement & Suivi',
    description:
      'Mise en production avec surveillance active, formation de vos équipes, documentation technique et support continu pour les évolutions.',
  },
]

export function IntegrationsProcessSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Les Étapes du Process"
          className="mb-12"
        />

        {/* Timeline container */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-violet-500 to-purple-600 hidden md:block" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  {/* Step number circle */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    {/* Title with icon */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{step.icon}</span>
                      <h3 className="font-display text-lg font-bold text-violet-700">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
