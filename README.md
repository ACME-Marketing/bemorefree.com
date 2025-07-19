# Be More Free Website (bemorefree.com)

A high-performance, SEO-optimized website for Be More Free - offering the Neutral Zone process as a radically different approach to personal transformation where clients find their own answers in a completely neutral, judgment-free space.

## 🚀 Project Overview

This website serves as the primary digital presence for Be More Free, focusing on:
- Converting visitors frustrated with traditional therapy into booked sessions
- Explaining the Neutral Zone process - our non-directive, non-evaluative approach
- Providing valuable content through blog integration
- Enabling easy booking for free trials and paid sessions

## 📋 Documentation

- **[PRD.md](./PRD.md)** - Product Requirements Document
- **[CLAUDE.md](./CLAUDE.md)** - AI assistant context and guidelines
- **[PLANNING.md](./PLANNING.md)** - Technical architecture and planning
- **[TASKS.md](./TASKS.md)** - Implementation tasks and progress

## 🛠 Tech Stack

- **Framework:** Astro 4.x (Static Site Generator)
- **Styling:** Tailwind CSS
- **CMS:** Headless WordPress (via GraphQL)
- **Hosting:** Netlify
- **Automation:** n8n (https://n8n.srv874889.hstgr.cloud)
- **Booking:** Direct Cal.com integration

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd bemorefree.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 🌐 Environment Variables

Required environment variables (see `.env.example`):
- `PUBLIC_SITE_URL` - Production URL
- `WORDPRESS_GRAPHQL_ENDPOINT` - WordPress GraphQL API endpoint
- `N8N_WEBHOOK_URL` - n8n automation webhook
- `CAL_COM_NAMESPACE` - Cal.com booking namespace
- `NETLIFY_WEBHOOK_URL` - Netlify build hook

## 📁 Project Structure

```
/
├── src/
│   ├── layouts/        # Page layouts
│   ├── components/     # Reusable components
│   ├── pages/         # Route pages
│   ├── styles/        # Global styles
│   └── lib/           # Utilities and integrations
├── public/            # Static assets
├── PRD.md            # Product requirements
├── CLAUDE.md         # AI context
├── PLANNING.md       # Technical planning
└── TASKS.md          # Task tracking
```

## 🚢 Deployment

The site automatically deploys to Netlify on push to the `main` branch. 

- **Production:** https://bemorefree.com (main branch)
- **Staging:** TBD (develop branch)

## 🧪 Key Features

- **Non-Directive Philosophy:** All content emphasizes the neutral, non-evaluative approach
- **Booking Integration:** Free 30-minute trials and 60-minute paid sessions via Cal.com
- **Blog System:** WordPress headless CMS with automatic rebuilds
- **SEO Optimized:** Built for search visibility with performance in mind
- **Legal Compliance:** Clear disclaimers that this is not therapy or medical treatment

## 💡 Brand Architecture

- **Be More Free** - The company/brand name (matching the domain)
- **Neutral Zone** - The process/methodology offered by Be More Free

This distinction is important for SEO and brand clarity.

## ⚖️ Legal Notice

Be More Free and the Neutral Zone process are NOT:
- Therapy or counseling
- Medical or psychiatric treatment
- A healthcare service

The Neutral Zone is a non-directive exploration process where clients find their own answers.

## 🤝 Contributing

1. Always read PLANNING.md before starting work
2. Check TASKS.md for current priorities
3. Create feature branches from `develop`
4. Update task status in TASKS.md
5. Submit PRs with clear descriptions

---

*Built with Astro, Tailwind CSS, and a commitment to helping people be more free.*
