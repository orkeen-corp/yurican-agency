import { useParams, Navigate } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getServiceBySlug } from '@/lib/serviceDetails'
import {
  ServiceHeroSection,
  ServiceValuePropSection,
  ServicePlatformsSection,
  ServiceMethodologySection,
  ServiceFeaturesSection,
  ServiceBenefitsSection,
  ServiceGuaranteesSection,
  ServiceCTASection,
} from '@/components/sections/service-detail'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  // Redirect to services page if service not found
  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <ServiceHeroSection service={service} />

        {/* Value Proposition */}
        <ServiceValuePropSection
          title={service.valueProp.title}
          description={service.valueProp.description}
        />

        {/* Platforms / Pillars */}
        {service.platforms && service.platforms.length > 0 && (
          <ServicePlatformsSection
            platforms={service.platforms}
            title={service.platformsTitle}
            subtitle={service.platformsSubtitle}
          />
        )}

        {/* Methodology Timeline */}
        <ServiceMethodologySection
          steps={service.methodology}
          title={service.methodologyTitle}
          subtitle={service.methodologySubtitle}
        />

        {/* Features Included */}
        <ServiceFeaturesSection
          features={service.features}
          title={service.featuresTitle}
        />

        {/* Benefits Grid */}
        <ServiceBenefitsSection
          benefits={service.benefits}
          title={service.benefitsTitle}
        />

        {/* Quality Guarantees (only if available) */}
        {service.guarantees && service.guarantees.length > 0 && (
          <ServiceGuaranteesSection guarantees={service.guarantees} />
        )}

        {/* CTA Section */}
        <ServiceCTASection serviceTitle={service.title} />
      </main>

      <Footer />
    </div>
  )
}
