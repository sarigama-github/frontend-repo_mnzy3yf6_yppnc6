import { ShieldCheck, Factory, BadgeCheck, DollarSign, Globe2, Wrench } from 'lucide-react'

const items = [
  { icon: Factory, title: 'In-house manufacturing', desc: 'Vertical production with strict QA for consistent, repeatable quality.' },
  { icon: BadgeCheck, title: 'Export-quality materials', desc: 'Military-spec metals, braids, ribbons and threads from trusted suppliers.' },
  { icon: DollarSign, title: 'Competitive pricing', desc: 'Lean operations and efficient tooling reduce cost without compromising quality.' },
  { icon: Wrench, title: 'Custom orders available', desc: 'OEM/ODM capability, rapid prototyping, and flexible MOQs.' },
  { icon: Globe2, title: 'Global export ready', desc: 'Documentation, compliance and logistics support for international buyers.' },
  { icon: ShieldCheck, title: 'Trusted by agencies', desc: 'Serving Army, Navy, Air Force, Police and Security Forces worldwide.' },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose War Marco</h2>
        <p className="text-blue-200/80 max-w-3xl">We combine local craftsmanship with global standards to deliver precise, durable and presentable uniform accessories at scale.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-blue-500/40 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-600 to-amber-500 grid place-items-center text-white shadow-lg mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
