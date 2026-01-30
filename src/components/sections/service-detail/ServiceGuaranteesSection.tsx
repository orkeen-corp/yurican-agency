import { SectionTitle } from '@/components/common/SectionTitle'
import type { Guarantee } from '@/lib/serviceDetails'

interface ServiceGuaranteesSectionProps {
  guarantees: Guarantee[]
}

export function ServiceGuaranteesSection({ guarantees }: ServiceGuaranteesSectionProps) {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Notre Engagement Qualité"
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-light hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-4">
                <span className="text-2xl">{guarantee.icon}</span>
              </div>
              <h3 className="font-display text-base font-semibold text-primary mb-2">
                {guarantee.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
