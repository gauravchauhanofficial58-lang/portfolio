# GAURAV — Personal Portfolio

> **Ultra-Premium Cinematic 3D Personal Portfolio**  
> Technology Enthusiast · Aspiring AI/ML Engineer · Developer · Digital Creator

An award-winning digital experience crafted with Next.js 16, React 19, TypeScript, Three.js, Tailwind CSS, and Lenis smooth scrolling.

---

## ✦ Design System & Aesthetic Direction

- **Editorial Palette**: Deep obsidian background (`#050505`, `#0B0B0B`), warm off-white typography (`#F2EEE8`), muted sepia metadata (`#A6A19A`), with restrained vibrant vermilion/orange accents (`#FF8752`).
- **Typography Hierarchy**: High-contrast editorial serif (*Cormorant Garamond*), modern clean body sans (*Inter*), and technical monospace metadata (*IBM Plex Mono*).
- **Hero Centerpiece**: Authentic portrait cutout of Gaurav with studio-grade monochrome contrast and sacred vermilion tilak preservation, interactive 3D mouse parallax, and switchable natural color mode.
- **Three-Dimensional Atmosphere**: Real-time Three.js canvas featuring floating celestial particles and a futuristic minimal wireframe armillary sculpture with WebGL detection and automatic tab throttling.
- **Micro-Interactions**: Custom magnetic cursor, active scroll spy navigation with smooth scrolling, accessible motion ON/OFF toggle, and celebratory contact form transmission.

---

## ✦ Website Architecture & Sections

1. **Floating Navigation**: Translucent pill navbar with scroll spy, mobile drawer, section jump anchors, and motion toggle.
2. **Hero Section**: Huge serif character reveal across the portrait, status indicators, CTAs, and portrait color switcher.
3. **About Section (`01 / ABOUT GAURAV`)**: Editorial split layout with bio, guiding principles (*Artificial Intelligence*, *Modern Engineering*, *Future Vision*), and identity statement (*Curious by nature. Building for the future.*).
4. **Selected Work (`02 / SELECTED WORK`)**: Asymmetrical project showcase cards with 3D tilt, tech stack tags, and architecture inspection modal (fully customizable via `src/data/portfolioData.ts`).
5. **Skills & Expertise (`03 / CAPABILITIES`)**: Categorized into *AI & Logic*, *Web Architecture*, and *Product & Craft* with interactive filtering.
6. **What I Explore (`04 / HORIZONS`)**: 6 focus areas exploring AI Development, Web Development, UI/UX Design, SaaS Development, AI Automation, and Creative Technology.
7. **Education & Journey (`05 / EVOLUTION`)**: Authentic representation of current education (**Class 8 @ Awan Educational Academy, CBSE**) clearly distinguished from future aspiration (**IIT Bombay — Computer Science & AI/ML**), accompanied by an evolutionary timeline.
8. **Contact (`06 / GET IN TOUCH`)**: Fully integrated Next.js API route (`/api/contact`) with validation, celebratory confetti, and configurable social channels.
9. **Footer**: Dynamic copyright year, location India, and back-to-top trigger.

---

## ✦ How to Customize Projects & Information

All personal data, project showcases, skills, and links are centralized in a single configuration file:

```
src/data/portfolioData.ts
```

To update or add new projects, simply edit the `projects` array in that file.

---

## ✦ Getting Started Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Gaurav portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/gaurav-portfolio.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework Preset: **Next.js**.
4. Click **Deploy**. Vercel will automatically build and deploy the production site.
