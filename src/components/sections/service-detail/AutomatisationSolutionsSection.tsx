import { SectionTitle } from '@/components/common/SectionTitle'

interface Solution {
  icon: string
  title: string
  titleColor: string // Tailwind text color class
  description: string
}

const solutions: Solution[] = [
  {
    icon: '🔵',
    title: 'Workflows N8N',
    titleColor: 'text-blue-600',
    description:
      "Plateforme open-source puissante pour créer des automatisations complexes. Interface visuelle intuitive pour connecter vos applications et orchestrer vos processus métier.",
  },
  {
    icon: '⚙️',
    title: 'Make (Integromat)',
    titleColor: 'text-purple-600',
    description:
      "Solution no-code pour automatiser vos tâches entre applications. Créez des scénarios visuels et connectez plus de 1000 applications en quelques clics.",
  },
  {
    icon: '📋',
    title: 'Séquences',
    titleColor: 'text-orange-600',
    description:
      "Automatisez vos parcours clients avec des séquences intelligentes. Nurturing email, suivi commercial, onboarding client personnalisés selon vos règles.",
  },
  {
    icon: '🚦',
    title: 'Routing Intelligent',
    titleColor: 'text-red-600',
    description:
      "Dirigez automatiquement vos leads, tickets ou demandes vers les bonnes équipes selon des critères personnalisables (secteur, montant, urgence...).",
  },
  {
    icon: '✨',
    title: 'Enrichissement',
    titleColor: 'text-amber-600',
    description:
      "Enrichissez automatiquement vos contacts et entreprises avec des données externes (réseaux sociaux, bases B2B, informations légales et financières).",
  },
  {
    icon: '🚀',
    title: 'RevOps',
    titleColor: 'text-emerald-600',
    description:
      "Alignez Sales, Marketing et Customer Success avec des processus unifiés. Optimisez votre funnel de bout en bout pour maximiser la croissance.",
  },
]

export function AutomatisationSolutionsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-violet-100">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Nos Solutions d'Automatisation"
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Title with inline icon */}
              <h3 className={`font-display text-lg font-semibold ${solution.titleColor} mb-3 flex items-center gap-2`}>
                <span className="text-xl">{solution.icon}</span>
                {solution.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
