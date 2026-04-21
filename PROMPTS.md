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
> the Agent context about existing code you want to preserve?

> during this activity the agent did not accidentally delete= or overwrite any information it was not asked to from activity one, i did not need to use any recover features as a resualt. i have noticed that as long as prompts are descriptive and full of context the AI preserves most content.