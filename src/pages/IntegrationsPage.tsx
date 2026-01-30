import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getServiceBySlug } from '@/lib/serviceDetails'
import {
  ServiceHeroSection,
  ServiceCTASection,
  IntegrationsIntroSection,
  IntegrationsServicesSection,
  IntegrationsProcessSection,
  IntegrationsTypesSection,
} from '@/components/sections/service-detail'

export default function IntegrationsPage() {
  const service = getServiceBySlug('integration')!

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section - reuse existing */}
        <ServiceHeroSection service={service} />

        {/* Intro Section - description paragraph */}
        <IntegrationsIntroSection />

        {/* Services Section - 3 integration service cards */}
        <IntegrationsServicesSection />

        {/* Process Section - 4-step timeline */}
        <IntegrationsProcessSection />

        {/* Types Section - 6 integration type cards */}
        <IntegrationsTypesSection />

        {/* CTA Section - reuse existing */}
        <ServiceCTASection serviceTitle="Intégrations" />
      </main>

      <Footer />
    </div>
  )
}
