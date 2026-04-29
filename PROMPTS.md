# Prompting Log — ITDEV-164

## Activity 1: The AI-Native Launchpad

### Prompt 1
**What I asked:**
> Look at my project structure and tell me:

What framework and version am I using?
What styling solution is configured?
What components exist so far?
Then add a small "Setup verified ✓" badge to the bottom of the home page

**What happened:**
> (Describe what the Agent did. Did it understand your intent immediately?
> Did it create the right files? Were there any errors?)

The agent properly explained the my framework version, the styling configuration 
and added the verification badge as requested 
### Prompt 2
**What I asked:**
> Look at the existing src/app/page.tsx and src/app/layout.tsx in this project.
Replace the current homepage content with a "Developer Profile" page for me.
It should include:

My name: Marquis
A bio (just put "Pending" for now)
A "Skills" section that displays at least 6 skills in a responsive
Tailwind CSS grid (use cards with icons from lucide-react)
Keep the existing Header component and layout structure intact.
If you need to create new components, go ahead and create them in
the src/components/ folder.

**What happened:**
> The agent properly replaced the hompage content with a dev profile 
which contained the requested bio,skills,styled grid and the maintaining of 
the header component and layout that was there previously  

### Reflection
I feel like using an AI assistant makes me more productive and makes the coding 
"Cleaner" for lack of a better word. from my brief experience with the agent (not copilot)
i find it does whats asked of it as long as the prompt is clear.



## Activity 2: Building the Dashboard Shell

### Prompt 1

**What I asked:**

> Using the shadcn sidebar components that are now in my src/components/ui/ folder,
create a professional, collapsible dashboard layout. It should include:

1. A sidebar (src/components/app-sidebar.tsx) with navigation links for:
   - Overview (use the Home icon from lucide-react)
   - Projects (use the FolderOpen icon)
   - Settings (use the Settings icon)

2. A top navigation area with breadcrumbs showing the current page.

3. A main content area that wraps the existing page content.

4. Update src/app/layout.tsx to use the new SidebarProvider and sidebar layout.

Important: Preserve the Developer Profile content from Activity 1 in
src/app/page.tsx — it should appear in the main content area of the new layout.
Keep the dark mode toggle working.

**What happened:**

> the agent added app-sidebar.tsx with the Overview, Projects, and Settings navigation, dashboard-topbar.tsx for route-aware breadcrumbs and the theme toggle. It also added placeholder pages for page.tsx and page.tsx 

> app-sidebar.tsx was implemented correctly, modifying layout.tsx as expected without any need for intervention

### Reflection

> Did the Agent accidentally delete or overwrite any of your Activity 1
> code? If so, how did you recover? (Copilot Edits has an "Undo" /
> "Revert" button — did you use it?) What did you learn about giving
# Prompting Log — ITDEV-164

## Activity 1: The AI-Native Launchpad

### Prompt 1
What I asked:

> Look at my project structure and tell me:

- What framework and version am I using?
- What styling solution is configured?
- What components exist so far?
- Then add a small “Setup verified ✓” badge to the bottom of the home page.

What happened:

The agent identified the framework version and the styling configuration, and added the requested verification badge to the home page.

### Prompt 2
What I asked:

> Look at the existing `src/app/page.tsx` and `src/app/layout.tsx` in this project. Replace the current homepage content with a “Developer Profile” page for me. It should include:

- My name: Marquis
- A bio (use “Pending” for now)
- A “Skills” section that displays at least six skills in a responsive Tailwind CSS grid (use cards with icons from lucide-react)
- Keep the existing Header component and layout structure intact.
- If you need to create new components, add them in `src/components/`.

What happened:

The agent replaced the homepage content with a Developer Profile that includes the requested bio, a responsive skills grid, and preserves the existing header and layout.

### Reflection

Using an AI assistant improved my productivity and helped keep the code cleaner. In my experience, the agent follows clear prompts well and preserves existing content when asked.

## Activity 2: Building the Dashboard Shell

### Prompt 1

What I asked:

> Using the shadcn sidebar components in `src/components/ui/`, create a professional, collapsible dashboard layout that includes:

1. A sidebar (`src/components/app-sidebar.tsx`) with navigation links for:
   - Overview (Home icon, lucide-react)
   - Projects (FolderOpen icon)
   - Settings (Settings icon)

2. A top navigation area with breadcrumbs showing the current page.
3. A main content area that wraps the existing page content.
4. Update `src/app/layout.tsx` to use the new `SidebarProvider` and the sidebar layout.

Important: Preserve the Developer Profile content from Activity 1 in `src/app/page.tsx` and keep the dark mode toggle working.

What happened:

The agent implemented `app-sidebar.tsx` with Overview, Projects, and Settings navigation, added `dashboard-topbar.tsx` for route-aware breadcrumbs and the theme toggle, and updated `layout.tsx` to use the new sidebar provider. Placeholder pages were added where needed.

### Reflection

The agent did not overwrite the Activity 1 content. I learned that providing clear, detailed prompts helps the agent preserve existing code and avoid unintended changes.

## Activity 4: AI-Driven Forms & Validation

### Prompt 1

What I asked:

> Create a Zod validation schema in `src/lib/schemas.ts` for a `Project` with these fields:

- `title`: string, minimum 3 characters; error message: “Title must be at least 3 characters”
- `description`: string, minimum 10 characters; error message: “Description must be at least 10 characters”
- `status`: enum with values `"active"`, `"completed"`, `"archived"`

What happened:

The agent created the schema with the required fields and validation rules.

### Prompt 2

What I asked:

> Using the Zod schema from `src/lib/schemas.ts`, do the following:

1. Create a client form component at `src/components/project-form.tsx` using `react-hook-form` and `zodResolver`, shadcn/ui fields, `Input` for title, `Textarea` for description, and `Select` for status; show inline error messages and a “Create Project” submit button; show a sonner toast on success.

2. Create a server action at `src/app/actions.ts` that uses `use server`, validates data server-side with Zod, inserts into the Supabase `projects` table, and returns a success/error response.

3. Create a page at `src/app/projects/new/page.tsx` rendering the project form within the dashboard layout.

4. Add a “New Project” button to `src/app/projects/page.tsx` linking to `/projects/new`.

What happened:

The agent created the form component, server action, and new page, and added the New Project button. Initially, server-side Zod validation was missing and required a follow-up.

### Prompt 3 (follow-up)

What I asked:

> Ensure the server action validates the form data with the Zod schema before inserting into Supabase. Use `projectSchema.safeParse()` and return an error if validation fails.

What happened:

The agent updated the server action to use `safeParse()`, formatted Zod issues into readable messages, and enforced server-side validation before database insertion.

