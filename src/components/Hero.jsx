import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#1e3a8a,transparent_30%),radial-gradient(circle_at_80%_30%,#0f172a,transparent_30%),radial-gradient(circle_at_50%_80%,#ca8a04,transparent_25%)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur-sm bg-slate-900/50 border border-white/10 rounded-2xl p-8">
          <p className="text-sm tracking-widest text-blue-200/80 uppercase mb-4">Pakistan Manufacturer • Global Exporter</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Premium Uniform Accessories for Armed Forces & Law‑Enforcement Agencies Worldwide.
          </h1>
          <p className="mt-6 text-lg text-blue-100/90">
            War Marco supplies rank badges, medals, buttons, cap badges, epaulettes, ribbons, beret badges and custom metal accessories — engineered for durability and precision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
              Get Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/products" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors">
              Browse Products
            </Link>
            <a href="#why" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800 text-blue-100 font-semibold hover:bg-slate-700 transition-colors">
              Why Choose Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
