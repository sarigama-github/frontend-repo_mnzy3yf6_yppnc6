import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/products`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h1 className="text-4xl font-bold text-white mb-6">Product Categories</h1>
        <p className="text-blue-200/80 mb-10">Browse our core range. Detailed specifications and samples available upon request.</p>

        {loading ? (
          <p className="text-blue-200/80">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <div key={p.slug} className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 hover:border-blue-500/40 transition-colors">
                <div className="aspect-video bg-slate-800/60" style={{backgroundImage:`url(${p.image})`, backgroundSize:'cover', backgroundPosition:'center'}} />
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-blue-200/80 mt-1">{p.description}</p>
                  {p.specs?.length ? (
                    <ul className="mt-3 text-xs text-blue-200/70 list-disc pl-5 space-y-1">
                      {p.specs.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  ) : null}
                  <a href="/contact" className="inline-block mt-4 text-sm font-semibold text-amber-400 hover:text-amber-300">Request Sample →</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  )
}
