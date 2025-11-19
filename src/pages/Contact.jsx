import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (data.success) setStatus({ ok: true, msg: 'Inquiry sent. Our team will contact you shortly.' })
      else setStatus({ ok: false, msg: 'Received but not saved to database. We will still reach out.' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, msg: 'Could not submit. Please email warmarco1966@gmail.com or WhatsApp us.' })
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h1 className="text-4xl font-bold text-white mb-6">Contact & Inquiries</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-white font-semibold mb-2">Reach Us</h3>
            <p className="text-sm text-blue-200/80">Email: <a className="underline" href="mailto:warmarco1966@gmail.com">warmarco1966@gmail.com</a></p>
            <p className="text-sm text-blue-200/80">WhatsApp: <a className="underline" href="https://wa.me/" target="_blank" rel="noreferrer">Chat</a></p>
            <p className="text-sm text-blue-200/80">Address: Pakistan</p>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Prefer a quick form?</h4>
              <p className="text-sm text-blue-200/80">Share your requirement and we will respond within 24 hours.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Name</label>
                <input name="name" required className="mt-1 w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input name="email" type="email" required className="mt-1 w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Company</label>
                <input name="company" className="mt-1 w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-md" />
              </div>
              <div>
                <label className="text-sm">Phone / WhatsApp</label>
                <input name="phone" className="mt-1 w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-md" />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm">Country</label>
                <input name="country" className="mt-1 w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-md" />
              </div>
              <div>
                <label className="text-sm">Product Category</label>
                <input name="product_category" className="mt-1 w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-md" />
              </div>
              <div>
                <label className="text-sm">Quantity</label>
                <input name="quantity" className="mt-1 w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-md" />
              </div>
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-md" />
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-500">Get Quote</button>
              <a href="mailto:warmarco1966@gmail.com" className="px-5 py-2 rounded-md bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400">Request Sample</a>
            </div>
            {status && (
              <div className={`text-sm ${status.ok ? 'text-emerald-400' : 'text-amber-300'}`}>{status.msg}</div>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
