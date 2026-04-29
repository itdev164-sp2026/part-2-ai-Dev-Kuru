import { ProjectForm } from "@/components/project-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewProjectPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Create Project</h1>
        <p className="max-w-2xl text-muted-foreground">
          Add a new project to your collection. Fill in the details below to get started.
        </p>
      </div>

      <Card className="bg-card/90 shadow-sm">
        <CardHeader className="border-b border-border/60">
          <CardTitle>New Project Details</CardTitle>
          <CardDescription>
            Provide the project information. All fields are required.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ProjectForm />
        </CardContent>
      </Card>
    </section>
  )
}
