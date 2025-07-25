# Tasks - Neutral Zone Website Implementation

## Milestone 1: Project Setup & Infrastructure
- [✓] Create GitHub repository with main/develop branches
- [✓] Initialize Astro project with TypeScript
- [✓] Configure Tailwind CSS with custom brand colors
- [✓] Set up Prettier with Astro and Tailwind plugins
- [✓] Create .env.example with all required variables
- [✓] Configure Netlify deployment from GitHub
- [✓] Set up staging environment on Netlify
- [✓] Create basic folder structure per PLANNING.md
- [✓] Add favicons and meta images
- [✓] Configure Astro config for sitemap and image optimization

## Milestone 2: Core Layout & Components
- [✓] Create Layout.astro with header/footer
- [✓] Build responsive navigation component
- [🔄] Design mobile menu with smooth animations
- [✓] Create Button component with variants (primary, secondary, ghost)
- [✓] Build Card component for testimonials
- [✓] Create Section component with consistent spacing
- [✓] Implement SEO component for meta tags
- [✓] Add skip navigation for accessibility
- [✓] Create 404 error page
- [✓] Build footer with all required links

## Milestone 3: Homepage Development
- [✓] Create hero section with clear value proposition
- [✓] Write compelling headline: "See Yourself Clearly. Make Real Changes."
- [✓] Add "Book Free Trial" CTA button
- [✓] Build "Why Neutral Zone" section with differentiators
- [✓] Create testimonials section with 3 placeholder reviews
- [✓] Add "How It Works" 3-step process section
- [✓] Build "What Makes Us Different" comparison table
- [✓] Implement FAQ section addressing common objections
- [✓] Add bottom CTA section with booking emphasis
- [✓] Ensure all sections are mobile-responsive

## Milestone 4: About & Facilitator Pages
- [✓] Create About page explaining Neutral Zone approach
- [✓] Write content emphasizing non-directive philosophy
- [✓] Add "What Happens in a Session" section
- [ ] Build facilitator profile page with photo
- [✓] Add facilitator philosophy section
- [✓] Include "Licensed Psychedelic Facilitator" credential
- [✓] Create "Is This Right for You?" self-assessment
- [✓] Add clear CTAs to book throughout pages
- [✓] Implement breadcrumb navigation
- [✓] Cross-link between about and facilitator pages

## Milestone 5: Blog System Integration
- [✓] Set up GraphQL client for WordPress
- [✓] Create blog post type definitions
- [✓] Build blog listing page with pagination
- [✓] Create blog post template with dynamic routing
- [✓] Add featured image support with lazy loading
- [✓] Implement excerpt display on listing
- [✓] Add reading time calculation
- [✓] Create category filtering (stretch goal)
- [✓] Build "Related Posts" component
- [ ] Add social sharing buttons (no comments)

## Milestone 6: Initial Blog Content
- [ ] Write "Why Self-Help Doesn't Work" post
- [ ] Write "Why Therapy Doesn't Give Expected Results" post
- [ ] Write "Stop Blaming Your Parents" post
- [ ] Write "Understanding Your Anger" post
- [ ] Write "The Myth of Coping Skills" post
- [ ] Optimize each post for target keywords
- [ ] Add compelling meta descriptions
- [ ] Include relevant internal links
- [ ] Create custom OG images for each post
- [ ] Test WordPress to Netlify rebuild workflow

