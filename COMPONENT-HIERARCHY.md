# Component Hierarchy & Data Flow

Visual guide to understanding how the portfolio website is structured.

```
┌─────────────────────────────────────────────────────────────┐
│                        app/layout.tsx                        │
│  • Root HTML structure                                       │
│  • Font imports (Inter, JetBrains Mono, Playfair Display)  │
│  • Metadata (SEO, OpenGraph)                                │
│  • Global CSS imports                                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                        app/page.tsx                          │
│  Main orchestrator - assembles all sections                 │
└─────────────────────────┬───────────────────────────────────┘
                          │
      ┌───────────────────┼───────────────────┐
      │                   │                   │
      ▼                   ▼                   ▼
┌──────────┐    ┌──────────────────┐    ┌──────────┐
│Navigation│    │  Background3D    │    │ Sections │
│          │    │  (Three.js)      │    │          │
└──────────┘    └──────────────────┘    └────┬─────┘
                                             │
                 ┌───────────────────────────┼─────────────────────┐
                 │                           │                     │
                 ▼                           ▼                     ▼
        ┌─────────────────┐        ┌─────────────────┐   ┌─────────────────┐
        │  sections/       │        │  sections/       │   │  sections/       │
        │  Hero.tsx       │        │  About.tsx      │   │  Research.tsx   │
        │                 │        │                 │   │                 │
        │  • Opening      │        │  • Biography    │   │  • 11+ Papers   │
        │  • Stats        │        │  • Current Focus│   │  • Awards       │
        │  • CTAs         │        │  • Contact Info │   │  • Abstracts    │
        └─────────────────┘        └─────────────────┘   └─────────────────┘
                 │                           │                     │
                 ├───────────────────────────┼─────────────────────┤
                 │                           │                     │
                 ▼                           ▼                     ▼
        ┌─────────────────┐        ┌─────────────────┐   ┌─────────────────┐
        │  sections/       │        │  sections/       │   │  sections/       │
        │  Experience.tsx │        │  Projects.tsx   │   │  Skills.tsx     │
        │                 │        │                 │   │                 │
        │  • Timeline     │        │  • 3 Projects   │   │  • 7 Categories │
        │  • 6 Positions  │        │  • Impact       │   │  • Coursework   │
        │  • Tech Tags    │        │  • Tech Stack   │   │  • Visual Icons │
        └─────────────────┘        └─────────────────┘   └─────────────────┘
                 │                           │                     │
                 ├───────────────────────────┴─────────────────────┤
                 │                                                 │
                 ▼                                                 ▼
        ┌─────────────────┐                              ┌─────────────────┐
        │  sections/       │                              │  sections/       │
        │  Awards.tsx     │                              │  Education.tsx  │
        │                 │                              │                 │
        │  • Achievements │                              │  • Degrees      │
        │  • Leadership   │                              │  • Certifications│
        └─────────────────┘                              └─────────────────┘
                 │                                                 │
                 └────────────────────┬────────────────────────────┘
                                      │
                                      ▼
                            ┌─────────────────┐
                            │  sections/       │
                            │  Contact.tsx    │
                            │                 │
                            │  • Email/Phone  │
                            │  • LinkedIn     │
                            │  • Resume CTA   │
                            └─────────────────┘
```

## Data Flow

```
┌─────────────────────────────────────────┐
│     data/portfolio-data.ts              │
│  ┌────────────────────────────────────┐ │
│  │ personalInfo                       │ │ ──→ Hero, About, Contact
│  │ education[]                        │ │ ──→ Education
│  │ experience[]                       │ │ ──→ Experience
│  │ projects[]                         │ │ ──→ Projects
│  │ research[]                         │ │ ──→ Research
│  │ skills{}                           │ │ ──→ Skills
│  │ awards[]                           │ │ ──→ Awards
│  │ leadership[]                       │ │ ──→ Awards
│  │ certifications[]                   │ │ ──→ Education
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
         ▲
         │ Single source of truth
         │ TypeScript typed
         │ Easy to update
         │
    Components import and map over data
```

## Animation Flow

```
User Scrolls Down
      │
      ▼
┌─────────────────────────────────────────┐
│  useInView hook detects section         │
│  entering viewport                      │
│  (with -100px margin for early trigger) │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  Framer Motion triggers animation:      │
│  • opacity: 0 → 1                       │
│  • y: 50 → 0                            │
│  • duration: 0.6s                       │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  Children animate with stagger:         │
│  • Each child: delay = index * 0.1s     │
│  • Creates sequential reveal            │
└────────────┬────────────────────────────┘
             │
             ▼
        Section Visible
     (Animation complete)
```

## Styling Architecture

