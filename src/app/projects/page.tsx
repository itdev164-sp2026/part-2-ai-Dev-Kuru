import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

type ProjectRecord = {
  id: string | number
  title: string | null
  description: string | null
  status: string | null
}

function getStatusStyles(status: string | null) {
  switch (status?.toLowerCase()) {
    case "active":
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
    case "completed":
      return "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-300"
    case "archived":
      return "border-border bg-muted text-muted-foreground"
    default:
      return "border-border bg-muted text-muted-foreground"
  }
}

export default async function ProjectsPage() {
  const { data, error } = await supabase
    .from("projects")
    .select("id, title, description, status")
    .order("id", { ascending: false })

  const projects = (data ?? []) as ProjectRecord[]

  if (error) {
    return (
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="max-w-2xl text-muted-foreground">
            Live project records from Supabase appear here.
          </p>
        </div>

        <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-6 text-sm text-destructive">
          Unable to load projects from Supabase: {error.message}
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="max-w-2xl text-muted-foreground">
          A current view of all project records stored in Supabase.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((project) => {
            const status = project.status?.toLowerCase() ?? "unknown"

            return (
              <Card
                key={project.id}
                className="h-full bg-card/90 shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="border-b border-border/60">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 space-y-1">
                      <CardTitle className="truncate text-lg">
                        {project.title ?? "Untitled Project"}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {project.description ?? "No description provided."}
                      </CardDescription>
                    </div>

                    <span
                      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] ${getStatusStyles(project.status)}`}
                    >
                      {status}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.description ?? "No project description was provided for this record."}
                  </p>
                </CardContent>
              </Card>
            )
          })
        ) : (
          <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground shadow-sm">
            No projects were found in the Supabase table.
          </div>
        )}
      </div>
    </section>
  )
}