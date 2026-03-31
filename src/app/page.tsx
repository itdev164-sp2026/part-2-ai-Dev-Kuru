import { Code2, Cpu, Database, GitBranch, Sparkles, Terminal } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Sparkles },
  { name: "Next.js", icon: Terminal },
  { name: "Tailwind CSS", icon: GitBranch },
  { name: "Supabase", icon: Database },
  { name: "CI/CD", icon: Cpu },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Developer Profile</h1>
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold">Marquis</h2>
          <p className="mt-2 text-sm text-muted-foreground">Bio: Pending</p>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-semibold">Skills</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
