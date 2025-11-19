# Plan

The main page consists of several blocks, described in @main.md The file @page.tsx contains all blocks in one file. I want to have separate component for the blocks that are used by the @page.tsx .

# Answer

I'll help you refactor the main page into separate components. Looking at the structure, I can see multiple sections that could be extracted. Before I create a plan, I need to clarify a few things:

1. How would you like to organize these new components?
   - a) Keep them in the organisms folder (alongside existing components like ServiceCard, PricingTable)
   - b) Create a new folder like `sections` or `blocks` for page-level components

2. What level of granularity do you prefer for the components?
   - a) Create specific named sections (HeroSection, AboutSection, MethodSection, ContactSection, PricingSection, etc.)
   - b) Create generic reusable components (SectionHeader, TextSection, ImageGallery) that can be configured with props
   - c) Mix of both - specific sections for complex blocks (Hero, WhatsApp CTA) and generic components for simpler repeated patterns (headers, image containers)

# Update 1

1: organisms, 2: option c

# Answer Update 1

See refactor-page-plan.md

# Update 2

Why give translations object as props to the components instead of keeping it internal?

# Answer Update 2

You're absolutely right to question that! Looking at the current codebase pattern, it makes more sense for the components to use `useTranslations` internally rather than passing translations as props. Here's why:

**Benefits of internal useTranslations:**
- Cleaner component API - no need to pass large translation objects
- Self-contained components - each knows its own translation namespace
- Consistent with Next.js/next-intl patterns
- Less prop drilling from parent
- Components like these are application-specific anyway, not generic library components

**Updated approach:**
- Each section component would call `useTranslations('hero')`, `useTranslations('contact')`, etc. internally
- Components need to be client components (which is fine, the current page is already client-side)
- Only pass dynamic data like pricing arrays as props

Would you like me to update the plan with this approach - having components manage their own translations internally?

# Update 3

update the plan

# Build

Build the plan