```
┌─────────────────────────────────────────┐
│         tailwind.config.js              │
│  ┌────────────────────────────────────┐ │
│  │ Custom Colors (midnight, accent)   │ │
│  │ Custom Fonts (geist, mono, display)│ │
│  │ Custom Animations (fade, slide)    │ │
│  │ Keyframes definitions              │ │
│  └────────────────────────────────────┘ │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│         app/globals.css                 │
│  ┌────────────────────────────────────┐ │
│  │ @tailwind directives               │ │
│  │ CSS variables (--bg-primary, etc.) │ │
│  │ Utility classes (.card-glass)      │ │
│  │ Custom scrollbar                   │ │
│  │ Noise texture overlay              │ │
│  └────────────────────────────────────┘ │
└────────────┬────────────────────────────┘
             │
             ▼
        Components use Tailwind classes
        + custom utility classes
```

## Navigation Flow

```
User Action (Click nav link or scroll)
             │
             ▼
┌─────────────────────────────────────────┐
│  Smooth scroll to section ID           │
│  (via href="#section-id")               │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  Browser scrolls to target              │
│  with smooth behavior                   │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  useInView detects section              │
│  Animations trigger                     │
└────────────┬────────────────────────────┘
             │
             ▼
        Section appears smoothly
```

## Responsive Behavior

```
Screen Size
    │
    ├─── < 768px (Mobile)
    │     └─→ 1 column layouts
    │         Stacked sections
    │         Mobile menu (slide-in)
    │         Simplified animations
    │         No timeline line
    │
    ├─── 768px - 1024px (Tablet)
    │     └─→ 2 column grids
    │         Timeline visible
    │         Standard animations
    │         Responsive typography
    │
    └─── > 1024px (Desktop)
          └─→ 3 column grids
              Full timeline with line
              All animations enabled
              Maximum visual fidelity
```

## 3D Background Rendering

```
Canvas (Three.js)
     │
     ├─→ Camera Setup
     │    • Position: [0, 0, 3]
     │    • FOV: 75
     │
     ├─→ ParticleField Component
     │    │
     │    ├─→ Generate 2000 positions
     │    │    • Random in 10×10×10 cube
     │    │
     │    ├─→ Create Points geometry
     │    │    • PointMaterial
     │    │    • Color: #0ea5e9
     │    │    • Opacity: 0.3
     │    │    • Size: 0.015
     │    │
     │    └─→ useFrame hook
     │         • Rotate slowly
     │         • X: elapsed * 0.02
     │         • Y: elapsed * 0.03
     │
     └─→ Render to fixed background
          • z-index: 0
          • transparent
          • doesn't block interactions
```

## Build & Deploy Pipeline

```
Local Development
      │
      ├─→ npm run dev
      │    └─→ Next.js dev server
      │         • Hot reload
      │         • Fast refresh
      │
      ├─→ npm run build
      │    │
      │    ├─→ TypeScript compilation
      │    ├─→ Tailwind CSS purging
      │    ├─→ Code splitting
      │    ├─→ Optimization
      │    └─→ Static generation
      │
      └─→ npm start
           └─→ Production server
                • Optimized assets
                • Fast load times

Deploy to Vercel
      │
      ├─→ Push to GitHub
      │
      ├─→ Vercel detects push
      │    │
      │    ├─→ Installs dependencies
      │    ├─→ Runs build
      │    ├─→ Deploys to CDN
      │    └─→ Generates preview URL
      │
      └─→ Production URL live
           • Global CDN
           • Auto SSL
           • Instant rollbacks
```

## Component Communication

```
No props drilling - each section is independent

┌─────────────────────────────────────────┐
│  Section Component                      │
│  ┌────────────────────────────────────┐ │
│  │ 1. Import data from data file      │ │
│  │ 2. Use local state if needed       │ │
│  │ 3. Render using Framer Motion      │ │
│  │ 4. Style with Tailwind classes     │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘

Benefits:
• Easy to reorder sections
• Easy to add/remove sections
• No complex state management
• Each section self-contained
```

## File Size Breakdown (Approximate)

```
Total Bundle Size: ~250KB (gzipped)

JavaScript:
  ├─ Next.js framework: ~85KB
  ├─ React + ReactDOM: ~45KB
  ├─ Framer Motion: ~35KB
  ├─ Three.js: ~50KB
  └─ Custom code: ~15KB

CSS:
  └─ Tailwind (purged): ~20KB

Total: ~250KB
Initial load: < 2 seconds (fast 3G)
```

## Performance Optimizations

```
1. Code Splitting
   └─→ Each section lazy loads when visible

2. Image Optimization
   └─→ Next.js Image component (if images added)

3. Font Optimization
   └─→ Google Fonts loaded via next/font

4. CSS Optimization
   └─→ Tailwind purges unused classes

5. JavaScript Optimization
   └─→ Tree shaking removes unused code

6. Caching
   └─→ Vercel CDN caches static assets

7. Compression
   └─→ Gzip/Brotli compression enabled
```

---

## Key Takeaways

1. **Modular Architecture:** Each section is independent
2. **Single Data Source:** Easy content updates
3. **Type Safety:** TypeScript catches errors
4. **Performance First:** Optimized animations, code splitting
5. **Accessible:** Semantic HTML, keyboard navigation
6. **Maintainable:** Clear structure, good documentation

---

This hierarchy ensures:
✓ Easy to understand
✓ Easy to modify
✓ Easy to extend
✓ High performance
✓ Maintainable code
