import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '@/components/common/SectionTitle'
import type { Feature } from '@/lib/serviceDetails'

interface ServiceFeaturesSectionProps {
  features: Feature[]
  title?: string
}

export function ServiceFeaturesSection({ features, title }: ServiceFeaturesSectionProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {title && (
          <SectionTitle
            title={title}
            className="mb-12"
          />
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-light hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="p-0 pb-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <CardTitle className="font-display text-lg font-semibold text-slate-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
