# Claude Context for Neutral Zone Website Development

## CRITICAL WORKFLOW - START HERE EVERY TIME
1. **Always read PLANNING.md at the start of EVERY new conversation**
2. **Check TASKS.md before starting your work**
3. **Mark completed tasks immediately**
4. **Add newly discovered tasks immediately**

## Project Overview
You are helping build a website for Be More Free, which offers the Neutral Zone process as a revolutionary alternative to traditional therapy. The website is bemorefree.com and the primary goal is converting visitors into booked sessions.

## CRITICAL BRANDING
- **Be More Free** = The company/brand name (matches the domain)
- **Neutral Zone** = The process/methodology offered by Be More Free
- Always maintain this distinction for SEO and brand clarity

## Core Philosophy - THIS IS CRITICAL
Neutral Zone is NOT therapy. It's a completely non-directive, non-evaluative, and non-judgmental space where:
- The practitioner has NO altitude over the client
- The practitioner offers NO advice, direction, or interpretation
- Everything the client says is taken as truth for that session
- The client finds their own answers and makes their own choices
- A bald client could say "I need to examine my curly hair" and that's what gets explored

**Always maintain this neutral, non-prescriptive tone in all content and code comments.**

## Technical Stack & Constraints
- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS only
- **CMS:** Headless WordPress via GraphQL (already configured)
- **Hosting:** Netlify
- **Automation:** n8n at https://n8n.srv874889.hstgr.cloud
- **Booking:** Direct Cal.com integration
- **No Database:** This is a static site
- **No Comments:** Blog posts don't have comments
- **No Auth:** No user accounts or client portal in MVP

## File Structure Requirements
Every feature or major change should have:
- Updated tasks.md with specific implementation steps
- Updated Planning.md if architecture changes
- Clear commit messages referencing the specific task

## Document Maintenance
- **PLANNING.md**: Update when architecture or approach changes
- **TASKS.md**: Keep current with completed/new tasks every session
- **PRD.md**: Reference for requirements, rarely needs updates
- **CLAUDE.md**: Update if core understanding shifts

## Content Voice & Tone

### DO:
- Use clear, direct language without therapeutic jargon
- Acknowledge frustration with traditional approaches
- Emphasize client autonomy and self-discovery
- Use phrases like "explore," "examine," "look at," "discover"
- Be warm but not overly emotional
- Promise process, not outcomes

### DON'T:
- Use therapy terms (treatment, healing, recovery, breakthrough)
- Make medical or psychological claims
- Promise specific results
- Use new-age or spiritual language
- Sound like a therapist or counselor
- Offer advice or interpretations

### Example Transformations:
- ❌ "Heal your trauma" → ✅ "Examine what's there"
- ❌ "Our therapeutic approach" → ✅ "The Neutral Zone process"
- ❌ "Transform your life" → ✅ "Make your own discoveries"
- ❌ "Expert guidance" → ✅ "A neutral space to look"

## User Personas to Consider
1. **Sarah (Frustrated Seeker)**: Tried everything, exhausted from coping
2. **Marcus (High Performer)**: Successful but self-sabotaging, wants efficiency
3. **Jamie (Therapy Skeptic)**: Distrusts traditional therapy but needs help

Always write for intelligent people who are tired of being told what to do.

## Key Features to Implement

### Must Have:
- Clear value proposition on homepage
- Easy booking flow (free trial + paid sessions)
- Blog with SEO optimization
- About/practitioner pages
- Legal pages with strong disclaimers
- Mobile-responsive everything
- Ebook delivery automation

### Visual Design Principles:
- Clean, uncluttered, professional
- Calming but not "therapeutic"
- Modern but not trendy
- Trustworthy but not medical
- Use plenty of whitespace
- Avoid cliché therapy imagery (couches, brains, etc.)

## SEO Considerations
Target keywords to naturally incorporate:
- alternative to therapy
- why therapy doesn't work
- shadow work
- frustrated with therapy
- executive self growth

Never stuff keywords - write naturally for humans first.

## Legal/Compliance Requirements
Every page should reinforce:
- This is NOT therapy or medical treatment
- No guarantees or specific outcome promises
- Practitioner is not licensed therapist/psychologist
- Confidential but not HIPAA-protected
- More like coaching than healthcare

## Common Pitfalls to Avoid
1. **Sounding like therapy**: Watch for sneaky therapeutic language
2. **Making promises**: Focus on process, not outcomes
3. **Creating dependence**: Emphasize client autonomy
4. **Over-explaining**: Let the process speak for itself
5. **Being prescriptive**: Never tell people what they need

## Component Guidelines

### When building components:
- Keep them simple and reusable
- Use semantic HTML for accessibility
- Follow Astro best practices for partial hydration
- Minimize JavaScript - this is mostly a content site
- Use Tailwind utilities, avoid custom CSS
- Test on mobile first

### Naming Conventions:
- Components: PascalCase (BookingCard.astro)
- Files: kebab-case (about-neutral-zone.astro)
- CSS classes: Tailwind utilities only
- Functions: camelCase (handleBookingClick)

## Integration Notes

### WordPress GraphQL:
- Only for blog posts
- Fields: title, content, excerpt, slug, date, featuredImage
- Cache aggressively - content updates trigger rebuilds

### Cal.com via n8n:
- Embed or redirect TBD
- Free sessions: 30 minutes
- Paid sessions: 60 minutes
- Include session type in booking flow

### n8n Webhooks:
- WordPress post publish → Netlify rebuild
- Contact form → Email ebook
- Booking confirmation → TBD

## Testing Checklist
Before marking any task complete:
- [ ] Mobile responsive
- [ ] Accessibility (keyboard nav, screen readers)
- [ ] Legal disclaimers present
- [ ] No therapeutic language
- [ ] Fast load time (<3s)
- [ ] SEO meta tags set
- [ ] Forms have validation
- [ ] Error states handled

## Success Metrics to Keep in Mind
- 5% visitor → free trial conversion
- 40% free trial → paid conversion
- <3 second page load
- First page Google ranking for target keywords

## Questions to Ask Before Building
1. Does this maintain the neutral, non-directive philosophy?
2. Will this confuse people about therapy vs. Neutral Zone?
3. Is the language accessible to someone who distrusts therapy?
4. Does this create unnecessary barriers to booking?
5. Will this scale when there are multiple practitioners?

## Remember
You're building a gateway to something radically different. Every design decision, every word choice, every feature should reinforce that this is NOT another therapy website. This is something new, something that actually works, something that honors the client's own wisdom.

Keep it simple. Keep it neutral. Keep it human.