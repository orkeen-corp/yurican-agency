import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/common/Logo'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown, Search, Settings, Database, Link2, ClipboardCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onBookClick: () => void
}

const serviceSubItems = [
  {
    label: 'Audit RevOps',
    href: '/services/audit-revops',
    icon: Search,
  },
  {
    label: 'Implémentation CRM',
    href: '/services/implementation-crm',
    icon: Settings,
  },
  {
    label: 'Automatisation',
    href: '/services/automatisation',
    icon: ClipboardCheck,
  },
  {
    label: 'Data France',
    href: '/services/data-france',
    icon: Database,
  },
  {
    label: 'Intégrations',
    href: '/services/integration',
    icon: Link2,
  },
]

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Équipe', href: '/equipe' },
  { label: 'Contact', href: '/contact' },
]

export function MobileNav({ open, onOpenChange, onBookClick }: MobileNavProps) {
  const location = useLocation()
  const [servicesOpen, setServicesOpen] = useState(location.pathname.startsWith('/services'))

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="text-left">
          <SheetTitle>
            <Logo variant="dark" size="md" />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-2 mt-8">
          {/* Accueil */}
          <Link
            to="/"
            onClick={() => onOpenChange(false)}
            className={cn(
              'text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2',
              location.pathname === '/' && 'text-primary font-semibold'
            )}
          >
            Accueil
          </Link>

          {/* Services Collapsible */}
          <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2 group">
              <span
                className={cn(
                  'text-lg font-medium text-gray-700 group-hover:text-primary transition-colors',
                  location.pathname.startsWith('/services') && 'text-primary font-semibold'
                )}
              >
                Services
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 text-gray-500 transition-transform duration-200',
                  servicesOpen && 'rotate-180'
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
              <div className="pl-2 border-l-2 border-primary/20 ml-2 mt-2 space-y-1">
                {/* Tous les services */}
                <Link
                  to="/services"
                  onClick={() => onOpenChange(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    location.pathname === '/services'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-slate-100 hover:text-primary'
                  )}
                >
                  <span>Tous nos services</span>
                </Link>
                {/* Service items */}
                {serviceSubItems.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    onClick={() => onOpenChange(false)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                      location.pathname === service.href
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-gray-600 hover:bg-slate-100 hover:text-primary'
                    )}
                  >
                    <service.icon className="h-4 w-4 shrink-0" />
                    <span>{service.label}</span>
                  </Link>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Other Nav Items */}
          {navItems.filter(item => item.label !== 'Accueil').map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => onOpenChange(false)}
              className={cn(
                'text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2',
                location.pathname === item.href && 'text-primary font-semibold'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <Button
            onClick={onBookClick}
            className="w-full bg-gradient-cta text-white font-display font-semibold"
          >
            Réserver un audit gratuit
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
