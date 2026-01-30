interface ServiceValuePropSectionProps {
  title: string
  description: string
}

export function ServiceValuePropSection({ title, description }: ServiceValuePropSectionProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">
          {title}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}
