export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-blue-200/80">
        <div>
          <h4 className="text-white font-semibold mb-3">War Marco</h4>
          <p className="text-sm">Pakistan-based manufacturer and exporter of premium uniform accessories for military, police and security forces.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">Email: <a className="underline hover:text-white" href="mailto:warmarco1966@gmail.com">warmarco1966@gmail.com</a></p>
          <p className="text-sm">WhatsApp: <a className="underline hover:text-white" href="https://wa.me/" target="_blank" rel="noreferrer">Chat</a></p>
          <p className="text-sm">Address: Pakistan</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/" className="hover:text-white">Get Quote</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Certifications</h4>
          <p className="text-sm">Export compliant documentation available on request.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-blue-300/60">© {new Date().getFullYear()} War Marco. All rights reserved.</div>
    </footer>
  )
}
