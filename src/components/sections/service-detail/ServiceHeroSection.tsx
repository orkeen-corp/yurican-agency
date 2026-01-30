import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import type { ServiceDetail } from '@/lib/serviceDetails'

interface ServiceHeroSectionProps {
  service: ServiceDetail
}

function HighlightedSubtitle({ subtitle, highlight }: { subtitle: string; highlight?: string }) {
  if (!highlight) {
    return <>{subtitle}</>
  }

  const parts = subtitle.split(highlight)
  if (parts.length === 1) {
    return <>{subtitle}</>
  }

  return (
    <>
      {parts[0]}
      <span className="text-primary-light font-semibold">{highlight}</span>
      {parts[1]}
    </>
  )
}

export function ServiceHeroSection({ service }: ServiceHeroSectionProps) {
  return (
    <section className="bg-gradient-storm pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #2F6AE8 0%, transparent 70%)',
            top: '10%',
            right: '10%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-blue-200/70 mb-8">
          <Link to="/" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{service.title}</span>
        </nav>

        {/* Hero content */}
        <div className="max-w-3xl text-center mx-auto">
          <span className="text-5xl mb-6 block">{service.icon}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80">
            <HighlightedSubtitle
              subtitle={service.subtitle}
              highlight={service.highlightedSubtitle}
            />
          </p>
        </div>
      </div>
    </section>
  )
}
