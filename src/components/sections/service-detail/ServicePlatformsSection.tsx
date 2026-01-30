import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '@/components/common/SectionTitle'
import { cn } from '@/lib/utils'
import type { Platform } from '@/lib/serviceDetails'

interface ServicePlatformsSectionProps {
  platforms: Platform[]
  title?: string
  subtitle?: string
}

export function ServicePlatformsSection({
  platforms,
  title = "Nos Plateformes CRM Expertes",
  subtitle = "Nous sommes certifiés sur les principaux CRM du marché"
}: ServicePlatformsSectionProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Card
              key={platform.id}
              className={cn(
                'bg-white rounded-xl border-t-4 border-x border-b border-slate-200 hover:shadow-lg transition-all duration-300',
                platform.color
              )}
            >
              <CardHeader className="pb-2 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-50 flex items-center justify-center">
                  <span className="text-3xl">{platform.icon}</span>
                </div>
                <CardTitle className="font-display text-xl font-bold text-primary">
                  {platform.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {platform.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
