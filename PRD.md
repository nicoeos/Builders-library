# Product Requirements Document (PRD)
## Project: DOC_OSC* Startup Resource Directory

### 1. Executive Summary
**DOC_OSC*** is a curated, high-performance web directory designed for startup founders, developers, and designers. It lists essential tools, services, and platforms—ranging from funding (Y Combinator) to design (Figma) and infrastructure (Vercel, Supabase). 

The product differentiates itself through a distinct "brutalist/utilitarian" aesthetic, prioritizing information density, speed, and a unique visual identity over generic SaaS design patterns.

### 2. Objectives & Goals
*   **Primary Goal:** Provide a centralized, easily navigable list of high-quality resources for building startups.
*   **Secondary Goal:** Establish a strong visual brand identity through a custom design system (Olive/Dark Brown theme, large typography).
*   **User Experience:** ensure zero-latency filtering and smooth, high-end micro-interactions (hover states, entrance animations).

### 3. Target Audience
*   **Early-stage Founders:** Looking for incorporation, banking, and funding resources.
*   **Builders (Devs/Designers):** Seeking the best-in-class stack (Linear, Supabase, Tailwind, etc.).
*   **Product Managers:** Discovering productivity and analytics tools.

### 4. Core Features

#### 4.1. Resource Directory
*   **Display:** A structured table/grid view displaying:
    *   Index Number (001, 002...)
    *   Name (e.g., Linear, Figma)
    *   Category (e.g., Productivity, Design)
    *   Description (Short, high-level summary)
    *   External Link (opens in new tab)
*   **Data Source:** Currently a static client-side constant (`RESOURCES` array).

#### 4.2. Filtering & Navigation
*   **Category Filter:** Users can filter the list by specific categories (e.g., Funding, Legal, Design, AI).
*   **"All" View:** Default view showing all resources.
*   **Counters:** Dynamic display of the number of items currently visible.

#### 4.3. Visual & Interactive Design
*   **Theme:** 
    *   Background: Olive Green (`#8f914f`)
    *   Text: Dark Brown/Black (`#2b291a`)
    *   Accents: Hover states use inverted or highlighted text colors.
*   **Typography:** Mix of sans-serif for body and large, bold, uppercase fonts for headers. Monospace for data/numbers.
*   **Animations:** 
    *   `motion/react` used for staggered list entry animations.
    *   `AnimatePresence` for smooth filtering transitions.
    *   Mouse hover effects: Background sweep, arrow rotation, text color shift.
*   **Utilities:**
    *   Real-time Clock (HH:MM:SS).
    *   Current Date display.

### 5. Technical Architecture
*   **Frontend Framework:** React (Vite)
*   **Styling:** Tailwind CSS v4.0
*   **Animation:** Motion (formerly Framer Motion)
*   **Icons:** Lucide React
*   **Routing:** Single Page Application (currently within `App.tsx`).
*   **Deployment:** Static hosting (Vercel/Netlify compatible).

### 6. User Interface Requirements
*   **Responsiveness:**
    *   **Desktop:** Full grid layout with detailed columns (Name, Category, Description, Link).
    *   **Mobile:** Condensed layout (hidden description/category columns), larger touch targets, stacked header.
*   **Accessibility:**
    *   High contrast text ratios (Theme colors are compliant).
    *   Semantic HTML structure.
    *   Focus states for keyboard navigation.

### 7. Future Roadmap (Post-MVP)
*   **Search Functionality:** Real-time text search for resource names.
*   **Backend Integration:** Connect to Supabase to allow dynamic fetching of resources.
*   **User Submissions:** Form for users to suggest new tools.
*   **Dark/Light Mode Toggle:** Alternative color schemes.
*   **Detail View:** dedicated page for each resource with more in-depth reviews or usage tips.

### 8. Success Metrics
*   **Engagement:** Click-through rate to external resources.
*   **Retention:** Return visitors using the site as a bookmark.
*   **Performance:** Lighthouse score > 95 for Performance and Accessibility.
