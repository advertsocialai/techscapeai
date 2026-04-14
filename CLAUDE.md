# TechScape AI — Design System Rules (Figma ↔ Code)

## 1. Project Structure

```
techscapeai/
├── frontend/                  # React SPA
│   ├── src/
│   │   ├── components/        # All UI components (one file per section)
│   │   ├── pages/             # Route-level pages (HomePage, ContactPage, NotFoundPage)
│   │   ├── layouts/           # MainLayout wraps every page (TopBanner + Navbar + Footer)
│   │   ├── hooks/             # useScrollAnimation (IntersectionObserver)
│   │   ├── services/          # api.js (axios calls to FastAPI backend)
│   │   ├── assets/            # Static images (hero.png, react.svg, vite.svg)
│   │   ├── index.css          # All design tokens + global utilities (Tailwind v4)
│   │   └── App.jsx            # BrowserRouter + Routes
│   ├── public/                # favicon.svg, icons.svg
│   ├── vite.config.js         # Vite + @vitejs/plugin-react + Tailwind v4
│   └── package.json
├── backend/                   # FastAPI (Python)
└── database/                  # schema.sql (Supabase)
```

## 2. Frameworks & Libraries

| Concern        | Tool                        | Version  |
|----------------|-----------------------------|----------|
| UI Framework   | React                       | 19       |
| Language       | JavaScript (JSX)            | ES2022   |
| Styling        | Tailwind CSS v4             | 4.2.x    |
| Bundler        | Vite                        | 8.x      |
| Routing        | react-router-dom            | 7.x      |
| Icons          | lucide-react + inline SVGs  | 1.7.x    |
| HTTP           | axios                       | 1.x      |

## 3. Design Tokens (defined in `frontend/src/index.css`)

All tokens are Tailwind v4 `@layer utilities` custom classes — **not** CSS variables or a token JSON file.

### Brand Colors
```
Blue  → #3D75F3   (primary accent)
Salmon→ #F5A086   (secondary accent)
Black → #000000   (background)
Dark  → #0D0D0D   (card background)
Border→ #1C1C1C   (card border)
```

### Gradients
```css
.grad        /* blue→salmon background gradient: linear-gradient(97.97deg, #3D75F3 0%, #F5A086 100%) */
.grad-text   /* same gradient applied as text fill */
.blue-text   /* blue-only gradient text */
```

### Typography Scale (Figma → Tailwind)
| Role            | Size (px) | Class / Style             |
|-----------------|-----------|---------------------------|
| Hero H1         | 40–58     | text-[40px] sm:text-[50px] lg:text-[58px] font-extrabold |
| Section H2      | 32–50     | text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold |
| Card H3         | 18        | text-[18px] font-bold     |
| Body            | 15–16     | text-[15px] lg:text-[16px] text-white/50 |
| Small / Tag     | 11–13     | text-[11px]–text-[13px]   |
| Label / Eyebrow | 13        | .label (salmon, uppercase, tracking-wide) |

### Spacing
- Section vertical padding: `py-20 lg:py-28`
- Container: `.wrap` → `max-width: 1440px`, `padding: 7.9%` desktop / `5%` mobile

## 4. Component Architecture

- **One component = one file**, located in `frontend/src/components/`
- Components are **function components** with no prop drilling (data defined inline as constants)
- Scroll animations via `useScrollAnimation` hook — add `ref` to wrapper, apply `transition-all duration-700` + `opacity/translate-y` classes based on `isVisible`

### Component List
| File             | Section ID       | Notes                          |
|------------------|------------------|--------------------------------|
| TopBanner.jsx    | —                | Dismissible gradient banner    |
| Navbar.jsx       | —                | Sticky, blur-on-scroll, mobile hamburger (`lg:hidden`) |
| Hero.jsx         | —                | Full-height, SVG sphere, floating tags (hidden on xs) |
| About.jsx        | #about           | Fan card layout                |
| Services.jsx     | #services        | 2×2 grid                       |
| AIAgents.jsx     | #ai-agents       | 2×2 grid                       |
| HowItWorks.jsx   | #how-it-works    | 3-col with connector line      |
| Team.jsx         | #team            | 3-col: text / SVG char / accordion |
| Partners.jsx     | #partners        | Logo row inside dark card      |
| CTA.jsx          | #get-started     | Stats + dual CTA buttons       |
| Footer.jsx       | —                | 6-col grid + large wordmark    |

## 5. Styling Approach

- **Tailwind v4** utility classes inline on JSX elements
- **No CSS Modules, no Styled Components**
- Custom reusable classes defined in `@layer utilities` in `index.css`:
  - `.btn` — gradient pill button
  - `.btn-nav` — navbar gradient button (rounded-6px)
  - `.card` / `.card-hover` — dark card with border + hover lift
  - `.tag` — salmon pill tag on service cards
  - `.input-line` / `.select-line` — underline form inputs
  - `.label` / `.section-label` — salmon eyebrow text
  - `.wrap` — responsive max-width container
  - `.float` — CSS keyframe float animation (5s ease-in-out)
  - `.nav-blur` — backdrop-filter blur for navbar

## 6. Icon System

- **lucide-react**: only `Menu` and `X` (hamburger) from Navbar
- All other icons: **inline SVG** inside JSX, 28–32px viewBox, stroked not filled
- Icon colors match component accent (`#3D75F3` or `#F5A086`)
- No icon sprite file; icons live in the component that uses them

## 7. Asset Management

- Images in `frontend/src/assets/` — imported directly in JSX (`import hero from '../assets/hero.png'`)
- SVG illustrations inline in JSX (Sphere in Hero, Character in Team)
- `public/favicon.svg` and `public/icons.svg` referenced via root path

## 8. Responsive Design

Breakpoints (Tailwind defaults):
| Name | Width  | Usage                              |
|------|--------|------------------------------------|
| sm   | 640px  | Show floating tags, 2-col grids    |
| lg   | 1024px | Desktop nav, larger text, 3-col    |

Hamburger menu: visible below `lg` (`lg:hidden`), desktop nav links visible at `lg:flex`.

## 9. Figma → Code Mapping Rules

When implementing a Figma design into this codebase:

1. **Colors** → map to `#3D75F3` (blue), `#F5A086` (salmon), or white/opacity variants. Do not introduce new hex values — use existing brand tokens.
2. **Gradients** → use `.grad`, `.grad-text`, `.blue-text` classes.
3. **Buttons** → use `.btn` (pill) or `.btn-nav` (navbar). Do not create new button styles.
4. **Cards** → use `.card` or `.card-hover` base, add inline `background` and `border` style overrides for accent variants.
5. **Typography** → match sizes using `text-[Npx]` with responsive variants; use `font-extrabold` for headings, `font-semibold` for subheadings, `text-white/50` for body.
6. **Sections** → each Figma frame = one component file in `components/`. Always include `id=""` for anchor navigation.
7. **Animations** → use `useScrollAnimation` hook + Tailwind `transition-all duration-700` + `opacity/translate-y`. Stagger cards with `transitionDelay`.
8. **Spacing** → use `.wrap` for the container. Section padding is always `py-20 lg:py-28`.
9. **SVG illustrations** → inline in JSX with `defs` for gradients. Max width via Tailwind (`max-w-[480px]`).
10. **Mobile-first** — build for xs, enhance at sm/lg. Hide decorative elements on xs with `hidden sm:block`.
