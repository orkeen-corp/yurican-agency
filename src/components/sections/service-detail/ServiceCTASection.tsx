import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CalendlyModal } from '@/components/common/CalendlyModal'

interface ServiceCTASectionProps {
  serviceTitle?: string
}

export function ServiceCTASection({ serviceTitle }: ServiceCTASectionProps) {
  const [calendlyOpen, setCalendlyOpen] = useState(false)

  return (
    <>
      <section className="py-24 px-6 text-center bg-gradient-storm">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            {serviceTitle
              ? `Prêt à démarrer votre projet ${serviceTitle} ?`
              : 'Prêt à démarrer votre projet ?'}
          </h2>
          <p className="text-blue-100/80 text-lg mb-10">
            Discutons de vos besoins et voyons comment nous pouvons vous aider à atteindre vos
            objectifs.
          </p>

          <Button
            onClick={() => setCalendlyOpen(true)}
            className="px-10 py-6 bg-white text-primary rounded-lg font-display font-bold text-lg shadow-2xl hover:bg-blue-50 transition-all hover:scale-105"
          >
            Réserver mon audit gratuit
          </Button>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-blue-200/70">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Gratuit
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> 30 min
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Sans engagement
            </span>
          </div>
        </div>
      </section>

      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
    </>
  )
}
