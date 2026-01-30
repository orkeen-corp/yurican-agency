import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getServiceBySlug } from '@/lib/serviceDetails'
import {
  ServiceHeroSection,
  ServiceCTASection,
  DataFranceIntroSection,
  DataFranceServicesSection,
  DataFranceProcessSection,
  DataFranceDataSection,
} from '@/components/sections/service-detail'

export default function DataFrancePage() {
  const service = getServiceBySlug('data-france')!

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section - reuse existing */}
        <ServiceHeroSection service={service} />

        {/* Intro Section - description paragraph */}
        <DataFranceIntroSection />

        {/* Services Section - 3 enrichment service cards */}
        <DataFranceServicesSection />

        {/* Process Section - 4-step timeline */}
        <DataFranceProcessSection />

        {/* Data Section - 6 data category cards */}
        <DataFranceDataSection />

        {/* CTA Section - reuse existing */}
        <ServiceCTASection serviceTitle="Data France" />
      </main>

      <Footer />
    </div>
  )
}
