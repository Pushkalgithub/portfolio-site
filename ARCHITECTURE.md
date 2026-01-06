# Architecture & Design Decisions

This document explains the architectural choices, design philosophy, and technical decisions behind the portfolio website.

---

## 🎨 Design Philosophy

### Core Aesthetic: "Refined Technical Sophistication"

**Inspiration Synthesis:**
- **Apple:** Restraint, precision, generous whitespace (negative space)
- **Stripe:** Technical elegance, purposeful motion, clean hierarchy
- **Linear:** Smooth interactions, thoughtful animations, modern feel
- **Research Lab:** Academic credibility, clarity, information density

**What This Means:**
- Every element serves a purpose
- Animations enhance understanding, not distract
- White text on dark backgrounds (no light mode needed for this aesthetic)
- Subtle 3D elements that feel purposeful, not gimmicky
- Academic sections maintain scholarly credibility while feeling modern

### Typography Choices

**Display/Headings:** Inter (weight 600-700)
- Why: Modern, professional, excellent readability at large sizes
- Geometric sans-serif that feels technical but warm
- Wide language support

**Body Text:** Inter (weight 300-500)
- Why: Same family as headings for cohesion
- Excellent readability at small sizes
- Open apertures and optimized spacing

**Monospace:** JetBrains Mono
- Why: Developer-focused aesthetic for labels, code, tags
- Distinctive but readable
- Ligature support (disabled here for clarity)

**Accent/Display:** Playfair Display (limited use)
- Why: Adds sophistication for emphasized words
- Serif contrast creates visual interest
- Used sparingly to avoid looking dated

### Color Strategy

**Dark Theme Only:**
- Primary: `#050710` (midnight-950) - Deep, rich black
- Secondary: `#0a0e14` (midnight-900) - Slightly lighter sections
- Accent: `#0ea5e9` (accent-500) - Refined blue, not neon
- Text: Pure white to subtle grays

**Why Blue, Not Purple/Pink?**
- Purple/pink gradients are overused in AI/tech portfolios
- Blue conveys trust, professionalism, intelligence
- Research/academic associations
- Better accessibility and readability

**Gradient Strategy:**
- Minimal gradients (only on text, backgrounds are solid)
- Subtle radial gradients for depth, not decoration
- No rainbow/multi-color gradients

---

## 🏗️ Architecture Decisions

### Why Next.js App Router?

**Advantages:**
1. **Server Components:** Faster initial loads
2. **Built-in Optimization:** Images, fonts, code splitting
3. **File-based Routing:** Simple, intuitive structure
4. **SEO Ready:** Meta tags, OpenGraph out of the box
5. **Deployment:** Zero-config on Vercel

**Trade-offs:**
- Slightly steeper learning curve vs Pages Router
- Some client-side libraries need 'use client' directive

### Why TypeScript?

**Benefits:**
1. Type safety prevents runtime errors
2. Better IDE autocomplete
3. Self-documenting code
4. Easier refactoring
5. Industry standard for serious projects

**Implementation:**
- Strict mode enabled
- All components typed
- Data structures in portfolio-data.ts are typed

### Component Structure Philosophy

**Principles:**
1. **Separation of Concerns:** Each section is isolated
2. **Composability:** Sections can be reordered easily
3. **Data-Driven:** Content separated from presentation
4. **Reusability:** Common patterns extracted (card-glass, section-container)

**File Organization:**
```
src/
├── app/              # Next.js app structure
├── components/       # Reusable components
│   └── sections/    # Page sections
├── data/            # Content (easily editable)
└── lib/             # Utilities (future)
```

---

## 🎭 Animation Strategy

### Philosophy: "Purposeful Motion"

**Core Principles:**
1. **Enhance Understanding:** Animations guide attention, show relationships
2. **Performance First:** Use transforms (translate, scale, rotate) not layout properties
3. **Subtle, Not Showy:** User should notice content, not animations
4. **Accessible:** Respect `prefers-reduced-motion`
5. **Contextual:** Different sections have appropriate animation styles

### Animation Patterns

#### 1. Scroll-Based Reveals
```typescript
const isInView = useInView(ref, { once: true, margin: "-100px" })

initial={{ opacity: 0, y: 50 }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
```