## Milestone 7: Booking System Integration
- [✓] Research Cal.com embed vs redirect options
- [✓] Create free-trial booking page (30 min)
- [✓] Create paid session booking page (60 min)
- [✓] Set up Cal.com event types in account
- [✓] Configure n8n webhook for bookings
- [✓] Build thank you/confirmation page
- [✓] Add booking availability widget
- [✓] Create "What to Expect" pre-booking content
- [✓] Test booking flow end-to-end
- [✓] Set up booking confirmation emails via Cal.com
- [✓] Integrate Cal.com embed on homepage for free 30-min sessions
- [✓] Update Cal.com configuration to use 'be-more-free/30min' booking link
- [✓] Create Services page with both free trial and 1-hour session booking
- [✓] Integrate 1-hour session Cal.com embed ('be-more-free/neutral-zone-1hr')
- [✓] Add Services link to main navigation menu
- [✓] Update footer to include Services page link
- [✓] Fix header Free Trial button to use Cal.com (not link to page)
- [✓] Move Cal.com 30min script to global BaseLayout for site-wide access
- [✓] Remove redundant Cal.com scripts from individual pages
- [✓] Update ALL page bottom CTAs to use Cal.com integration instead of booking page links
  - [✓] About page CTA
  - [✓] Facilitator page CTA
  - [✓] All 6 principle pages CTAs
  - [✓] Blog post template CTA
  - [✓] Blog index fallback CTA

## Milestone 8: Lead Generation & Ebook
- [ ] Create contact form component
- [ ] Build ebook download landing page
- [ ] Set up n8n workflow for form submission
- [ ] Configure email delivery via n8n
- [ ] Create form validation and error states
- [ ] Add honeypot for spam prevention
- [ ] Write ebook content (or use existing)
- [ ] Design ebook PDF with branding
- [ ] Test email delivery across providers
- [ ] Add success message after submission

## Milestone 9: Legal & Compliance Pages
- [✓] Write Privacy Policy with confidentiality terms
- [✓] Create Terms of Service page
- [✓] Draft medical/therapy disclaimer
- [✓] Add "Not a Healthcare Service" notices
- [✓] Include coaching service clarification
- [ ] Create cookie policy (if needed)
- [✓] Add legal pages to footer navigation
- [ ] Ensure GDPR compliance for forms
- [✓] Add required disclaimers to booking flow
- [ ] Have legal review of all compliance content

## Milestone 10: SEO & Performance Optimization
- [✓] Install and configure @astrojs/sitemap
- [✓] Add robots.txt with sitemap reference
- [✓] Implement structured data for local business
- [ ] Optimize all images with proper sizing
- [ ] Add alt text to all images
- [✓] Create custom 404 page with helpful links
- [ ] Set up 301 redirects if needed
- [ ] Minimize CSS/JS bundle sizes
- [ ] Configure caching headers
- [ ] Test Core Web Vitals scores

## Milestone 11: Analytics & Monitoring
- [ ] Set up Google Analytics 4
- [ ] Configure conversion tracking for bookings
- [ ] Set up Google Search Console
- [ ] Add Microsoft Clarity (optional)
- [ ] Create Netlify form notifications
- [ ] Set up n8n error notifications
- [ ] Configure uptime monitoring
- [ ] Create dashboard for key metrics
- [ ] Document tracking implementation
- [ ] Test all conversion events

## Milestone 12: Testing & Quality Assurance
- [ ] Test all forms with various inputs
- [ ] Verify mobile responsiveness on real devices
- [ ] Check cross-browser compatibility
- [ ] Test booking flow with real Cal.com
- [ ] Verify email delivery and formatting
- [ ] Test site speed on slow connections
- [ ] Run accessibility audit with axe
- [ ] Check all internal links
- [ ] Verify meta tags on all pages
- [ ] Load test the GraphQL endpoint

## Milestone 13: Launch Preparation
- [ ] Final content review for philosophy alignment
- [ ] Legal review of all disclaimers
- [ ] Set up Google My Business profile
- [ ] Create launch announcement content
- [ ] Prepare customer support documentation
- [ ] Brief facilitator on website features
- [ ] Set up monitoring alerts
- [ ] Create backup and rollback plan
- [ ] Schedule launch date/time
- [ ] Prepare launch day checklist

## Milestone 14: Launch Day
- [✓] Deploy to production environment
- [✓] Update DNS to point to Netlify
- [✓] Verify SSL certificate is active
- [✓] Test all critical user paths
- [ ] Submit sitemap to Google
- [ ] Announce launch on social channels
- [ ] Monitor error logs closely
- [ ] Check analytics is tracking
- [ ] Send test booking through system
- [ ] Celebrate! 🎉

