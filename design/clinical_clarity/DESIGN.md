---
name: Clinical Clarity
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#43474e'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#73777f'
  outline-variant: '#c3c6cf'
  surface-tint: '#436084'
  primary: '#002444'
  on-primary: '#ffffff'
  primary-container: '#1a3a5c'
  on-primary-container: '#87a4cc'
  inverse-primary: '#abc9f2'
  secondary: '#b71032'
  on-secondary: '#ffffff'
  secondary-container: '#da3148'
  on-secondary-container: '#fffbff'
  tertiary: '#331f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#503200'
  on-tertiary-container: '#dd9202'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#abc9f2'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#2a486b'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ffb3b4'
  on-secondary-fixed: '#40000a'
  on-secondary-fixed-variant: '#920023'
  tertiary-fixed: '#ffddb4'
  tertiary-fixed-dim: '#ffb955'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#633f00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system serves an urgent, life-critical dual audience: professional paramedic/ambulance teams requiring high-speed information extraction under pressure, and the general public seeking authoritative, clear, and reassuring emergency care education.

The aesthetic blends **Modern Clinical Precision** with **Humanistic Approachability**. It emphasizes:
- **Authority and Trust:** Grounded deep blues and controlled structure deliver clinical credibility.
- **Urgent Hierarchy:** Unmistakable emergency cues through controlled medical red highlights without inducing cognitive panic.
- **Action Readiness:** Warm amber accents signal interactive pathways, triage actions, and next steps immediately.
- **Stress-Resilient Calm:** Generous negative space, rounded tactile cards, and calm slate surfaces minimize perceptual cognitive load during rapid mobile consults.

## Colors

The palette enforces decisive visual governance between baseline medical content, active hazards or critical triage status, and operative actions.

### Core Roles
- **Primary (`#1A3A5C`)**: Institutional trust, header navigation, primary badges, major container accents, and anchoring structural surfaces.
- **Secondary / Medical Red (`#C41E3A`)**: Emergency indicators, critical warnings, resuscitation cues, and urgent procedure calls. Used deliberately to preserve impact.
- **Tertiary / Warm Amber (`#F5A623`)**: Action buttons, active progress rings, vital notifications, and high-priority interactive triggers.
- **Neutral Primary (`#0F172A`)**: Primary typography and high-contrast analytical figures.
- **Neutral Secondary (`#475569`)**: Supporting instructional copy, metadata, and structural breadcrumbs.

### Atmospheric & Surface Tints
- **App Canvas (`#F8FAFC`)**: Soft slate base providing glare reduction on mobile outdoor use.
- **Surface Elevation (`#FFFFFF`)**: Pure clinical white for actionable cards, diagnostic sheets, and interactive modules.
- **Clinical Ice Tint (`#EBF3FA`)**: Selected list items, informational card washes, step counters, and table headers.
- **Critical Tint (`#FEE2E2`)**: Emergency context blocks, contraindication alerts, and rapid-response alerts.
- **Structural Border (`#E2E8F0`)**: Hairline dividers defining module containment without visual noise.

## Typography

The type hierarchy utilizes **Plus Jakarta Sans** uniformly across display, analytical body text, and compact operational UI labels. Its geometric stability and open apertures safeguard instant readability in shaking ambulance environments and glaring daylight.

- **Numerics & Vitals:** Critical doses, ECG rhythms, and emergency phone numbers utilize `headline-lg` or `headline-xl` paired with `font-weight: 800` and tabular figures (`tnum`).
- **Emergency Action Headers:** `headline-sm` and `title-lg` provide rapid step-by-step navigational milestones.
- **Educational Explanations:** `body-lg` enforces generous line-height (`26px`) to reduce reader fatigue during thorough training reviews.
- **Labels & Medical Codes:** `label-sm` utilizes uppercase styling with `+0.5px` tracking when identifying medical protocols (e.g., "BLS / ALS", "TRIAGE: RED").

## Layout & Spacing

The layout model optimizes for rapid thumb navigation on mobile screens while delivering structured clinical dashboards on tablets and command displays.

- **Mobile (< 768px):** Single-column stacked fluid layout with strict `1rem` edge margins. Primary controls, triage switches, and interactive steps adhere to a minimum 48px touch target height to prevent erroneous input during emergency procedures.
- **Tablet (768px - 1024px):** 8-column layout with split-screen emergency reference panels and collapsible clinical index trays.
- **Desktop (> 1024px):** 12-column fixed-max layout (`1280px` centered canvas) providing side-by-side procedure documentation, live telemetry/simulators, and reference curricula.
- **Rhythm Rules:** Gap distances between tightly paired components (e.g., vital sign label + input value) map to `space-xs` and `space-sm`. Module margins and distinct diagnostic section separators use `space-lg` and `space-xl`.

