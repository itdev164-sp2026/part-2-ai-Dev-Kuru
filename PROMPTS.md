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

