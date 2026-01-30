import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getServiceBySlug } from '@/lib/serviceDetails'
import {
  ServiceHeroSection,
  ServiceCTASection,
  AutomatisationAdvantagesSection,
  AutomatisationSolutionsSection,
} from '@/components/sections/service-detail'

export default function AutomatisationPage() {
  const service = getServiceBySlug('automatisation')!

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section - reuse existing */}
        <ServiceHeroSection service={service} />

        {/* Advantages Section - custom for Automatisation */}
        <AutomatisationAdvantagesSection />

        {/* Solutions Section - custom for Automatisation */}
        <AutomatisationSolutionsSection />

        {/* CTA Section - reuse existing */}
        <ServiceCTASection serviceTitle="Automatisation" />
      </main>

      <Footer />
    </div>
  )
}
