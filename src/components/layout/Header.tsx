import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, Settings, Database, Link2, ClipboardCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/common/Logo'
import { MobileNav } from './MobileNav'
import { CalendlyModal } from '@/components/common/CalendlyModal'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const serviceSubItems = [
  {
    label: 'Audit RevOps',
    href: '/services/audit-revops',
    description: 'Diagnostic complet de votre stack RevOps',
    icon: Search,
  },
  {
    label: 'Implémentation CRM',
    href: '/services/implementation-crm',
    description: 'Déploiement HubSpot, Salesforce ou Pipedrive',
    icon: Settings,
  },
  {
    label: 'Automatisation',
    href: '/services/automatisation',
    description: 'Workflows intelligents avec N8N et Make',
    icon: ClipboardCheck,
  },
  {
    label: 'Data France',
    href: '/services/data-france',
    description: 'Données B2B françaises qualifiées',
    icon: Database,
  },
  {
    label: 'Intégrations',
    href: '/services/integration',
    description: 'Connexion de vos outils métier',
    icon: Link2,
  },
]

const navItems = [
  { label: 'Équipe', href: '/equipe' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const scrolled = useScrollPosition(100)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [calendlyOpen, setCalendlyOpen] = useState(false)

  // On non-home pages, always show solid header
  const showSolidHeader = scrolled || !isHomePage

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          showSolidHeader ? 'bg-white shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <Logo variant={showSolidHeader ? 'dark' : 'light'} />
          </Link>

          {/* Desktop Navigation */}
          <div
            className={cn(
              'hidden md:flex items-center gap-6',
              showSolidHeader ? 'text-gray-700' : 'text-white/90'
            )}
          >
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      'bg-transparent hover:bg-transparent focus:bg-transparent',
                      'data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent',
                      'font-medium text-base px-0 py-0 h-auto',
                      'transition-opacity hover:opacity-80',
                      'focus:text-inherit',
                      showSolidHeader
                        ? 'text-gray-700 data-[state=open]:text-primary'
                        : 'text-white/90 data-[state=open]:text-white',
                      location.pathname.startsWith('/services') && (showSolidHeader ? 'text-primary font-semibold' : 'text-white font-semibold')
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[420px] gap-1 p-3">
                      {/* View All Services Link */}
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 border-b border-slate-200 mb-2"
                          >
                            <div className="text-sm font-semibold text-primary">
                              Tous nos services
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Découvrez l'ensemble de notre offre RevOps
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {/* Service Items */}
                      {serviceSubItems.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className={cn(
                                'group flex items-start gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-slate-50 focus:bg-slate-50',
                                location.pathname === service.href && 'bg-primary/5'
                              )}
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary-light/10 text-primary group-hover:from-primary/20 group-hover:to-primary-light/20 transition-colors">
                                <service.icon className="h-4 w-4" />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-slate-900 group-hover:text-primary transition-colors">
                                  {service.label}
                                </div>
                                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'hover:opacity-80 transition-opacity font-medium',
                  location.pathname === item.href && 'text-primary font-semibold'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => setCalendlyOpen(true)}
              className={cn(
                'hidden md:inline-flex font-display font-semibold transition-all',
                showSolidHeader
                  ? 'bg-gradient-cta text-white hover:opacity-90'
                  : 'bg-white text-primary hover:bg-slate-100'
              )}
            >
              Prendre RDV
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn('md:hidden', showSolidHeader ? 'text-gray-700' : 'text-white')}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>

      <MobileNav
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        onBookClick={() => {
          setMobileOpen(false)
          setCalendlyOpen(true)
        }}
      />

      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
    </>
  )
}