## Milestone 15: Post-Launch Improvements
- [ ] Add YouTube video integration page
- [ ] Create podcast episodes page
- [ ] Implement email newsletter signup
- [ ] Add more blog categories/tags
- [ ] Create session package pricing
- [ ] Build resources/downloads page
- [ ] Add advanced booking features
- [ ] Implement A/B testing for CTAs
- [ ] Create client portal (Phase 2)
- [ ] Plan facilitator training section

## Ongoing Tasks (Weekly/Monthly)
- [ ] Publish new blog post (weekly)
- [ ] Monitor and respond to analytics
- [ ] Update testimonials with real ones
- [ ] Optimize based on user feedback
- [ ] Keep dependencies updated
- [ ] Review and improve SEO rankings
- [ ] Test all critical paths
- [ ] Backup WordPress content
- [ ] Review n8n workflow logs
- [ ] Plan next phase features

---

## Additional Tasks (Added During Development)
- [✓] Transform design from bland to modern & bold aesthetic
- [✓] Add gradient backgrounds and geometric patterns
- [✓] Implement accent color palette (coral/orange)
- [✓] Create animated hero sections
- [✓] Update navigation with modern hover effects
- [✓] Design card-based layouts with shadows
- [✓] Add floating animations and visual interest
- [✓] Modernize footer with gradient background
- [✓] Fix branding: Be More Free as company, Neutral Zone as process
- [✓] Create proper About page for Be More Free company
- [✓] Move process description to /neutral-zone page
- [✓] Update all branding references throughout site
- [✓] Add sitemap integration and configuration
- [✓] Create robots.txt with proper crawler instructions
- [✓] Add favicon and manifest.json for PWA support
- [✓] Implement structured data for LocalBusiness schema
- [✓] Add comprehensive meta tags and Open Graph support
- [✓] Create humans.txt for transparency
- [✓] Create blog listing page with modern design
- [✓] Create facilitator profile page
- [✓] Fix GraphQL filtering to only fetch 'bemorefree' and 'all' tagged posts
- [✓] Standardize URL generation across all blog components
- [✓] Create utility functions for consistent slug/date handling
- [✓] Modernize blog post page design to match site aesthetic
- [✓] Add breadcrumb navigation and improved sidebar
- [✓] Add call-to-action section in blog posts
- [✓] Create free-trial page with complete content and modern design
- [✓] Make Neutral Zone principle cards clickable
- [✓] Create dedicated pages for all 6 principles:
  - [✓] No One Has Altitude Over You (/principles/no-altitude)
  - [✓] Everything You Say is Truth (/principles/truth)
  - [✓] Hours, Not Years (/principles/hours-not-years)
  - [✓] Find Your Own Answers (/principles/find-answers)
  - [✓] Complete Acceptance (/principles/complete-acceptance)
  - [✓] No Prerequisites (/principles/no-prerequisites)
- [✓] Cross-link all principle pages with related principles section
- [✓] Maintain consistent branding and modern design across all new pages
- [✓] Ensure principle pages don't appear in main navigation
- [✓] Create comprehensive legal pages with strong disclaimers:
  - [✓] Privacy Policy (/privacy)
  - [✓] Terms of Service (/terms) 
  - [✓] Disclaimer (/disclaimer)
- [✓] All legal pages emphasize "not therapy" positioning and include Cal.com CTAs
- [✓] Update ALL page bottom CTAs to use Cal.com integration

## Task Status Key
- [ ] Not started
- [🔄] In progress
- [✓] Completed
- [⏸️] Blocked
- [🚫] Cancelled

## Notes
- Always update task status immediately
- Add newly discovered tasks to appropriate milestone
- Include task ID in commit messages
- Review with team weekly

*Last Updated: 2025-07-19*
*Total Tasks: 150*
*Completed: 77*