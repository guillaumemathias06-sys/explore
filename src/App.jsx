import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Gift, CreditCard, QrCode, Shield, Phone, CalendarRange, Users2, CheckCircle2 } from "lucide-react";

// Brand colors
const COLORS = {
  primary: "#0077B6", // Bleu azur Nice
  accent: "#FF7B54", // Orange énergique
  ink: "#0F172A", // Slate-900
};

// Inline SVG Logo (minimaliste + universel)
const ExploreLogo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-label="Logo Explore" role="img">
    <defs>
      <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.primary} />
      </marker>
    </defs>
    <circle cx="32" cy="32" r="30" fill={COLORS.accent} />
    <path
      d="M16 40 C 22 20, 36 26, 44 16"
      fill="none"
      stroke={COLORS.primary}
      strokeWidth="4"
      strokeDasharray="6 8"
      markerEnd="url(#arrow)"
    />
  </svg>
);

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
    {children}
  </span>
);

const Nav = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <ExploreLogo />
          <span className="text-xl font-extrabold tracking-tight" style={{ color: COLORS.primary }}>EXPLORE</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#concept" className="text-sm text-slate-700 hover:text-slate-900">Concept</a>
          <a href="#experiences" className="text-sm text-slate-700 hover:text-slate-900">Expériences</a>
          <a href="#tarifs" className="text-sm text-slate-700 hover:text-slate-900">Tarifs</a>
          <a href="#partenaires" className="text-sm text-slate-700 hover:text-slate-900">Partenaires</a>
          <a href="#faq" className="text-sm text-slate-700 hover:text-slate-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#waitlist" className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 md:inline-flex">Rejoindre la bêta</a>
          <a href="#app" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Télécharger l'app <Phone size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-orange-100 via-white to-white">
      <Section>
        <div className="relative grid items-center gap-10 py-16 sm:py-20 md:grid-cols-2 md:gap-14 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge>
                <MapPin className="mr-2 h-3.5 w-3.5" /> Nice & Côte d'Azur
              </Badge>
              <Badge>
                <Sparkles className="mr-2 h-3.5 w-3.5" /> Bêta - Tarif de lancement
              </Badge>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Chaque semaine, une <span style={{ color: COLORS.primary }}>nouvelle expérience</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Explore est l'abonnement mensuel pour vivre des micro‑aventures locales (sport, bien‑être, food, culture) à prix doux. Réservez, scannez, profitez.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#waitlist" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow hover:bg-slate-800">
                Rejoindre la liste d'attente <ArrowRight size={18} />
              </a>
              <a href="#tarifs" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50">
                Voir les tarifs
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Shield size={16} /> Annulable à tout moment</div>
              <div className="flex items-center gap-2"><CalendarRange size={16} /> 1 expérience / semaine</div>
              <div className="flex items-center gap-2"><Users2 size={16} /> Invitez un ami en option</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            {/* Pass dynamique de démonstration */}
            <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <ExploreLogo className="h-10 w-10" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Pass hebdo</div>
                  <div className="text-lg font-bold" style={{ color: COLORS.primary }}>EXPLORE</div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-blue-50 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-slate-600">Expérience de la semaine</div>
                    <div className="mt-1 text-xl font-semibold text-slate-900">Yoga sunrise sur la plage</div>
                    <div className="mt-1 text-sm text-slate-600">Samedi, 7h30 — Castel, Nice</div>
                  </div>
                  <div className="rounded-xl border border-slate-300 bg-white p-2">
                    <QrCode size={48} />
                  </div>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> Pass valable 7 jours</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> Annulation jusqu'à 24h</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> Invité +10€ (option)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-3 inline-flex rounded-xl bg-blue-50 p-3" style={{ color: COLORS.primary }}>
      <Icon />
    </div>
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600">{children}</p>
  </div>
);

const Concept = () => (
  <Section id="concept" className="py-16 sm:py-24">
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Comment ça marche ?</h2>
        <p className="mt-4 max-w-xl text-lg text-slate-600">Abonne‑toi, reçois une expérience surprise chaque semaine (ou choisis parmi une sélection), scanne ton pass et profite. Les partenaires remplissent leurs créneaux vides, tout le monde gagne.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <FeatureCard icon={CreditCard} title="Je m'abonne">29,90€ / mois. Sans engagement. Annulable à tout moment.</FeatureCard>
          <FeatureCard icon={Gift} title="Je découvre">Une micro‑aventure locale par semaine : sport, bien‑être, food, culture.</FeatureCard>
          <FeatureCard icon={QrCode} title="Je scanne">Pass QR valide 7 jours. Invitez un ami en option.</FeatureCard>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">
        <h3 className="text-xl font-semibold text-slate-900">Catégories d'expériences</h3>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {["Sport & Outdoor","Bien‑être","Gastronomie","Culture & Art","Aventure","Nuit & Rooftops"].map((c,i)=> (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">{c}</div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">Exemples : yoga sunrise plage, dégustation vins bio, atelier cocktails, escalade indoor, padel nocturne, escape game, sortie kayak coucher de soleil…</p>
      </div>
    </div>
  </Section>
);

