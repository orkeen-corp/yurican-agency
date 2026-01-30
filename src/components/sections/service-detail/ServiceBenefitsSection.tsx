import { SectionTitle } from '@/components/common/SectionTitle'
import type { Benefit } from '@/lib/serviceDetails'

interface ServiceBenefitsSectionProps {
  benefits: Benefit[]
  title?: string
}

export function ServiceBenefitsSection({
  benefits,
  title = "Les Bénéfices d'une Implémentation Réussie"
}: ServiceBenefitsSectionProps) {
  return (
    <section className="py-20 px-6 bg-gradient-storm">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={title}
          light
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{benefit.icon}</span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
