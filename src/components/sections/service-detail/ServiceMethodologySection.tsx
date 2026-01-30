import { SectionTitle } from '@/components/common/SectionTitle'
import type { MethodologyStep } from '@/lib/serviceDetails'

interface ServiceMethodologySectionProps {
  steps: MethodologyStep[]
  title?: string
  subtitle?: string
}

export function ServiceMethodologySection({
  steps,
  title = "Notre Méthodologie d'Implémentation",
  subtitle = "Une approche structurée pour garantir le succès de votre projet"
}: ServiceMethodologySectionProps) {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className="mb-16"
        />

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary-light to-primary hidden md:block" />

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center text-white font-display font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Step content card */}
                <div className="flex-1 bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-light hover:shadow-md transition-all">
                  <h3 className="font-display text-lg font-semibold text-primary-light mb-2 flex items-center gap-2">
                    <span>{step.icon}</span>
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
