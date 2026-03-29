"use client";

const WHATSAPP_NUMBER = "526695939300";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Jesús, me interesa una demo gratis de tus servicios 👋"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconWhatsApp({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconPackage() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <span className="font-bold text-lg gradient-text">Jesús.dev</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-2 px-4">
          <IconWhatsApp size={16} />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Disponible para proyectos — Mazatlán, Sinaloa
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Automatizo y digitalizo
          <br />
          <span className="gradient-text">tu negocio</span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Soy Jesús, estudiante de Ciencias de la Computación. Creo páginas web
          modernas y automatizaciones con Python para negocios locales en Mazatlán.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            <IconWhatsApp size={20} />
            Pide tu demo gratis
          </a>
          <a href="#servicios" className="btn-primary text-base px-8 py-4 bg-white/10 hover:bg-white/20 shadow-none">
            Ver servicios
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: "2–5", label: "días de entrega" },
            { value: "✓", label: "Entrega con garantía" },
            { value: "gratis", label: "demo inicial" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-gray-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <IconCode />,
    title: "Página web básica",
    price: "$2,500",
    desc: "Landing page moderna, responsive y rápida. Ideal para tener presencia online y atraer clientes desde Google.",
    features: ["Diseño moderno y responsive", "Optimizada para móvil", "Formulario de contacto", "Entrega en 3–5 días"],
    highlight: false,
  },
  {
    icon: <IconZap />,
    title: "Reporte automático de ventas PDF",
    price: "$1,000",
    desc: "Script en Python que genera reportes profesionales en PDF con gráficas, totales y análisis automáticamente.",
    features: ["Genera PDFs automáticamente", "Gráficas de ventas incluidas", "Compatible con Excel/CSV", "Entrega en 2–3 días"],
    highlight: false,
  },
  {
    icon: <IconPackage />,
    title: "Paquete completo",
    price: "$4,500",
    desc: "Página web + automatización de reportes. La solución más completa para digitalizar tu negocio de una sola vez.",
    features: ["Todo lo anterior incluido", "Integración entre sistemas", "Soporte por 30 días", "Mejor precio"],
    highlight: true,
  },
];

function Services() {
  return (
    <section id="servicios" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Servicios y precios</h2>
        <p className="section-subtitle">
          Precios fijos en pesos mexicanos, sin sorpresas. Paga al recibir el trabajo.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`card-dark p-6 text-left flex flex-col transition-transform hover:-translate-y-1 ${
                s.highlight
                  ? "border-blue-500/50 ring-1 ring-blue-500/30 relative"
                  : ""
              }`}
            >
              {s.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Más popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${s.highlight ? "bg-blue-600/20 text-blue-400" : "bg-white/5 text-gray-300"}`}>
                {s.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">{s.desc}</p>

              <ul className="space-y-2 mb-8 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-4 h-4 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-end justify-between mt-auto">
                <div>
                  <span className="text-3xl font-extrabold text-white">{s.price}</span>
                  <span className="text-gray-500 text-sm ml-1">MXN</span>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-primary text-sm py-2 px-4 ${s.highlight ? "" : "bg-white/10 hover:bg-white/20 shadow-none"}`}
                >
                  Lo quiero
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    icon: <IconMessage />,
    title: "Me contactas por WhatsApp",
    desc: "Cuéntame qué necesitas. Sin formularios complicados, directamente al chat.",
  },
  {
    num: "02",
    icon: <IconPlay />,
    title: "Demo gratis",
    desc: "Te muestro un prototipo o ejemplo antes de que pagues un solo peso.",
  },
  {
    num: "03",
    icon: <IconTruck />,
    title: "Entrega en días",
    desc: "Recibe tu proyecto terminado y listo para usar en 2 a 5 días hábiles.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Cómo funciona</h2>
        <p className="section-subtitle">
          Un proceso simple y sin riesgos. Primero ves, luego decides.
        </p>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center">
              {/* Step number */}
              <div className="text-xs font-bold text-blue-500 tracking-widest mb-4">{step.num}</div>

              {/* Icon circle */}
              <div className="w-16 h-16 rounded-2xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 relative z-10">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="md:hidden my-6 text-gray-600 text-2xl">↓</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            <IconWhatsApp size={20} />
            Empezar ahora — Es gratis
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "Reporte de Ventas PDF",
    tag: "Automatización Python",
    desc: "Script que lee un CSV de ventas y genera un reporte PDF semanal con gráficas de barras y tabla de productos.",
    color: "from-blue-600/20 to-blue-900/20",
    icon: "📊",
  },
  {
    title: "Landing Page Restaurante",
    tag: "Página Web",
    desc: "Página web para un restaurante de Mazatlán con menú, galería de fotos, ubicación y botón de WhatsApp.",
    color: "from-purple-600/20 to-blue-900/20",
    icon: "🍽️",
  },
  {
    title: "Control de Inventario",
    tag: "Automatización Python",
    desc: "Sistema que monitorea el inventario de una tienda y envía alertas por WhatsApp cuando el stock es bajo.",
    color: "from-green-600/20 to-blue-900/20",
    icon: "📦",
  },
];

function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Ejemplos de lo que puedo crear para tu negocio.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {projects.map((p) => (
            <div key={p.title} className="card-dark overflow-hidden group hover:-translate-y-1 transition-transform">
              {/* Screenshot placeholder */}
              <div className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center text-6xl border-b border-white/5 group-hover:scale-105 transition-transform`}>
                {p.icon}
              </div>

              <div className="p-5">
                <span className="text-xs font-semibold text-blue-400 bg-blue-600/10 px-2 py-1 rounded-full">
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center card-dark p-10 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
          ¿Listo para digitalizar tu negocio?
        </h2>
        <p className="text-gray-400 mb-8 relative">
          Escríbeme hoy y te doy una demo gratis. Sin compromisos.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4 relative">
          <IconWhatsApp size={20} />
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-bold text-white text-base">Jesús.dev</span>
          <span className="flex items-center gap-1">
            <IconMapPin /> Mazatlán, Sinaloa, México
          </span>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
        >
          <IconWhatsApp size={18} />
          Contactar por WhatsApp
        </a>

        <span>© {new Date().getFullYear()} Jesús. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Projects />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