const Pricing = () => {
  const [yearly, setYearly] = useState(false);
  const plans = useMemo(() => ([
    {name: "Essential", desc: "1 expérience / semaine", price: yearly ? 24.9 : 29.9, note: yearly ? "facturé annuellement" : "sans engagement", perks:["Réservation 48h à l'avance","Annulation 24h","Accès Nice & alentours"]},
    {name: "Plus", desc: "2 expériences / semaine", price: yearly ? 39.9 : 49.9, highlight:true, perks:["2 réservations simultanées","Invité -50%","Accès Côte d'Azur"]},
    {name: "Unlimited", desc: "Jusqu'à 2 / sem.", price: yearly ? 74.9 : 89.9, perks:["Priorité sur les créneaux","Invités illimités (+)","Accès étendu (Menton → Cannes)"]},
  ]), [yearly]);

  return (
    <Section id="tarifs" className="py-16 sm:py-24">
      <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Tarifs simples & flexibles</h2>
          <p className="mt-2 max-w-2xl text-slate-600">Commence avec Essential et upgrade quand tu veux. Offre bêta sur Nice pour les 300 premiers abonnés.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-sm ${!yearly ? "font-semibold" : "text-slate-500"}`}>Mensuel</span>
          <button onClick={()=>setYearly(v=>!v)} className="relative inline-flex h-7 w-12 items-center rounded-full bg-slate-200">
            <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition ${yearly ? "translate-x-6" : "translate-x-1"}`}/>
          </button>
          <span className={`text-sm ${yearly ? "font-semibold" : "text-slate-500"}`}>Annuel <span className="ml-1 rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-700">-15%</span></span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p, i)=> (
          <div key={i} className={`relative rounded-3xl border ${p.highlight ? "border-slate-900" : "border-slate-200"} bg-white p-6 shadow-sm`}> 
            {p.highlight && (
              <span className="absolute -top-3 left-6 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Populaire</span>
            )}
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-extrabold">{p.price.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€</span>
              <span className="pb-1 text-slate-500">/mois</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">{p.note}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              {p.perks.map((perk, idx)=> (
                <li key={idx} className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/>{perk}</li>
              ))}
            </ul>
            <a href="#waitlist" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">Choisir {p.name}</a>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Experiences = () => (
  <Section id="experiences" className="py-16 sm:py-24">
    <div className="mb-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Des expériences locales qui donnent envie</h2>
      <p className="mt-2 max-w-2xl text-slate-600">Une sélection soignée chez les meilleurs partenaires de Nice et de la Côte d'Azur. Chaque semaine, une surprise — ou choisis parmi la sélection.</p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {title:"Yoga sunrise plage", tag:"Bien‑être"},
        {title:"Atelier cocktails signature", tag:"Gastronomie"},
        {title:"Escalade indoor boulder", tag:"Sport"},
        {title:"Dégustation vins bio", tag:"Food & Wine"},
        {title:"Kayak coucher de soleil", tag:"Aventure"},
        {title:"Padel nocturne", tag:"Sport"},
      ].map((card, i)=> (
        <div key={i} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="h-40 w-full bg-gradient-to-br from-orange-100 to-blue-100 transition group-hover:scale-105" />
          <div className="p-5">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{card.tag}</span>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-1 text-sm text-slate-600">Inclus dans l'abonnement. Places limitées.</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const PartnersCTA = () => (
  <Section id="partenaires" className="py-16 sm:py-24">
    <div className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Devenez un lieu <span style={{ color: COLORS.primary }}>Explore</span></h2>
        <p className="mt-3 max-w-xl text-slate-600">Remplissez vos créneaux vides, faites découvrir votre lieu à de nouveaux clients et rejoignez un réseau d'expériences locales de qualité.</p>
        <ul className="mt-5 space-y-2 text-sm text-slate-700">
          <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> Sans frais d'entrée</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> Paiement à la place remplie</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={16}/> Visibilité + communauté</li>
        </ul>
        <a href="#waitlist-partners" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Proposer une expérience <ArrowRight size={16} /></a>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 p-6">
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
          <p className="font-semibold">Exemple partenaire</p>
          <p className="mt-1">« Grâce à Explore, on remplit nos créneaux du mardi soir et on a converti 27% des explorateurs en clients réguliers. »</p>
          <p className="mt-2 text-slate-500">— Club local, Nice</p>
        </div>
      </div>
    </div>
  </Section>
);

const Waitlists = () => {
  return (
    <Section id="waitlist" className="py-16 sm:py-24">
      <div className="grid gap-8 md:grid-cols-2">

        {/* --- FORMULAIRE USERS (MAILCHIMP) --- */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Rejoindre la bêta (Nice)</h3>
          <p className="mt-2 max-w-lg text-slate-600">
            Sois parmi les premiers à tester Explore à tarif réduit. On t'enverra les invitations dès l'ouverture.
          </p>

          <form
            action="https://gmail.us5.list-manage.com/subscribe/post?u=d419766ed8ae8c96904fac1a0&id=ebe8553656&f_id=0063a5e0f0"
            method="POST"
            className="mt-6 grid gap-3 sm:grid-cols-3"
            target="_blank"
            noValidate
          >
            {/* Nom de famille (optionnel) (Mailchimp: LNAME) */}
            <input
              type="text"
              name="LNAME"
              id="mce-LNAME"
              placeholder="Nom de famille"
              className="sm:col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
            
            {/* Prénom (Mailchimp: FNAME) */}
            <input
              type="text"
              name="FNAME"
              id="mce-FNAME"
              placeholder="Prénom"
              className="sm:col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
            />

            {/* Email (obligatoire) (Mailchimp: EMAIL) */}
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
              placeholder="Email"
              className="sm:col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
             />

            {/* Honeypot anti-bots — ne pas retirer */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              <input
                type="text"
                name="b_d419766ed8ae8c96904fac1a0_ebe8553656"
                tabIndex="-1"
                defaultValue=""
              />
            </div>

            {/* Bouton submit */}
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="sm:col-span-3 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Je veux tester <Sparkles size={16} />
            </button>
          </form>
        </div>

        {/* --- FORMULAIRE PARTENAIRES (FORMSPREE) --- */}
        <div id="waitlist-partners" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Proposer une expérience (Partenaires)</h3>
          <p className="mt-2 max-w-lg text-slate-600">
            Club, studio, bar, atelier, artisan : propose un créneau Explore pour attirer une nouvelle clientèle locale.
          </p>

          <form action="https://formspree.io/f/mpwjdwjd" method="POST" className="mt-6 grid gap-3 sm:grid-cols-2">
            <input
              required
              name="business"
              type="text"
              placeholder="Nom de l'établissement"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
            <input
              required
              name="city"
              type="text"
              placeholder="Ville"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Téléphone (optionnel)"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
            <input
              required
              name="experience"
              type="text"
              placeholder="Type d'expérience (ex: yoga, dégustation)"
              className="sm:col-span-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
            {/* Anti-spam honeypot (optionnel) */}
            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" />
            <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Devenir partenaire <ArrowRight size={16} />
            </button>
          </form>
        </div>

      </div>
    </Section>
  );
};







const FAQ = () => (
  <Section id="faq" className="py-16 sm:py-24">
    <div className="mx-auto max-w-3xl">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Questions fréquentes</h2>
      <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {[
          {q:"Que contient l'abonnement ?", a:"Au moins 1 expérience locale par semaine, à choisir parmi une sélection dans Nice et alentours. Certaines expériences premium peuvent demander un léger supplément annoncé à l'avance."},
          {q:"Puis‑je annuler quand je veux ?", a:"Oui. C'est sans engagement. Tu peux annuler à tout moment depuis ton espace compte. Ton accès reste actif jusqu'à la fin de la période en cours."},
          {q:"Comment fonctionne le pass ?", a:"Après réservation, tu reçois un QR code valable 7 jours. Présente‑le sur place pour valider."},
          {q:"Et pour les partenaires ?", a:"Nous rémunérons chaque place remplie et vous bénéficiez d'une exposition auprès d'une communauté locale curieuse et active."},
        ].map((item, i)=> (
          <details key={i} className="group p-6 open:pb-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
              <span className="text-base font-semibold text-slate-900">{item.q}</span>
              <span className="text-slate-400 transition group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-3 text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white">
    <Section className="py-10">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <ExploreLogo />
            <span className="text-lg font-extrabold tracking-tight" style={{ color: COLORS.primary }}>EXPLORE</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">L'abonnement pour vivre plus, localement. Nice comme ville pilote.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Produit</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#concept" className="hover:text-slate-900">Concept</a></li>
            <li><a href="#experiences" className="hover:text-slate-900">Expériences</a></li>
            <li><a href="#tarifs" className="hover:text-slate-900">Tarifs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Partenaires</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#partenaires" className="hover:text-slate-900">Devenir partenaire</a></li>
            <li><a href="#waitlist-partners" className="hover:text-slate-900">Proposer une expérience</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Légal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-slate-900">CGU</a></li>
            <li><a href="#" className="hover:text-slate-900">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:text-slate-900">Mentions légales</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Explore — Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-slate-900">Instagram</a>
          <a href="#" aria-label="TikTok" className="hover:text-slate-900">TikTok</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-slate-900">LinkedIn</a>
        </div>
      </div>
    </Section>
  </footer>
);

export default function ExploreLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <Hero />
      <Concept />
      <Experiences />
      <Pricing />
      <PartnersCTA />
      <Waitlists />
      <FAQ />
      <Footer />
    </div>
  );
}
