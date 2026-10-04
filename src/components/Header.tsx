import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { EASE_EDITORIAL } from "../lib/motion";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Investment Focus", to: "/focus" },
  { label: "Partner With Us", to: "/partner" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const dark = isHome && !scrolled;

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: EASE_EDITORIAL,
          delay: 0.2,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-paper-warm/85 backdrop-blur-xxxl border-b border-line/60"
            : "bg-transparent"
        }`}
      >
        <div className="container-editorial">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              aria-label="Poder Investments home"
              className="flex items-center gap-3"
            >
              <img
                src="/images/logo.png"
                alt=""
                className="h-16 w-auto pt-1"
                style={{
                  filter: dark ? "brightness(0) invert(1)" : "none",
                }}
              />

              <div className="leading-none">
                <div
                  className={`font-display text-xl tracking-tight font-medium transition-colors ${
                    dark ? "text-white" : "text-navy-950"
                  }`}
                >
                  PODER
                </div>

                <div
                  className={`text-[9px] font-mono tracking-[0.3em] transition-colors ${
                    dark ? "text-gold-400" : "text-gold-500"
                  }`}
                >
                  INVESTMENTS
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-9">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `group relative text-xs font-bold tracking-wide transition-colors ${
                      dark
                        ? "text-white/80 hover:text-white"
                        : "text-navy-900/80 hover:text-navy-950"
                    } ${isActive ? "text-gold-500" : ""}`
                  }
                >
                  {item.label}

                  <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 transition-colors ${
                dark ? "text-white" : "text-navy-950"
              }`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.5,
              ease: EASE_EDITORIAL,
            }}
            className="fixed inset-0 z-40 bg-navy-950 lg:hidden"
          >
            <div className="container-editorial flex flex-col justify-center h-full pt-24 pb-12">
              <nav className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.06,
                      duration: 0.5,
                      ease: EASE_EDITORIAL,
                    }}
                  >
                    <Link
                      to={item.to}
                      className="font-display text-4xl md:text-5xl text-white hover:text-gold-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto pt-12 border-t border-white/10 space-y-2 text-sm font-mono text-white/60"
              >
                <div>Johannesburg, South Africa</div>
                <div>info@poderinvestments.co.za</div>
                <div>+27 11 555 0123</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
