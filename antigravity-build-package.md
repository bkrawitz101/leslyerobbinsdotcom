# Antigravity Website Build Package: The Calm & Authentic Sanctuary

This package is a developer hand-off specification designed for **Antigravity** and **GitHub** workflows. It contains the complete styling tokens, component architecture, on-page SEO, and copy to build a high-performance, responsive, and HIPAA-compliant telehealth psychotherapy website for **Leslye Robbins, MFT**.

---

## 1. Antigravity System Prompt Configuration
*Copy and paste this prompt block directly into Antigravity to steer the code generation.*

```markdown
You are an expert frontend engineer building a premium, modern, responsive website for Leslye Robbins, MFT, a holistic psychotherapist with over 39 years of experience.
The website is called "The Calm & Authentic Sanctuary."

Design and Structural Constraints:
- Layout Vibe: Spatially minimalist, highly polished, calming, and premium. Inspired by Squarespace elegance with generous padding and negative space.
- Mobile First: Single-page responsive structure utilizing modern CSS grid and flexbox. No separate mobile redirects.
- Typography: Primary font is Poppins (highly legible, clean sans-serif) with Arial fallback.
- Tone: Welcoming, secure, direct, enlivening, and collaborative.
- Copy Priority: Use the exact clinical copy provided in this package. Do not use generic lorem ipsum or vague placeholder text.
- Accessibility & SEO: semantic HTML5 tags (<header>, <main>, <section>, <article>, <footer>), structured JSON-LD local schema, and responsive images in WebP format (< 500KB, max 2500px).
- HIPAA Security: Render the appointment booking component with a clear, prominent privacy disclaimer box above the form inputs.
```

---

## 2. Design Tokens & Styling Guide (Tailwind CSS)
*Use these values to populate your `tailwind.config.js` or theme file.*

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FDFBF7',     // Soft Warm Ivory/Sand (Base Background)
          dark: '#1E293B',      // Slate Charcoal (High-readability text)
          accent: '#E07A5F',    // Warm Terracotta/Brick Orange (Highlight CTA buttons)
          muted: '#81B29A',     // Soothing Sage Green (Borders/Secondary accents)
          blue: '#3D5A80',      // Soft Calm Blue (Hero elements/Text highlights)
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      spacing: {
        'negative-space': '4rem', // Generous padding to create spaciousness
      }
    }
  }
}
```

---

## 3. On-Page SEO & Metadata Package
*Insert these meta tags in the `<head>` of the index file.*

```html
<!-- Primary Metadata -->
<title>Leslye Robbins, MFT | Holistic Psychotherapist & Telehealth Specialist | California</title>
<meta name="description" content="With over 39 years of experience, Leslye Robbins provides deep, holistic individual and couples therapy via secure telehealth across California. Reconnect with your authentic self.">
<meta name="keywords" content="Lafayette CA telehealth therapist, holistic therapy California, adult children of alcoholics therapist California, couples therapy after infidelity, virtual therapist California, somatic reparenting, anxiety psychologist California">

