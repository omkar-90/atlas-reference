# Atlas Documentation & Scientific Reference

Authoritative documentation and Scopus-indexed research citations for Atlas machine learning and surrogate visualization workflows.

## Overview

This repository hosts the official documentation platform for Atlas, providing:
- **Pre-Visualization Diagnostics**: Design of Experiments (DoE), correlation matrices, Spearman Coefficient of Importance (CoI), Anthill plots, empirical distributions, parallel coordinate geometry, and spider charts.
- **Post-Visualization Surrogate Diagnostics**: Coefficient of Prognosis (CoP), 3D response surface methodology, residual goodness-of-fit analytics, and Functional Data Analysis (FDA) for continuous signals.
- **Peer-Reviewed Scientific Foundations**: Every visualization links directly to seminal research papers indexed in Scopus, IEEE, ASME, Springer, and Wiley texts, with verified DOIs and copyable BibTeX citations.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Content**: [MDX](https://mdxjs.com/) with `@next/mdx`
- **Math & Equations**: [KaTeX](https://katex.org/) via `remark-math` and `rehype-katex`
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `@tailwindcss/typography`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Vercel](https://vercel.com/)

---

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

---

## Deploying to Vercel

### Option 1: Vercel Git Integration (Recommended)
1. Push `atlas-docs` to your GitHub / GitLab repository.
2. Log into [Vercel](https://vercel.com) and click **"Add New... > Project"**.
3. Import the `atlas-docs` repository.
4. Next.js will be auto-detected as the framework.
5. Click **"Deploy"**.

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly
cd atlas-docs
vercel
```
