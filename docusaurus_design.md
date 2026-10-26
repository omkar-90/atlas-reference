# UI Design Spec — Docusaurus Plots/Charts Docs Site

This document defines the visual design system for the site. It's meant to be implemented via `src/css/custom.css` (CSS variables) and Docusaurus theme/swizzled components. No content/IA decisions here — purely look & feel.

---

## 1. Design Principles

- **Clean, technical, data-forward.** This is a reference tool, not a marketing site — prioritize legibility and scan-ability over decoration.
- **Charts are the hero.** UI chrome should recede so chart previews/images stand out. Avoid competing colors or heavy borders around content.
- **Consistent light/dark mode.** Every color must have a dark-mode equivalent; never hardcode a color that only works in one mode.

---

## 2. Color System

Define as CSS custom properties in `src/css/custom.css`, following Docusaurus's Infima variable convention.

```css
:root {
  /* Brand */
  --ifm-color-primary: #2e5aac;
  --ifm-color-primary-dark: #2a51a0;
  --ifm-color-primary-darker: #274c97;
  --ifm-color-primary-darkest: #203f7c;
  --ifm-color-primary-light: #3263b8;
  --ifm-color-primary-lighter: #3568bf;
  --ifm-color-primary-lightest: #4876c9;

  /* Neutrals */
  --ifm-background-color: #ffffff;
  --ifm-font-color-base: #1c1e21;
  --ifm-color-emphasis-300: #e3e5e8;

  /* Code */
  --ifm-code-font-size: 90%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.07);
}

[data-theme='dark'] {
  --ifm-color-primary: #6d93d9;
  --ifm-color-primary-dark: #4f7dce;
  --ifm-color-primary-darker: #3f72c9;
  --ifm-color-primary-darkest: #2c5cae;
  --ifm-color-primary-light: #8ba9e1;
  --ifm-color-primary-lighter: #9bb5e5;
  --ifm-color-primary-lightest: #c2d2ef;

  --ifm-background-color: #15181c;
  --ifm-font-color-base: #e3e5e8;
  --docusaurus-highlighted-code-line-bg: rgba(255, 255, 255, 0.1);
}
```

**Important — chart color reservation:** do NOT use pure red, green, orange, or purple as the primary brand/accent color. Those are reserved for chart series colors in example images, and reusing them for UI chrome (links, buttons, callouts) creates visual confusion between "this is UI" and "this is data." A blue in the `#2e5aac` family (as above) is a safe, neutral pick — swap the hex if you have existing brand colors, but keep the same constraint.

**Chart example palette** (used inside the chart images themselves, not the UI) — fix this as a separate, documented set so every example chart looks consistent:
```
#4E79A7, #F28E2B, #E15759, #76B7B2, #59A14F, #EDC948, #B07AA1, #FF9DA7
```
(Tableau's "Tableau 10"-style qualitative palette — colorblind-reasonably-safe, works on both light and dark backgrounds with a white/transparent chart background.)

---

## 3. Typography

```css
:root {
  --ifm-font-family-base: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --ifm-font-family-monospace: 'JetBrains Mono', 'Fira Code', SFMono-Regular, Consolas, monospace;
  --ifm-heading-font-weight: 600;
  --ifm-line-height-base: 1.65;
}
```

- Load fonts via Google Fonts link in `docusaurus.config.js` `headTags`, or self-host for performance.
- Headings: 600 weight, slightly tighter line-height than body (`1.2`–`1.3`).
- Body copy: 16px base, 1.65 line-height for readability on long reference pages.
- Code blocks: monospace, 90% of base size, never smaller than 13px.

---

## 4. Layout

- **Max content width:** keep Docusaurus default (~1140px container) but consider narrowing the actual prose column to ~760px within chart-type pages so text doesn't stretch too wide — charts/images can span full width, text should not.
- **Sidebar width:** default Infima width (~300px) is fine; don't compress it, chart category names can be long.
- **Spacing scale:** stick to Infima's existing spacing vars (`--ifm-spacing-horizontal`, etc.) rather than inventing a new scale — reduces CSS conflicts.
- **Page padding:** generous top padding on chart-type pages before the `<ChartPreview />` so the image doesn't feel cramped against the title.

---

## 5. Component Styling

### Chart Preview Container
```css
.chart-preview {
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 8px;
  padding: 1.5rem;
  background: var(--ifm-background-surface-color);
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 2rem;
}

.chart-preview img, .chart-preview svg {
  max-width: 100%;
  height: auto;
}
```
- Subtle border + rounded corners, no drop shadow (keep it flat/technical, not "card-like marketing site").
- Caption below image in smaller, muted text (`--ifm-color-emphasis-700`).

### Tabs (code examples)
- Use default Infima tab styling — don't restyle. Keep code-language tabs visually distinct from any content tabs used elsewhere (e.g., variant comparisons) by using a different tab group style if both appear on one page (Docusaurus supports multiple independent `<Tabs>` groups via `groupId`).

### Callouts / Admonitions
- Use Docusaurus default admonition types (`:::tip`, `:::caution`, `:::info`) — don't invent custom colors for these; keep the built-in semantic mapping (blue=info, yellow=caution, green=tip, red=danger) since users already parse these colors from other technical docs sites.

### Comparison Table (for "Choosing a Chart" guide)
- Zebra-striped rows (`--ifm-table-stripe-background`), sticky header row on scroll if the table is long, horizontal scroll on mobile rather than squeezing columns.

### Navbar
- Keep it minimal: logo + site title, `Docs`, `Guides`, `Reference`, dark-mode toggle, search bar, GitHub icon link (if OSS).
- No mega-menu/dropdown unless the chart-type list grows very large — rely on sidebar + search instead.

---

## 6. Iconography

- Use a single consistent icon set throughout (e.g., Lucide or Tabler Icons) — don't mix icon libraries.
- Use icons sparingly: category markers in the sidebar (optional), admonition icons (Docusaurus defaults), and maybe a small icon per chart-type card if a card-grid landing page is used.

---

## 7. Responsive Behavior

- Chart preview images must scale down on mobile without horizontal scroll (`max-width: 100%`).
- Code blocks and comparison tables get horizontal scroll containers on narrow viewports rather than wrapping/breaking.
- Sidebar collapses to the default Docusaurus hamburger menu on mobile — no custom mobile nav needed.

---

## 8. Dark Mode Checklist

Every custom component must be checked against both themes:
- [ ] Chart preview border/background visible in both modes
- [ ] Example chart images have a background that works on both (prefer transparent PNG/SVG, or generate two versions if charts use a white background)
- [ ] Custom callout/table colors have `[data-theme='dark']` overrides
- [ ] Links/accent color passes contrast check in both modes (aim for WCAG AA, 4.5:1 for body text)

---

## 9. Files the Agent Should Create/Edit

```
src/
├── css/
│   └── custom.css          # Section 2–3 variables, component overrides
├── components/
│   └── ChartPreview/
│       ├── index.jsx
│       └── styles.module.css   # Section 5 styling
docusaurus.config.js          # colorMode config, font links in headTags
```

---

**Note for the agent:** treat Sections 2–3 (colors, fonts) as the first implementation step — get `custom.css` variables in place and confirm light/dark toggle works before building any custom components, since every other component depends on those tokens.
