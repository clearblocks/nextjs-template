# Refactor Main Page into Separate Block Components

## Overview

Extract sections from `src/app/[locale]/page.tsx` into separate components in the organisms folder, using specific components for complex blocks and generic components for repeated patterns.

## Components to Create

### Specific Complex Components (in src/components/organisms/)

1. **Header.tsx** - Logo and language switcher

- Uses useTranslations('header') internally
- No props needed

2. **HeroSection.tsx** - Hero with background image and text overlay

- Uses useTranslations('hero') internally
- No props needed

3. **WhatsAppCTA.tsx** - WhatsApp call-to-action section

- Uses useTranslations('whatsappCta') internally
- No props needed

4. **MethodSection.tsx** - Method description with multiple lists

- Uses useTranslations('method') internally
- No props needed

5. **ContactSection.tsx** - Contact info, address, and form

- Uses useTranslations('contact') internally
- No props needed

6. **PricingSection.tsx** - Pricing header with subtitle and tables

- Uses useTranslations('pricing') internally
- Props: pricing data arrays (washingItems, ironingAdultsItems, ironingChildrenItems, linensItems)

7. **Footer.tsx** - Copyright and address

- Uses useTranslations('footer') internally
- No props needed

### Generic Reusable Components (in src/components/organisms/)

8. **SectionHeader.tsx** - Gray section headers

- Props: title, id (optional), height, hasShadow (optional), subtitle (optional)

9. **ImageGallery.tsx** - Image container sections

- Props: images array (src, alt, aspectRatio or width/height)

10. **TextSection.tsx** - Simple text content

- Props: paragraphs array, className (optional)

## Implementation Steps

1. Create all 10 new component files in `src/components/organisms/`
2. Extract respective JSX and logic from `page.tsx` into each component
3. Update `src/components/organisms/index.ts` to export all new components
4. Refactor `page.tsx` to import and use the new components
5. Verify the page still renders correctly

## Key Implementation Details

- All components receive translations via props (not useTranslations directly in most cases)
- Complex components (Header, HeroSection, etc.) manage their own internal structure
- Generic components (SectionHeader, ImageGallery, TextSection) are highly configurable
- Services section stays in main page.tsx (uses existing ServiceCard)
- Maintain all existing functionality (scroll behavior, links, form submission)