**Why:**
- Draws attention to content as it enters viewport
- Creates sense of progression
- `once: true` prevents re-triggering on scroll up
- `-100px` margin triggers slightly before visible

#### 2. Staggered Children
```typescript
transition={{ duration: 0.5, delay: index * 0.1 }}
```

**Why:**
- Creates rhythm and flow
- Prevents overwhelming simultaneous motion
- Guides eye through content naturally
- 0.05-0.1s delays feel natural

#### 3. Hover States
```typescript
className="group"
className="group-hover:text-accent-500"
```

**Why:**
- Provides feedback for interactivity
- CSS group hover is more performant than JS
- Subtle color shifts feel premium
- Scale transforms for elevation effect

#### 4. Mobile Considerations
- Reduced animation on mobile (performance)
- No hover states (touch doesn't have hover)
- Simpler transitions for smaller screens

### Performance Optimization

**Techniques:**
1. **CSS Transforms:** Use `transform` over `top/left/width/height`
2. **will-change:** Applied strategically for complex animations
3. **GPU Acceleration:** `translateZ(0)` for smooth animations
4. **Lazy Loading:** Heavy components load on demand
5. **Reduced Motion:** Respects system preference

---

## 🎨 Design System

### Spacing Scale

**Philosophy:** 8px base unit (Tailwind's 4px × 2)

```
gap-2  = 8px   # Tight spacing (tags)
gap-4  = 16px  # Standard spacing (cards)
gap-6  = 24px  # Comfortable spacing (sections)
gap-8  = 32px  # Generous spacing (major elements)
gap-12 = 48px  # Section spacing
```

**Section Padding:**
- Mobile: `py-20` (80px)
- Desktop: `py-32` (128px)
- Creates breathing room, premium feel

### Border Radius

```
rounded-lg  = 8px   # Cards, buttons
rounded-xl  = 12px  # Larger cards
rounded-2xl = 16px  # Main sections
rounded-full       # Pills, avatars
```

**Why:** Soft corners feel modern but not toy-like

### Shadows

**Philosophy:** Minimal shadows, rely on borders

```css
.glow-effect {
  box-shadow: 
    0 0 20px rgba(14, 165, 233, 0.1),
    0 0 40px rgba(14, 165, 233, 0.05);
}
```

**Why:** Glow effects for accent, not elevation

---

## 🧩 Component Design Patterns

### Card Pattern

**Glass Morphism:**
```css
.card-glass {
  @apply bg-midnight-900/40 backdrop-blur-xl 
         border border-midnight-800/50 rounded-2xl;
}
```

**Why:**
- Semi-transparency creates depth
- Backdrop blur is modern, iOS-inspired
- Subtle borders define boundaries

### Timeline Pattern

**Visual Connection:**
- Vertical line connects events
- Dots mark timeline nodes
- Cards offset from line
- Mobile: No line, stacked cards

**Why:**
- Shows progression/chronology
- Industry-standard pattern
- Visually engaging

### Grid Layouts

**Responsive Strategy:**
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

**Breakpoints:**
- Mobile: 1 column (< 768px)
- Tablet: 2 columns (768px - 1024px)
- Desktop: 3 columns (> 1024px)

---

## 🌐 Three.js Background

### Implementation Details

**Particle System:**
- 2000 particles (balance between visual impact and performance)
- Positions: Random 10×10×10 unit cube
- Color: `#0ea5e9` (accent blue)
- Opacity: 0.3 (subtle, not overwhelming)
- Size: 0.015 (small points)

**Animation:**
```typescript
ref.current.rotation.x = state.clock.getElapsedTime() * 0.02
ref.current.rotation.y = state.clock.getElapsedTime() * 0.03
```

**Why Slow Rotation?**
- 0.02/0.03 radians per second is imperceptible but creates life
- Different X/Y speeds prevent repetitive patterns
- Too fast would be distracting

**Performance:**
- `frustumCulled={false}` - particles always render (they're cheap)
- No complex geometry, just points
- GPU-accelerated through WebGL
- Degrades gracefully on low-end devices

**Design Decision: Why Particles?**
- Geometric, technical aesthetic
- Suggests data, connectivity, complexity
- Not a generic gradient blob
- Scholarly/research feel

---

## 📊 Data Architecture

### Centralized Data Pattern

**File:** `src/data/portfolio-data.ts`

**Philosophy:**
- Single source of truth
- Non-technical people can edit
- TypeScript types ensure consistency
- Easy to version control

**Structure:**
```typescript
export const experience = [ /* array of objects */ ]
export const research = [ /* array of objects */ ]
```

**Benefits:**
1. Content updates don't touch components
2. Easy to add/remove items
3. Consistent data shape
4. Portable to CMS later if needed

### Content Strategy

**What's Included:**
- Only impactful experiences (6 internships)
- Only significant projects (3 best)
- Research papers with detail
- Skills categorized intelligently

**What's Excluded:**
- Every minor course project
- Repetitive experiences
- Filler content

**Why:** Quality over quantity, "elite" positioning

---

## 🎯 SEO & Performance

### Meta Tags Strategy

**Title:** "Pushkal Garg | ML Researcher & Engineer"
- Name first (personal brand)
- Clear professional identity

**Description:**
- Keywords: Machine Learning, AI, Research, Healthcare
- Mention specific achievements (11+ papers, Springer)
- Location (Sydney, Australia)

**OpenGraph:**
- Set for professional sharing (LinkedIn, Twitter)
- Future: Add og:image with professional photo

### Performance Targets

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Techniques:**
1. Next.js automatic code splitting
2. Font subsetting and preloading
3. Image optimization (when images added)
4. No render-blocking resources
5. Efficient CSS (Tailwind purges unused)

### Accessibility

**WCAG 2.1 AA Compliance:**
- Color contrast ratios: 4.5:1 minimum
- Semantic HTML (`<nav>`, `<section>`, `<article>`)
- Keyboard navigation support
- Focus indicators on all interactive elements
- ARIA labels where needed
- Alt text for images (when added)

**Screen Reader Considerations:**
- Proper heading hierarchy (H1 → H2 → H3)
- Descriptive link text
- No "click here" or "read more" without context

---

## 🔮 Future Enhancements

### Potential Additions

1. **Blog Section:**
   - Technical writing
   - Research summaries
   - Markdown-based content

2. **Project Case Studies:**
   - Detailed breakdowns
   - Problem → Approach → Results
   - Code snippets, diagrams

3. **Interactive Resume:**
   - Filter by skill/domain
   - Timeline view
   - Export to PDF

4. **Analytics Dashboard:**
   - Visitor stats
   - Popular sections
   - Engagement metrics

5. **CMS Integration:**
   - Sanity.io or Contentful
   - Easy content updates
   - Non-technical editing

### Technical Debt / Improvements

1. **Unit Tests:**
   - Component testing with Vitest
   - Accessibility testing

2. **E2E Tests:**
   - Playwright for user flows
   - Visual regression tests

3. **Performance Monitoring:**
   - Real User Monitoring (RUM)
   - Synthetic monitoring

4. **Internationalization:**
   - Multi-language support (if needed)
   - next-i18next integration

---

## 🎓 Key Takeaways

### What Makes This Portfolio "Elite"?

1. **Content Quality:** Curated, impactful experiences only
2. **Design Cohesion:** Every element supports the aesthetic
3. **Technical Excellence:** Modern stack, best practices
4. **Attention to Detail:** Micro-interactions, spacing, typography
5. **Performance:** Fast, accessible, SEO-optimized
6. **Purposeful Motion:** Animations enhance, never distract

### What It's NOT:

1. Not a template with swapped content
2. Not flashy for the sake of showing off
3. Not ignoring accessibility for aesthetics
4. Not overloaded with every project/experience
5. Not using trendy-but-dated design choices

### The Goal:

When recruiters, professors, or founders visit, they should think:

**"This person is serious. This person builds. This person thinks deeply. This person belongs in top research labs and high-impact teams."**

---

## 📚 Resources & References

### Design Inspiration
- [Apple Design Resources](https://developer.apple.com/design/)
- [Stripe.com](https://stripe.com) - Interaction patterns
- [Linear.app](https://linear.app) - Motion design
- [Awwwards](https://awwwards.com) - Portfolio examples

### Technical References
- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Three.js Fundamentals](https://threejs.org/manual/)

### Typography
- [Inter Font](https://rsms.me/inter/)
- [JetBrains Mono](https://jetbrains.com/mono/)
- [Practical Typography](https://practicaltypography.com)

---

Built with intention, designed with purpose, crafted with care.
