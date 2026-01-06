# Quick Start Guide

Get your portfolio running in 5 minutes.

## Prerequisites
- Node.js 18 or later installed
- Basic terminal knowledge

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

## First Steps

### 1. Update Your Content
Edit `src/data/portfolio-data.ts`:
- Change personal information (name, email, etc.)
- Update experience, projects, research
- Modify skills and awards

### 2. Test Locally
```bash
npm run dev
```
Navigate through all sections, check mobile responsiveness.

### 3. Build for Production
```bash
npm run build
npm start
```
Test the production build locally.

### 4. Deploy to Vercel

**Option A: GitHub Integration**
1. Push to GitHub
2. Import project in Vercel
3. Auto-deploy ✨

**Option B: CLI**
```bash
npm i -g vercel
vercel
```

## Common Tasks

### Update Content
→ Edit `src/data/portfolio-data.ts`

### Change Colors
→ Edit `tailwind.config.js` color palette

### Add New Section
1. Create file in `src/components/sections/`
2. Import in `src/app/page.tsx`
3. Add to Navigation

### Customize Animations
→ Modify individual component files

## File Structure
```
portfolio-site/
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # React components
│   │   └── sections/    # Page sections
│   └── data/            # Your content ← EDIT THIS
├── public/              # Static files
└── package.json
```

## Need Help?

- Full documentation: `README.md`
- Deployment guide: `DEPLOYMENT.md`
- Architecture details: `ARCHITECTURE.md`

## Checklist

- [ ] Updated personal info in `portfolio-data.ts`
- [ ] Tested on mobile
- [ ] Checked all links work
- [ ] Replaced placeholder GitHub link
- [ ] Added resume PDF (if using download feature)
- [ ] Deployed to Vercel
- [ ] Shared with friends 🎉

**You're ready to impress!**