## Elevation & Depth

Visual hierarchy uses a refined hybrid of **tonal layers** and **ambient diffuse shadows**, avoiding excessive contrast that strains attention while ensuring cards visibly hover above `#F8FAFC`.

- **Canvas Base:** Flat `#F8FAFC`.
- **Level 1 (Card & Content Surface):** `#FFFFFF` with outline `1px solid #E2E8F0` and subtle ambient drop: `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`.
- **Level 2 (Interactive Modules & Triage Cards):** Used for elevated actionable items and protocol selectors: `box-shadow: 0 4px 6px -1px rgba(26, 58, 92, 0.07), 0 2px 4px -2px rgba(26, 58, 92, 0.05)`.
- **Level 3 (Emergency Modals, Drug Calculators & Overlays):** Used for floating reference drawers, dosage calculator popouts, and urgent confirmation dialogs: `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)` with a backdrop blur (`backdrop-filter: blur(4px)` over `rgba(15, 23, 42, 0.4)`).

## Shapes

The design system maintains a balanced **Rounded (`2`)** curvature strategy that softens clinical intensity while maintaining modern orderliness:
- Standard buttons, badges, chips, and input fields utilize `0.5rem` (8px).
- Educational modules, diagnostic checklist cards, and alert containers utilize `1rem` (16px).
- Floating action sheets, bottom emergency navigation sheets, and modal panels feature `1.5rem` (24px) for upper corners.
- Pill forms (`9999px`) are reserved exclusively for situational tags, user role pills ("Paramedic", "First Responder", "Citizen"), and floating emergency call shortcuts.

## Components

### Buttons
- **Primary CTA (Amber Action):** Background `#F5A623`, text `#0F172A`, font-weight 700. Used for "Start Resuscitation Guide", "Proceed", and active procedure execution. Hover/Press transitions down to `#E09217`.
- **Urgent Secondary (Medical Alert):** Background `#C41E3A`, text `#FFFFFF`. High-visibility emergency actions ("Call Dispatcher", "Critical Vitals Alert").
- **Clinical Primary (Deep Blue):** Background `#1A3A5C`, text `#FFFFFF`. Used for institutional navigation, certification checkpoints, and lesson submissions.
- **Ghost/Tertiary:** Transparent with `#1A3A5C` text and `#E2E8F0` border.

### Cards & Action Modules
- **Standard Card:** Crisp `#FFFFFF` surface, `16px` border-radius, thin `1px solid #E2E8F0` border, `16px` internal padding.
- **Protocol Highlight Card:** Left accent border `4px solid #1A3A5C` (standard) or `4px solid #C41E3A` (critical resuscitation) with matching soft tint (`#EBF3FA` or `#FEE2E2`).

### Chips & Badges
- **Triage Status Badge:** Capsule format (`rounded-full`), `11px` uppercase bold text. Tints: Red (`#FEE2E2` bg / `#C41E3A` text), Amber (`#FEF3C7` bg / `#92400E` text), Ice Blue (`#EBF3FA` bg / `#1A3A5C` text).
- **Interactive Filter Chips:** `#F8FAFC` base with `#E2E8F0` border. Active state toggles into `#1A3A5C` background with white typography.

### Input Fields
- Generous touch heights (`48px` minimum).
- `#FFFFFF` fill, `#E2E8F0` resting border, `#0F172A` value text, and `#475569` floating label text.
- Focus state: `2px solid #1A3A5C` with a soft outer ring: `box-shadow: 0 0 0 3px rgba(26, 58, 92, 0.15)`.

### Lists & Procedure Step Rows
- Separated with hairline borders (`#E2E8F0`).
- Step indicators use a rounded circular badge (`32px x 32px`) in `#EBF3FA` with `#1A3A5C` bold numbering.
- Completed step state converts badge to `#1A3A5C` with a crisp white checkmark icon.

### Checkboxes & Radio Controls
- Minimum `22px x 22px` target with `6px` radius for checkboxes; fully circular for radios.
- Inactive state: `#FFFFFF` fill with `2px solid #CBD5E1`.
- Checked state: `#1A3A5C` fill with white indicator icon.