# Deployment Guide

This guide covers multiple deployment options for your Next.js portfolio website.

## 🚀 Vercel (Recommended)

Vercel is the recommended platform for Next.js applications, offering zero-configuration deployment.

### Option 1: GitHub Integration (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` triggers a production deployment
   - Pull requests create preview deployments
   - Rollbacks are instant

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. Go to Project Settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. SSL certificate is automatic

---

## 🌊 Netlify

### Deploy via Git

1. **Push to GitHub/GitLab:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider
   - Select repository

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js (auto-detected)

### Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

---

## ☁️ AWS Amplify

1. **Push to Git repository**

2. **AWS Amplify Console:**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect to Git provider
   - Select repository and branch

3. **Build Settings (auto-detected):**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

---

## 🐳 Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build image
docker build -t portfolio-site .

# Run container
docker run -p 3000:3000 portfolio-site
```

---

## 📦 Static Export (Optional)

For hosting on any static host (GitHub Pages, Cloudflare Pages, etc.):

### Modify next.config.js

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Build Static Files

```bash
npm run build

# Output is in /out directory
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d out"

# Deploy
npm run deploy
```

---

## 🔧 Environment Variables

This portfolio doesn't require environment variables, but if you add features (analytics, CMS, etc.):

### Vercel
- Go to Project Settings → Environment Variables
- Add variables for Production, Preview, and Development

### Netlify
- Go to Site Settings → Environment Variables
- Add key-value pairs

### Local Development
```bash
# Create .env.local
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

---

## 📊 Post-Deployment Checklist

- [ ] Test all page sections load correctly
- [ ] Verify navigation smooth scrolling works
- [ ] Check mobile responsiveness
- [ ] Test all external links (LinkedIn, email)
- [ ] Verify 3D background renders properly
- [ ] Check animations perform smoothly
- [ ] Test download resume button
- [ ] Verify SEO metadata in page source
- [ ] Test loading speed (aim for < 2s)
- [ ] Check console for errors

---

## 🎯 Performance Optimization

### Lighthouse Scores to Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Tips
1. **Image Optimization:** Use Next.js Image component when adding photos
2. **Font Loading:** Already optimized with next/font
3. **Code Splitting:** Automatic with Next.js App Router
4. **Lazy Loading:** Consider for heavy components

---

## 🔒 Security Headers (Vercel/Netlify)

Add to `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
}
```

---

## 📈 Monitoring

### Recommended Tools
- **Vercel Analytics:** Built-in, zero config
- **Google Analytics 4:** Privacy-respecting, free
- **Plausible:** Privacy-focused alternative
- **Sentry:** Error tracking

### Adding Vercel Analytics

```bash
npm i @vercel/analytics
```

In `src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 🆘 Troubleshooting

### Build Failures

**Issue:** TypeScript errors
```bash
# Check types locally
npm run build

# Fix type errors in components
```

**Issue:** Missing dependencies
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

**Issue:** 404 on navigation
- Ensure you're not using static export for dynamic routes
- Vercel handles this automatically

**Issue:** Images not loading
- Check image paths
- Use Next.js Image component
- Verify public folder structure

### Performance Issues

**Issue:** Slow 3D rendering
- Reduce particle count in Background3D.tsx
- Consider disabling on mobile

**Issue:** Large bundle size
- Use dynamic imports for heavy components
- Check bundle analyzer: `npm i @next/bundle-analyzer`

---

## 📞 Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

**Ready to deploy?** Start with Vercel for the smoothest experience.
