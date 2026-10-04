import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70 pt-20 pb-10">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.png"
                alt=""
                className="h-45"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h3 className="eyebrow mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About</Link></li>
              <li><Link to="/focus" className="hover:text-gold-400 transition-colors">Investment Focus</Link></li>
              <li><Link to="/partner" className="hover:text-gold-400 transition-colors">Partner With Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow mb-5">Focus</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/focus/manufacturing" className="hover:text-gold-400 transition-colors">Manufacturing</Link></li>
              <li><Link to="/focus/energy" className="hover:text-gold-400 transition-colors">Energy</Link></li>
              <li><Link to="/focus/property" className="hover:text-gold-400 transition-colors">Property</Link></li>
              <li><Link to="/focus" className="hover:text-gold-400 transition-colors">Investment Parameters</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h3 className="eyebrow mb-5">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 shrink-0 text-gold-500" />
                <span>Johannesburg, South Africa</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-1 shrink-0 text-gold-500" />
                <span>+27 11 555 0123</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-1 shrink-0 text-gold-500" />
                <span>info@poderinvest.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-white/40">
          <span>© 2026 Poder Investments (Pty) Ltd. All rights reserved.</span>
          <span>
            Developed with love by{" "}
            <a
              href="https://xitdevs.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              XITDevs
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}