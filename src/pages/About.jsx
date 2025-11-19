import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">About War Marco</h1>
        <p className="text-blue-200/80 max-w-3xl">
          Founded in 1966, War Marco is a Pakistan-based manufacturer and global exporter focused on precision uniform accessories for Army, Navy, Air Force, Police and Security Forces. Our in-house manufacturing, tool-making and finishing capabilities allow full control over quality and lead times.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-xl bg-slate-900/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold mb-2">Mission</h3>
            <p className="text-sm text-blue-200/80">Deliver durable, regulation‑compliant accessories that enhance the pride and presentation of uniformed personnel.</p>
          </div>
          <div className="rounded-xl bg-slate-900/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold mb-2">Quality Control</h3>
            <p className="text-sm text-blue-200/80">Incoming material inspection, in‑process checks and 100% final inspection with documented traceability.</p>
          </div>
          <div className="rounded-xl bg-slate-900/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold mb-2">Export Capability</h3>
            <p className="text-sm text-blue-200/80">International shipping, compliance documentation and packing optimized for long‑haul transit.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
