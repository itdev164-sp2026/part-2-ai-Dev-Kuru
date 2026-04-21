# AI Agent Instructions — ITDEV-164 Course Project

You are assisting a student building an AI-native full-stack web application.

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + Shadcn/ui
- **Icons:** Lucide React
- **Backend/Auth:** Supabase (added in later assignments)

## Architecture Rules

1. **Prefer React Server Components (RSC).** Only add `"use client"` when the component requires browser APIs, event handlers, or hooks (`useState`, `useEffect`, etc.).
2. **Use Tailwind utility classes for all styling.** Do not create CSS modules or use inline `style` objects.
3. **Use the `cn()` helper** from `@/lib/utils` when merging conditional class names.
4. **Follow the path alias.** Import from `@/components`, `@/lib`, etc. — never use relative paths like `../../`.

## Folder Structure

```
src/
├── app/            # Routes and layouts (App Router)
│   ├── layout.tsx  # Root layout
│   ├── page.tsx    # Home page
│   └── globals.css # Tailwind directives and theme tokens
├── components/     # Reusable UI components
└── lib/            # Utilities and shared logic
```

## Code Style

- Name component files in **kebab-case** (e.g., `mode-toggle.tsx`).
- Export components as **named exports** (not default), except for page/layout files.
- Keep components small and composable.
- Use `Lucide React` for all icons — do not install other icon libraries.

## When Generating Code

- Always include proper TypeScript types — avoid `any`.
- Validate data at system boundaries using **Zod** schemas (added in Assignment 4).
- Write self-documenting code. Only add comments where the logic is non-obvious.



### Prompt 1

**What I asked:**

> Using the Supabase client at src/lib/supabase.ts, create a new Server Component
at src/app/projects/page.tsx that:

1. Fetches all records from the "projects" table in Supabase
2. Displays them in a professional layout using shadcn/ui Card components
   (run `npx shadcn@latest add card` if needed)
3. Each card should show the project title, description, and a status badge
4. The status badge should be color-coded:
   - "active" = green
   - "completed" = blue
   - "archived" = gray

Use @workspace context to match the styling of our existing Dashboard.
This must be a React Server Component (async function, no "use client").
Do NOT use useEffect or useState for data fetching.

**What happened:**

> the Agent created a Server Component and Client Component successfully?
> it created an  async function but did not implement any await or useEffect functions?
> during this prompt i did not have to follow up with any corrections

### Prompt 2

**What I asked:**

> The breadcrumb in src/app/layout.tsx always shows "Overview" because the page
name is hardcoded. Extract the breadcrumb into its own client component at
src/components/breadcrumb-nav.tsx that uses usePathname() from next/navigation
to display the correct page name. Map "/" to "Overview", "/projects" to
"Projects", and "/settings" to "Settings". Keep "ITDEV-164" as the first
breadcrumb segment. Then update layout.tsx to use the new component.


**What happened:**

> The agent extracted the breadcrumb into its own client component at
src/components/breadcrumb-nav.tsx that uses usePathname() from next/navigation
to display the correct page name

### Reflection

> How does fetching data on the server feel different from the useEffect 
> pattern you used in Web Programming 1? What are the advantages you
> noticed? Did anything surprise you about how simple server-side
it feels a lot more smoother with there not being a need to reset the server to update
information on the page.