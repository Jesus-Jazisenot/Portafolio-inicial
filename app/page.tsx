"use client";

// ─── Datos personales ─────────────────────────────────────────────────────────

const NOMBRE = "Jesús Rodríguez";
const NOMBRE_COMPLETO = "Jesús Antonio Rodríguez Peraza";
const GITHUB_USER = "Jesus-Jazisenot";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
const WHATSAPP_NUMBER = "526695939300";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola Jesús, vi tu portafolio y me gustaría platicar contigo 👋");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconWhatsApp({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconGitHub({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
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

const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="font-bold text-lg gradient-text">{NOMBRE}</a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
             className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
            <IconGitHub size={20} />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-2 px-4">
            <IconWhatsApp size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Ingeniería en Sistemas Computacionales · TecNM Mazatlán
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Hola, soy
          <br />
          <span className="gradient-text">{NOMBRE}</span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Estudiante de Ingeniería en Sistemas Computacionales. Desarrollo software,
          automatizo procesos con Python y construyo sistemas con Arduino e impresión 3D
          desde Mazatlán, Sinaloa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#proyectos" className="btn-primary text-base px-8 py-4">
            Ver proyectos
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4 bg-white/10 hover:bg-white/20 shadow-none">
            <IconGitHub size={20} />
            GitHub
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            <IconWhatsApp size={20} />
            Contactar
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: "25+", label: "repositorios públicos" },
            { value: "TecNM", label: "Ing. Sistemas Computacionales" },
            { value: "Freelance", label: "proyectos para clientes" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">{s.value}</div>
              <div className="text-gray-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sobre mí ─────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Sobre mí</h2>
        <p className="section-subtitle text-center">{NOMBRE_COMPLETO}</p>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Soy estudiante de <strong className="text-white">Ingeniería en Sistemas Computacionales</strong> en
              el Instituto Tecnológico de Mazatlán (TecNM). Me gusta resolver problemas reales con código:
              desde un scraper que junta contactos comerciales hasta un asistente de WhatsApp para un negocio
              local o un sistema escolar completo sobre PostgreSQL.
            </p>
            <p>
              Fuera de la escuela trabajo como <strong className="text-white">freelancer</strong> en
              automatización con Python, páginas web y bots, y en mis proyectos personales combino software
              con hardware: Arduino UNO R4, sensores, máquinas de estados, interrupciones e impresión 3D
              con mi Creality K2 Plus.
            </p>
            <p>
              Lo que más me interesa ahora: agentes con IA que ejecutan herramientas, IoT y sistemas
              embebidos, y construir productos pequeños que funcionen solos y sin mantenimiento.
            </p>
          </div>

          <div className="md:col-span-2 card-dark p-6 text-sm space-y-4">
            <div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Formación</div>
              <div className="text-white font-medium">Ingeniería en Sistemas Computacionales</div>
              <div className="text-gray-400">Instituto Tecnológico de Mazatlán — TecNM</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Ubicación</div>
              <div className="text-gray-300 flex items-center gap-1"><IconMapPin /> Mazatlán, Sinaloa, México</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Intereses</div>
              <div className="flex flex-wrap gap-2">
                {["Automatización", "Desarrollo web", "Agentes con IA", "Arduino / IoT", "Impresión 3D"].map((t) => (
                  <span key={t} className="text-xs bg-blue-600/10 text-blue-400 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Proyectos ────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "DocuCita — RAG con citas",
    tag: "FastAPI · pgvector · Docker",
    desc: "Responde preguntas sobre la Ley Federal del Trabajo (1,163 artículos) citando el artículo exacto, o dice que no lo encontró. Búsqueda híbrida y evaluación con 41 preguntas etiquetadas.",
    repo: "docucita",
    icon: "⚖️",
    color: "from-teal-600/20 to-blue-900/20",
  },
  {
    title: "Remote Jobs Pipeline",
    tag: "dbt · DuckDB · GitHub Actions",
    desc: "ELT diario: descarga vacantes remotas de 3 APIs, las modela con dbt (29 modelos y tests) y publica un tablero de salarios en GitHub Pages.",
    repo: "remote-jobs-pipeline",
    icon: "🛰️",
    color: "from-orange-600/20 to-blue-900/20",
  },
  {
    title: "Clasificador de intención",
    tag: "scikit-learn · MLflow",
    desc: "Detecta 60 intenciones en mensajes en español: 83.4% de exactitud en MASSIVE, 1.5 ms por predicción, experimentos registrados en MLflow.",
    repo: "intent-classifier-es",
    icon: "🧠",
    color: "from-pink-600/20 to-blue-900/20",
  },
  {
    title: "Price Tracker",
    tag: "Python · FastAPI · SQLite",
    desc: "Rastreador de precios: scrapea tiendas, permite marcar productos desde una interfaz web y avisa por Telegram cuando baja el precio.",
    repo: "price-tracker-demo",
    icon: "📉",
    color: "from-blue-600/20 to-blue-900/20",
  },
  {
    title: "Leads Las Malvinas",
    tag: "Scraping · pandas · Excel",
    desc: "Extractor de contactos comerciales (teléfono, WhatsApp, correo, web) desde Google Maps, Páginas Amarillas y sitios web, fusionado y entregado en Excel a un cliente.",
    repo: "leads-malvinas",
    icon: "🗂️",
    color: "from-green-600/20 to-blue-900/20",
  },
  {
    title: "Abi — asistente Ekkfrio",
    tag: "TypeScript · WhatsApp API",
    desc: "Asistente de WhatsApp y panel administrativo para un negocio de aire acondicionado en Mazatlán.",
    repo: "abi-ekkfrio",
    icon: "❄️",
    color: "from-cyan-600/20 to-blue-900/20",
  },
  {
    title: "Jarvis — asistente con IA",
    tag: "Python · FastAPI · Claude",
    desc: "Agente autónomo con uso de herramientas, notificaciones por Telegram, voz y un ciclo de razonamiento propio.",
    repo: "jarvis-ai-assistant",
    icon: "🤖",
    color: "from-purple-600/20 to-blue-900/20",
  },
  {
    title: "Ambar — sistema escolar",
    tag: "Supabase · PostgreSQL",
    desc: "Sistema de gestión escolar con procedimientos almacenados, triggers, vistas, auditoría y alertas a tutores.",
    repo: "Ambar2",
    icon: "🎓",
    color: "from-amber-600/20 to-blue-900/20",
  },
  {
    title: "Google Maps Scraper",
    tag: "Python · Playwright",
    desc: "Extrae listados de negocios de Google Maps y los exporta a CSV. Base de otros proyectos de leads.",
    repo: "google-maps-business-scraper",
    icon: "🗺️",
    color: "from-red-600/20 to-blue-900/20",
  },
  {
    title: "Telegram Bot Starter",
    tag: "Python · python-telegram-bot",
    desc: "Plantilla lista para extender: comandos, botones inline, recordatorios programados y almacenamiento por usuario.",
    repo: "telegram-bot-starter",
    icon: "✈️",
    color: "from-sky-600/20 to-blue-900/20",
  },
  {
    title: "Excel Automation",
    tag: "Python · pandas · openpyxl",
    desc: "CLI para automatizar trabajo con Excel/CSV: unir, limpiar, generar reportes con gráficas y dividir archivos.",
    repo: "excel-automation-python",
    icon: "📊",
    color: "from-emerald-600/20 to-blue-900/20",
  },
  {
    title: "Prácticas con Arduino UNO R4",
    tag: "C++ · Sistemas Programables",
    desc: "Documentación de prácticas: control por voz, temporización con millis(), semáforo como máquina de estados y buffer circular con interrupciones.",
    repo: "Universidad",
    icon: "🔌",
    color: "from-indigo-600/20 to-blue-900/20",
  },
];

function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Código real, público en GitHub. Cada tarjeta lleva al repositorio.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {projects.map((p) => (
            <a
              key={p.repo}
              href={`${GITHUB_URL}/${p.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark overflow-hidden group hover:-translate-y-1 hover:border-blue-500/40 transition-all flex flex-col"
            >
              <div className={`h-32 bg-gradient-to-br ${p.color} flex items-center justify-center text-5xl border-b border-white/5`}>
                {p.icon}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold text-blue-400 bg-blue-600/10 px-2 py-1 rounded-full self-start">
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2 flex items-center gap-2">
                  {p.title}
                  <span className="text-gray-500 group-hover:text-blue-400 transition-colors"><IconExternal /></span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary bg-white/10 hover:bg-white/20 shadow-none mt-12">
          <IconGitHub size={18} />
          Ver todos los repositorios
        </a>
      </div>
    </section>
  );
}

// ─── Habilidades ──────────────────────────────────────────────────────────────

const skills = [
  { group: "Lenguajes", items: ["Python", "TypeScript / JavaScript", "C++ (Arduino)", "C#", "Dart", "SQL"] },
  { group: "Web y backend", items: ["React", "Next.js", "FastAPI", "Flask", "Node.js", "Tailwind CSS"] },
  { group: "Datos y automatización", items: ["pandas", "Playwright", "BeautifulSoup", "PostgreSQL / Supabase", "SQLite", "Telegram / WhatsApp API"] },
  { group: "IA y datos", items: ["Claude / agentes con tools", "RAG / pgvector", "Embeddings (Gemini)", "scikit-learn", "MLflow", "dbt / DuckDB"] },
  { group: "Hardware y fabricación", items: ["Arduino UNO R4 WiFi", "Sensores y actuadores", "Máquinas de estados", "Interrupciones (ISR)", "Impresión 3D (Creality K2 Plus)", "OrcaSlicer"] },
  { group: "Herramientas", items: ["Git / GitHub", "Docker", "GitHub Actions (CI)", "pytest", "Vercel", "Linux"] },
];

function Skills() {
  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">Lo que uso en la escuela, en freelance y en mis proyectos.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skills.map((s) => (
            <div key={s.group} className="card-dark p-6">
              <h3 className="text-white font-bold mb-4">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="text-sm bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-lg">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Servicios ────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "⚙️",
    title: "Automatización con Python",
    desc: "Scrapers, reportes automáticos en PDF/Excel, limpieza de datos y tareas repetitivas que corren solas.",
  },
  {
    icon: "🌐",
    title: "Páginas web",
    desc: "Landing pages y paneles administrativos modernos, rápidos y responsivos, listos para publicar.",
  },
  {
    icon: "💬",
    title: "Bots y notificaciones",
    desc: "Bots de Telegram y WhatsApp que atienden clientes, envían alertas o conectan con tus sistemas.",
  },
];

function Services() {
  return (
    <section id="servicios" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Servicios freelance</h2>
        <p className="section-subtitle">
          Trabajo por proyecto con negocios locales y clientes en línea. Primero te muestro una demo, luego decides.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card-dark p-6 text-left hover:-translate-y-1 transition-transform">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-8">Cotización sin compromiso según el alcance del proyecto.</p>
      </div>
    </section>
  );
}

// ─── Contacto ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center card-dark p-10 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-gray-400 mb-8 relative">
          Escríbeme y platicamos. Respondo rápido por WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            <IconWhatsApp size={20} />
            Escribir por WhatsApp
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4 bg-white/10 hover:bg-white/20 shadow-none">
            <IconGitHub size={20} />
            {GITHUB_USER}
          </a>
        </div>
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
          <span className="font-bold text-white text-base">{NOMBRE_COMPLETO}</span>
          <span className="flex items-center gap-1">
            <IconMapPin /> Mazatlán, Sinaloa, México
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <IconGitHub size={18} /> GitHub
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
            <IconWhatsApp size={18} /> WhatsApp
          </a>
        </div>

        <span>© {new Date().getFullYear()} {NOMBRE}</span>
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
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
