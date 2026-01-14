import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export function Logo({ variant = 'dark', size = 'md', showText = true, className }: LogoProps) {
  const sizes = {
    sm: { icon: 'h-6', text: 'text-lg' },
    md: { icon: 'h-8', text: 'text-xl' },
    lg: { icon: 'h-10', text: 'text-2xl' },
  }

  const logoSrc = variant === 'light'
    ? '/Yurican_Logo_Yurcian_Logomark_white.svg'
    : '/Yurican_Logo_Yurcian_Logomark_gradient.svg'

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <img
        src={logoSrc}
        alt="Yurican"
        className={cn(sizes[size].icon, 'w-auto')}
      />
      {showText && (
        <span
          className={cn(
            'font-display font-bold',
            sizes[size].text,
            variant === 'light' ? 'text-white' : 'text-gray-900'
          )}
        >
          Yurican
        </span>
      )}
    </div>
  )
}