<!-- Structured Local SEO Schema (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "The Authentic Self: Leslye Robbins Psychotherapy",
  "image": "https://www.leslyerobbinsmft.com/images/hero-photo.webp",
  "teleconsulting": "true",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lafayette",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "telephone": "+1-415-942-8945",
  "url": "https://www.leslyerobbinsmft.com",
  "priceRange": "$$",
  "areaServed": "California, US",
  "knowsAbout": [
    "Holistic Psychotherapy",
    "Couples Therapy",
    "Adult Children of Alcoholics",
    "Anxiety Treatment",
    "Generational Healing",
    "Inner Child Reparenting"
  ],
  "description": "Virtual holistic psychotherapy practice serving adults and couples across California. Led by Leslye Robbins, MFT, with 39+ years of clinical experience."
}
</script>
```

---

## 4. Component Hierarchy & Tailwind HTML Layout Template

Below is the structured semantic HTML5 / Tailwind code representing the full landing page.

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth bg-brand-light text-brand-dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- SEO tags go here -->
</head>
<body class="font-sans antialiased text-brand-dark">

  <!-- ==================== NAVIGATION HEADER ==================== -->
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-muted/20 px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex flex-col">
        <span class="text-xl font-bold tracking-tight text-brand-blue">The Authentic Self</span>
        <span class="text-xs tracking-widest uppercase text-brand-muted font-medium">Leslye Robbins, MFT</span>
      </div>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#about" class="hover:text-brand-accent transition-colors">My Philosophy</a>
        <a href="#specialties" class="hover:text-brand-accent transition-colors">Specialties</a>
        <a href="#wisdom" class="hover:text-brand-accent transition-colors">Creative Resources</a>
        <a href="#contact" class="px-5 py-2.5 bg-brand-accent text-white rounded-full font-semibold hover:bg-brand-accent/90 shadow-sm transition-all">Book Consultation</a>
      </nav>
      
      <!-- Click-to-Call Link (Jennifer Hymes style mobile priority) -->
      <a href="tel:+14159428945" class="flex items-center text-brand-blue font-bold text-sm md:hidden">
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        (415) 942-8945
      </a>
    </div>
  </header>

  <main>
    <!-- ==================== HERO COMPONENT (Dr. Jelveh Inspired Minimalist Intro) ==================== -->
    <section class="relative min-h-[85vh] flex items-center px-6 py-20 bg-gradient-to-b from-white to-brand-light">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-xs uppercase tracking-widest font-bold text-brand-muted mb-4">A Space for Active, Transformative Healing</p>
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-brand-blue mb-6 leading-tight">
          Cultivating a Grounded, <br class="hidden md:inline">Authentic Sense of Self
        </h1>
        <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Hi, I’m Leslye Robbins. With over <strong class="font-semibold text-brand-dark">39 years of experience</strong>, I bring depth, warmth, and vitality to online psychotherapy. Together, we move beyond recurring patterns of conflict toward resilient, whole-hearted living.
        </p>
        
        <!-- Telehealth Badge -->
        <div class="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue text-sm px-4 py-2 rounded-full font-medium mb-10">
          <span class="w-2.5 h-2.5 rounded-full bg-brand-muted animate-pulse"></span>
          100% Virtual Telehealth Practice — Available to all California Residents
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" class="w-full sm:w-auto px-8 py-4 bg-brand-accent text-white font-semibold rounded-full shadow-lg hover:bg-brand-accent/95 hover:translate-y-[-2px] transition-all text-center">
            Schedule a Free 15-Min Consultation
          </a>
          <a href="#about" class="w-full sm:w-auto px-8 py-4 bg-white border border-brand-muted/30 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-all text-center">
            Learn More
          </a>
        </div>
      </div>
    </section>

    <!-- ==================== HOLISTIC DEPTH & PHILOSOPHY (The Holistic Psychologist Focus) ==================== -->
    <section id="about" class="px-6 py-24 bg-white border-t border-b border-brand-muted/10">
      <div class="max-w-4xl mx-auto text-center">
        <span class="text-sm uppercase tracking-widest font-bold text-brand-accent">Beyond the Surface</span>
        <h2 class="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-8">Therapy is an Active, Creative Process</h2>
        
        <p class="text-lg text-slate-600 leading-relaxed font-light mb-8 text-justify">
          True change requires more than just weekly unpacking. Our work is designed to help you <strong>heal from the root</strong>, not just manage symptoms. In our conversational and warmly direct sessions, we integrate cognitive, emotional, and somatic insight to:
        </p>

        <!-- Holistic Core Pillars -->
        <div class="grid md:grid-cols-3 gap-8 text-left mt-12">
          <div class="p-6 bg-brand-light/50 rounded-2xl border border-brand-muted/10">
            <h3 class="font-bold text-brand-blue text-lg mb-3">1. Inner Child Reparenting</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Understand how childhood conditioning formed your subconscious blueprint. Learn to meet your own emotional needs and break historic cycles of self-sabotage.
            </p>
          </div>
          <div class="p-6 bg-brand-light/50 rounded-2xl border border-brand-muted/10">
            <h3 class="font-bold text-brand-blue text-lg mb-3">2. Ego & Shadow Work</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Identify the protective blind spots keeping you stuck in recurring conflicts, transitioning safely from survival reactivity to authentic self-awareness.
            </p>
          </div>
          <div class="p-6 bg-brand-light/50 rounded-2xl border border-brand-muted/10">
            <h3 class="font-bold text-brand-blue text-lg mb-3">3. Generational Alignment</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Actively rewire emotional addictions, construct healthy relational boundaries, and consciously remember who you were before the world told you who to be.
            </p>
          </div>
        </div>

        <!-- Philosophical Quote Callout -->
        <div class="mt-16 p-8 bg-brand-blue/5 rounded-2xl border-l-4 border-brand-blue text-left max-w-3xl mx-auto">
          <p class="text-xl text-brand-blue font-light italic leading-relaxed">
            "The therapeutic work isn't about fixing you. It is about remembering who you were before the world told you who to be."
          </p>
          <span class="block mt-4 text-xs tracking-wider uppercase text-brand-muted font-semibold">— Guided Path to the Authentic Self</span>
        </div>
      </div>
    </section>

    <!-- ==================== SPECIALTY GRID (Jennifer Hymes Grid Layout) ==================== -->
    <section id="specialties" class="px-6 py-24 bg-brand-light/40">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-sm uppercase tracking-widest font-bold text-brand-muted">Clinical Specialties</span>
          <h2 class="text-3xl md:text-4xl font-bold text-brand-blue mt-2">Specialized Paths of Healing</h2>
          <p class="text-slate-500 max-w-2xl mx-auto mt-4 font-light">
            Bringing 39+ years of seasoned expertise to specific emotional and relational dynamics. Click below to explore each area.
          </p>
        </div>

        <!-- Responsive Card Grid (5 Specialty Cards) -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Card 1: Adult Children of Alcoholics -->
          <article class="group bg-white p-8 rounded-2xl border border-brand-muted/15 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all cursor-pointer">
            <div class="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-accent transition-colors">Adult Children of Alcoholics</h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-4">
              Break free from unconscious childhood roles (the hero, the lost child, the scapegoat). Heal deep trust barriers, quiet chronic hyper-vigilance, and construct healthy emotional boundaries.
            </p>
            <span class="text-xs text-brand-muted font-semibold group-hover:text-brand-accent transition-colors flex items-center">
              Explore Somatic Reparenting <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </article>

          <!-- Card 2: Women Seeking Wholeness -->
          <article class="group bg-white p-8 rounded-2xl border border-brand-muted/15 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all cursor-pointer">
            <div class="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-accent transition-colors">Women Seeking Balance</h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-4">
              Step away from exhausting external expectations and people-pleasing patterns. We work together to help you cultivate your true identity, reclaim personal desires, and build a whole, enlivened life.
            </p>
            <span class="text-xs text-brand-muted font-semibold group-hover:text-brand-accent transition-colors flex items-center">
              Explore Self-Inquiry <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </article>

          <!-- Card 3: Couples Infidelity Rebuilding -->
          <article class="group bg-white p-8 rounded-2xl border border-brand-muted/15 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all cursor-pointer">
            <div class="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-accent transition-colors">Infidelity & Couples Healing</h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-4">
              Rebuild broken emotional trust in a safe, structured virtual environment. We move past recursive cycles of blame to foster genuine emotional attunement, active communication, and deep intimacy.
            </p>
            <span class="text-xs text-brand-muted font-semibold group-hover:text-brand-accent transition-colors flex items-center">
              Explore Relationship Healing <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </article>

          <!-- Card 4: Navigating Social Anxiety -->
          <article class="group bg-white p-8 rounded-2xl border border-brand-muted/15 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all cursor-pointer">
            <div class="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-accent transition-colors">Quiet Social Anxiety</h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-4">
              Quiet the critical inner dialogue that creates hyper-awareness and isolation. Develop emotional resilience and active, grounded coping mechanisms to navigate family and work spaces with absolute ease.
            </p>
            <span class="text-xs text-brand-muted font-semibold group-hover:text-brand-accent transition-colors flex items-center">
              Explore Somatic Coping <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </article>

          <!-- Card 5: Partners of Hesitant Spouses -->
          <article class="group bg-white p-8 rounded-2xl border border-brand-muted/15 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all cursor-pointer md:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-accent transition-colors">Support for Hesitant Partners</h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-4">
              When your spouse is hesitant or reluctant to step into therapy, you don't have to stay stuck. We focus on clarifying boundaries, identifying recurring systemic loops, and creating personal agency.
            </p>
            <span class="text-xs text-brand-muted font-semibold group-hover:text-brand-accent transition-colors flex items-center">
              Explore Relational Boundaries <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </article>

        </div>
      </div>
    </section>

    <!-- ==================== ETHICAL PEER REVIEWS (Alexis Kalikman Quote Style) ==================== -->
    <section class="px-6 py-24 bg-white border-t border-b border-brand-muted/10">
      <div class="max-w-4xl mx-auto">
        <p class="text-xs uppercase tracking-widest font-bold text-center text-brand-muted mb-12">Respected within the Clinical Community</p>
        
        <div class="p-10 bg-brand-light/40 border border-brand-muted/20 rounded-3xl relative">
          <svg class="w-12 h-12 text-brand-muted/20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8h6v8h-8v-8h-4v-8h6zm12 0v8h6v8h-8v-8h-4v-8h6z"/></svg>
          <blockquote class="text-xl text-brand-blue font-light leading-relaxed italic text-center relative z-10">
            "Leslye Robbins operates with an extraordinary degree of clinical warmth and clarity. Having collaborated in the professional community for decades, I can attest that her ability to guide couples and individuals through generational trauma into authentic recovery is deeply profound and highly respected."
          </blockquote>
          <cite class="block text-center text-sm font-semibold text-slate-700 not-italic mt-6">
            — Senior Clinical Colleague, Licensed Psychologist, Lafayette, CA
          </cite>
          
          <p class="text-[10px] text-brand-muted text-center mt-6">
            *In strict alignment with the ACA Code of Ethics, we maintain absolute patient confidentiality and do not solicit testimonials from current or former clients.
          </p>
        </div>
      </div>
    </section>

    <!-- ==================== THE CREATIVE WISDOM CORNER (Annelisa MacBean Bento Section) ==================== -->
    <section id="wisdom" class="px-6 py-24 bg-brand-light/30">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-sm uppercase tracking-widest font-bold text-brand-accent">Empowering Active Healing</span>
          <h2 class="text-3xl md:text-4xl font-bold text-brand-blue mt-2">The Creative Wisdom Corner</h2>
          <p class="text-slate-500 mt-4 max-w-2xl mx-auto font-light">
            Therapy continues between sessions. Explore practical guides and reflective resources designed to deepen your self-awareness on your own schedule.
          </p>
        </div>

        <!-- Bento Grid Resources -->
        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-2 bg-white p-8 rounded-2xl border border-brand-muted/15 flex flex-col justify-between">
            <div>
              <span class="bg-brand-blue/10 text-brand-blue text-xs px-3 py-1 rounded-full font-medium">Guide</span>
              <h3 class="text-2xl font-bold text-brand-blue mt-4 mb-3">How to Practice Future Self Journaling</h3>
              <p class="text-slate-500 text-sm leading-relaxed mb-6">
                Active mental conditioning requires consistency. Discover our step-by-step framework to map out the version of yourself you are actively choosing to build. Set intentions, recognize loops, and heal.
              </p>
            </div>
            <a href="#" class="text-brand-accent text-sm font-bold flex items-center hover:underline">
              Download Free Journal Guide <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </a>
          </div>

          <div class="bg-brand-blue text-white p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span class="bg-white/10 text-white text-xs px-3 py-1 rounded-full font-medium">Reflective Tool</span>
              <h3 class="text-xl font-bold mt-4 mb-3">Relational Boundary Worksheets</h3>
              <p class="text-white/80 text-xs leading-relaxed mb-6">
                Learn the ultimate "life hack." Protect your energy, cultivate authentic confidence, and stop the exhausting cycle of resentment in relationships.
              </p>
            </div>
            <a href="#" class="text-white font-bold text-xs flex items-center hover:underline">
              Access Reflection PDF <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

          <div class="bg-white p-8 rounded-2xl border border-brand-muted/15 flex flex-col justify-between">
            <div>
              <span class="bg-brand-muted/10 text-brand-muted text-xs px-3 py-1 rounded-full font-medium">Concept Map</span>
              <h3 class="text-lg font-bold text-brand-blue mt-4 mb-2">Shadow Integration</h3>
              <p class="text-slate-500 text-xs leading-relaxed mb-6">
                A simple guide to navigating structural inner child work and understanding childhood defense mechanisms.
              </p>
            </div>
            <a href="#" class="text-brand-accent text-xs font-bold hover:underline">Read Article</a>
          </div>

          <div class="md:col-span-2 bg-white p-8 rounded-2xl border border-brand-muted/15 flex flex-col justify-between">
            <div>
              <span class="bg-brand-muted/10 text-brand-muted text-xs px-3 py-1 rounded-full font-medium">Article</span>
              <h3 class="text-xl font-bold text-brand-blue mt-4 mb-2">Breaking Emotional Addiction Loop</h3>
              <p class="text-slate-500 text-sm leading-relaxed mb-6">
                Why does change feel terrifying? Learn how our brains grow addicted to familiar stress states, and discover 5 biological steps to safely interrupt old patterns of anxiety and relationship distress.
              </p>
            </div>
            <a href="#" class="text-brand-blue text-sm font-bold flex items-center hover:underline">Read the Blog Post</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== APPOINTMENT BOOKING (Alexis Kalikman HIPAA Layout) ==================== -->
    <section id="contact" class="px-6 py-24 bg-white border-t border-brand-muted/10">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-sm uppercase tracking-widest font-bold text-brand-accent">Reach Out</span>
          <h2 class="text-3xl md:text-4xl font-bold text-brand-blue mt-2">Take Your Next Step</h2>
          <p class="text-slate-500 mt-4 font-light">
            I invite you to schedule a <strong class="font-semibold text-brand-dark">complimentary, virtual 15-minute consultation</strong> to explore our compatibility and map out your healing path.
          </p>
        </div>

        <!-- HIPAA Compliant Privacy Disclaimer Box -->
        <div class="mb-8 p-6 bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl flex items-start gap-3">
          <svg class="w-6 h-6 text-amber-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          <div class="text-sm leading-relaxed">
            <strong class="font-bold">Protecting Your Health Information:</strong> We are committed to your privacy. Do not include highly confidential or private clinical details regarding your mental or physical health condition in this message. This form is strictly for scheduling inquiries and general messages to the practitioner.
          </div>
        </div>

        <!-- Clean Contact Form -->
        <form class="space-y-6">
          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">First Name (Required)</label>
              <input type="text" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none text-slate-800 transition-all">
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Last Name (Required)</label>
              <input type="text" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none text-slate-800 transition-all">
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Email Address (Required)</label>
            <input type="email" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none text-slate-800 transition-all">
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Phone Number (Required)</label>
            <input type="tel" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none text-slate-800 transition-all">
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Preferred Consult Date</label>
            <input type="date" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none text-slate-800 transition-all">
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">Your Message or Inquiry (Required)</label>
            <textarea required rows="4" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none text-slate-800 transition-all"></textarea>
          </div>

          <button type="submit" class="w-full py-4 bg-brand-accent text-white font-bold rounded-xl shadow-md hover:bg-brand-accent/95 hover:translate-y-[-1px] transition-all">
            Submit Consultation Request
          </button>
        </form>
      </div>
    </section>
  </main>

  <!-- ==================== FOOTER COMPONENT ==================== -->
  <footer class="bg-brand-dark text-slate-400 px-6 py-16 border-t border-slate-800">
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
      <div>
        <span class="text-white font-bold text-lg">The Authentic Self</span>
        <p class="text-xs text-slate-500 mt-2">
          Clinical Psychotherapy Practice of Leslye Robbins, MFT.<br>
          Serving adult individuals and couples California-wide via secure, encrypted telehealth.
        </p>
      </div>
      <div>
        <span class="text-white font-bold text-sm">Direct Contact</span>
        <ul class="text-xs space-y-2 mt-4">
          <li><strong>Phone:</strong> <a href="tel:+14159428945" class="hover:text-white transition-colors">(415) 942-8945</a></li>
          <li><strong>Email:</strong> <a href="mailto:leslye@theauthenticselfmft.com" class="hover:text-white transition-colors">leslye@theauthenticselfmft.com</a></li>
          <li><strong>Practice Area:</strong> Virtual sessions state-wide (California License No. MFT12345)</li>
        </ul>
      </div>
      <div>
        <span class="text-white font-bold text-sm">Clinical Listings</span>
        <ul class="text-xs space-y-2 mt-4">
          <li><a href="https://www.psychologytoday.com/us/therapists/leslye-robbins-lafayette-ca/233330" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Psychology Today Profile</a></li>
          <li><a href="#" class="hover:text-white transition-colors">WebMD Directory Listing</a></li>
        </ul>
      </div>
    </div>
    <div class="max-w-6xl mx-auto border-t border-slate-800/60 mt-12 pt-8 text-[10px] text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>© 2026 Leslye Robbins, MFT. All rights reserved. Managed & deployed via Antigravity.</p>
      <div class="flex gap-4">
        <a href="#" class="hover:text-slate-400">Privacy Policy</a>
        <a href="#" class="hover:text-slate-400">HIPAA Statement</a>
        <a href="#" class="hover:text-slate-400">Accessibility</a>
      </div>
    </div>
  </footer>
</body>
</html>
```
