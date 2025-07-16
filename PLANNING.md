# Technical Planning - Neutral Zone Website

## Vision
Build a high-performance, SEO-optimized static website that converts visitors seeking therapy alternatives into Neutral Zone clients. The site must load instantly, rank well on Google, and provide a frictionless path from discovery to booked session.

## Architecture Overview

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────┐
│                 │     │              │     │             │
│  Headless WP    │────▶│     n8n      │────▶│   Netlify   │
│  (Blog CMS)     │     │ (Automation) │     │  (Hosting)  │
│                 │     │              │     │             │
└─────────────────┘     └──────────────┘     └─────────────┘
         │                      │                     ▲
         │                      │                     │
         ▼                      ▼                     │
┌─────────────────┐     ┌──────────────┐     ┌─────────────┐
│                 │     │              │     │             │
│   GraphQL API   │     │   Cal.com    │     │   (Build)   │
│                 │     │  (Booking)   │     │   Astro     │
│                 │     │              │     │             │
└─────────────────┘     └──────────────┘     └─────────────┘
```

### Data Flow
1. **Content Creation**: WordPress → GraphQL API → Astro at build time
2. **Content Updates**: WordPress webhook → n8n → Netlify rebuild trigger
3. **Booking Flow**: Website → Cal.com embed/redirect → n8n → email confirmations
4. **Lead Generation**: Contact form → n8n → email ebook → CRM (future)

### Page Architecture
```
/
├── index.astro                 # Homepage with hero, value prop, CTA
├── about/
│   ├── index.astro            # About Neutral Zone approach
│   └── practitioner.astro     # Practitioner profile
├── blog/
│   ├── index.astro            # Blog listing with pagination
│   └── [slug].astro           # Dynamic blog post pages
├── booking/
│   ├── free-trial.astro       # 30-min session booking
│   └── session.astro          # Full session booking
├── resources/
│   ├── videos.astro           # YouTube embeds
│   └── podcasts.astro         # Podcast episodes
├── legal/
│   ├── privacy.astro          # Privacy policy
│   ├── terms.astro            # Terms of service
│   └── disclaimer.astro       # Medical disclaimer
└── thank-you.astro            # Post-booking confirmation
```

## Technology Stack

### Core Framework
- **Astro 4.x** - Static site generator with partial hydration
  - Chosen for: SEO performance, minimal JS, content-focused
  - Use: `.astro` components for all pages
  - Avoid: Unnecessary client-side JS

### Styling
- **Tailwind CSS 3.x** - Utility-first CSS framework
  - Config: Custom colors for brand, minimal extensions
  - Approach: Mobile-first, semantic class names
  - Avoid: Custom CSS files, @apply overuse

### Content Management
- **WordPress (Headless)** - Blog content only
  - Existing instance with GraphQL enabled
  - Custom fields: Featured image, excerpt, SEO meta
  - Avoid: WordPress for any non-blog content

### Integrations
- **n8n** - Workflow automation
  - Hosted: https://n8n.srv874889.hstgr.cloud
  - Workflows: Rebuild triggers, email automation, booking confirmations
  - Webhooks: WordPress post publish, form submissions

- **Cal.com** - Appointment scheduling
  - Integration: Via n8n API
  - Implementation: TBD (embed vs redirect)
  - Types: 30-min free, 60-min paid

### Hosting & Deployment
- **Netlify** - Static hosting with CI/CD
  - Build command: `npm run build`
  - Publish directory: `dist/`
  - Environment variables: API keys, webhook URLs
  - Features: Form handling, redirects, headers

- **GitHub** - Version control
  - Branch strategy: main (production), develop (staging)
  - PR workflow: All changes via PR
  - Actions: Linting, type checking

### APIs & Data
- **GraphQL** - WordPress content API
  - Endpoint: Configured in existing setup
  - Queries: Posts, media, categories
  - Caching: Build-time only

## Required Tools & Setup

### Development Environment
```bash
# Required versions
Node.js: 18.x or 20.x LTS
npm: 9.x or higher
Git: 2.x

# VS Code extensions
- Astro
- Tailwind CSS IntelliSense
- Prettier
- ESLint
- GitLens
```

### Project Dependencies
```json
{
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "@astrojs/image": "^0.18.0",
    "tailwindcss": "^3.4.0",
    "graphql": "^16.8.0",
    "graphql-request": "^6.1.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-astro": "^0.12.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

### Environment Variables
```bash
# .env.example
PUBLIC_SITE_URL=https://bemorefree.com
WORDPRESS_GRAPHQL_ENDPOINT=https://wp.example.com/graphql
N8N_WEBHOOK_URL=https://n8n.srv874889.hstgr.cloud/webhook/xxx
CAL_COM_NAMESPACE=neutralzone
NETLIFY_WEBHOOK_URL=https://api.netlify.com/build_hooks/xxx
```

### External Accounts Needed
1. **Netlify** - Hosting account with build hooks enabled
2. **Cal.com** - Account with API access
3. **Google** - Analytics, Search Console, Business Profile
4. **WordPress** - Existing, with GraphQL plugin
5. **n8n** - Existing at specified URL

### Local Development Setup
```bash
# Clone repository
git clone [repo-url]
cd neutral-zone-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with actual values

# Start development server
npm run dev

# Build for production
npm run build
npm run preview
```

## Performance Targets
- **Lighthouse Score**: 95+ on all metrics
- **Page Load**: <3s on 3G
- **First Paint**: <1s
- **Bundle Size**: <100KB initial JS
- **Image Loading**: Lazy with blur placeholders

## SEO Strategy
- **Static Rendering**: All content pre-rendered
- **Meta Tags**: Dynamic per page
- **Sitemap**: Auto-generated
- **Schema.org**: Service business markup
- **URLs**: Human-readable slugs
- **Mobile**: Responsive-first design

## Security Considerations
- **No Client Secrets**: All API calls at build time
- **Form Validation**: Client and n8n-side
- **Headers**: Security headers via Netlify
- **HTTPS**: Enforced everywhere
- **Data**: No PII stored in Git

## Development Workflow
1. **Feature Branch**: Create from develop
2. **Local Development**: Test thoroughly
3. **Commit**: Semantic commit messages
4. **PR**: Against develop with description
5. **Review**: Check planning alignment
6. **Merge**: Squash and merge
7. **Deploy**: Auto-deploy to staging
8. **Test**: Verify on staging
9. **Release**: Merge develop to main
10. **Monitor**: Check analytics/errors

## Monitoring & Analytics
- **Google Analytics 4**: User behavior tracking
- **Google Search Console**: SEO monitoring
- **Netlify Analytics**: Performance metrics
- **n8n Logs**: Workflow monitoring
- **Error Tracking**: Browser console only (MVP)

## Future Considerations
- **CDN**: Cloudflare for global performance
- **A/B Testing**: Netlify split testing
- **CRM Integration**: HubSpot or similar
- **Email Platform**: For nurture sequences
- **Multilingual**: i18n preparation in URLs
- **PWA**: Offline capability for content

## Questions Before Implementation
1. Is Cal.com embed or redirect preferred?
2. What's the WordPress GraphQL endpoint?
3. Are n8n workflows already created?
4. Domain DNS currently pointed where?
5. Google accounts ready for analytics?

---

*Last Updated: [Current Date]*
*Next Review: Post-MVP Launch*