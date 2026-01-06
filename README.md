# Pushkal Garg - Portfolio Website

A world-class personal portfolio website showcasing research publications, technical experience, and project work. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Philosophy

**Aesthetic Direction:** Refined minimalism meets research lab sophistication
- **Inspiration:** Apple's restraint + Stripe's technical elegance + Linear's motion design + Academic precision
- **Typography:** Distinctive but professional - geometric sans for headings, refined grotesque for body
- **Color Palette:** Deep blacks and grays with refined blue accents (no purple gradients)
- **Motion:** Scroll-based reveals, subtle parallax, purposeful hover states
- **Differentiation:** Academic section feels modern but scholarly, 3D background is geometric and purposeful

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts and metadata
│   │   ├── page.tsx            # Main page orchestrating all sections
│   │   └── globals.css         # Global styles and design tokens
│   ├── components/
│   │   ├── Navigation.tsx      # Sticky navigation with smooth scroll
│   │   ├── Background3D.tsx    # Three.js particle field
│   │   └── sections/
│   │       ├── Hero.tsx        # Landing section with stats
│   │       ├── About.tsx       # Narrative and trajectory
│   │       ├── Research.tsx    # Academic publications
│   │       ├── Experience.tsx  # Professional timeline
│   │       ├── Projects.tsx    # Technical projects
│   │       ├── Skills.tsx      # Categorized expertise
│   │       ├── Awards.tsx      # Recognition and leadership
│   │       ├── Education.tsx   # Academic credentials
│   │       └── Contact.tsx     # Contact information
│   └── data/
│       └── portfolio-data.ts   # All content and data
├── public/                     # Static assets
├── package.json
├── tailwind.config.js          # Custom design tokens
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## 🎭 Component Architecture

### Core Components

#### **Navigation** (`Navigation.tsx`)
- Sticky header with blur backdrop
- Smooth scroll to sections
- Mobile-responsive menu with slide-in animation
- Active state indicators

#### **Background3D** (`Background3D.tsx`)
- Three.js particle field (2000 particles)
- Subtle rotation animation
- Low-performance impact
- Transparent overlay on fixed positioning

#### **Hero** (`sections/Hero.tsx`)
- Strong opening statement
- Key statistics grid (11+ papers, 5M+ records, 98.89% accuracy, 70% efficiency)
- CTA buttons to Research and Contact
- Animated scroll indicator

#### **About** (`sections/About.tsx`)
- Three-paragraph narrative
- Highlight boxes: Current Focus, Education, Impact
- Contact information display
- Two-column responsive layout

#### **Research** (`sections/Research.tsx`)
- Expandable paper cards with abstracts
- Award badges for Best Paper
- Tag system (ML, Healthcare, NLP, CV, etc.)
- Research statistics grid
- Academic venue and year display

#### **Experience** (`sections/Experience.tsx`)
- Timeline layout with visual connection line
- Role, organization, location, period
- Bullet-point highlights
- Technology tags
- Hover effects on cards

#### **Projects** (`sections/Projects.tsx`)
- Card-based grid layout
- Impact metrics prominently displayed
- Category badges
- Tech stack visualization
- Highlight bullets

#### **Skills** (`sections/Skills.tsx`)
- Seven categorized skill groups
- Emoji icons for visual identity
- Hover effects on skill tags
- Relevant coursework section
- Grid responsive layout

#### **Awards** (`sections/Awards.tsx`)
- Achievement cards with icons
- Leadership experience section
- Organization and year metadata
- Trophy/Award iconography

#### **Education** (`sections/Education.tsx`)
- Timeline of degrees
- Status badges (In Progress, Completed)
- Achievement callouts
- Certifications grid
- Institution details

#### **Contact** (`sections/Contact.tsx`)
- Three contact methods (Email, LinkedIn, Phone)
- Download resume CTA
- Icon-based cards
- Hover interactions

## 🎨 Design System

### Color Palette

```css
midnight-950: #050710  /* Primary background */
midnight-900: #0a0e14  /* Secondary background */
midnight-800: #3d434e  /* Card backgrounds */
midnight-700: #474e5c  /* Borders */
midnight-400: #8891a2  /* Secondary text */
midnight-300: #adb5c0  /* Primary text muted */

accent-500: #0ea5e9   /* Primary accent */
accent-600: #0284c7   /* Accent dark */
accent-400: #38bdf8   /* Accent light */
```

### Typography

- **Headings:** Inter (weight: 600-700)
- **Body:** Inter (weight: 300-500)
- **Mono:** JetBrains Mono (for labels, tags)
- **Display:** Playfair Display (for emphasis)

### Spacing Scale

- Section padding: `py-20 md:py-32`
- Container max-width: `max-w-6xl`
- Card padding: `p-6` to `p-8`
- Gap sizes: `gap-4`, `gap-6`, `gap-8`, `gap-12`

## ✨ Animation Strategy

### Framer Motion Patterns

#### **Scroll-based Reveals**
```typescript
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px" })

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6 }}
>
```

#### **Staggered Children**
```typescript
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
))}
```

#### **Hover States**
```typescript
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="cursor-pointer"
>
```

### Animation Principles

1. **Purposeful:** Every animation serves a functional or narrative purpose
2. **Subtle:** Animations enhance, never distract
3. **Performant:** Use CSS transforms (translate, scale, rotate) over layout properties
4. **Accessible:** Respect `prefers-reduced-motion`
5. **Staggered:** Create rhythm with sequential delays (0.05-0.1s)

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Vercel auto-detects Next.js configuration
4. Deploy with zero configuration

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Manual Build

```bash
# Build the project
npm run build

# Output is in .next/ directory
# Serve with:
npm start
```

### Environment Variables

No environment variables required for this static portfolio.

## 🔧 Customization

### Updating Content

All content is centralized in `src/data/portfolio-data.ts`. Update:
- Personal information
- Education history
- Work experience
- Research publications
- Projects
- Skills
- Awards

### Styling Modifications

1. **Colors:** Modify `tailwind.config.js` color palette
2. **Typography:** Update font imports in `src/app/layout.tsx`
3. **Spacing:** Adjust in `tailwind.config.js` theme extension
4. **Animations:** Modify in individual components or `globals.css`

### Adding Sections

1. Create new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

## 📊 Performance Optimizations

- **Next.js Image Optimization:** Auto-optimizes images
- **Code Splitting:** Automatic with Next.js App Router
- **CSS Purging:** Tailwind removes unused styles in production
- **Font Optimization:** next/font loads fonts efficiently
- **Three.js Optimization:** Low particle count (2000), minimal geometry

## 🎯 SEO Features

- Semantic HTML structure
- Metadata in `layout.tsx`
- Open Graph tags
- Descriptive alt text (when images added)
- Structured navigation
- Fast page load times

## 🔒 Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Sufficient color contrast ratios
- Respects `prefers-reduced-motion`

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All sections are fully responsive with mobile-first approach.

## 🐛 Known Issues / Future Enhancements

1. **Resume Download:** Currently shows alert, needs actual PDF link
2. **Project Modals:** Could add detailed project view modals
3. **Research Abstracts:** All papers could have full abstracts
4. **Analytics:** Consider adding privacy-respecting analytics
5. **Blog Section:** Optional section for technical writing
6. **Dark/Light Toggle:** Currently dark-mode only

## 📄 License

Personal portfolio - All rights reserved to Pushkal Garg.

## 🤝 Contact

- Email: gargpushkal07@gmail.com
- LinkedIn: [Pushkal Garg](https://www.linkedin.com/in/pushkal-garg)
- Location: Sydney, Australia

---

Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Three.js.
