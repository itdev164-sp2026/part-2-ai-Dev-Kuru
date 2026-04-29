"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { projectSchema, type Project } from "@/lib/schemas"
import { createProject } from "@/app/actions"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export function ProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<Project>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "active",
    },
  })

  const statusValue = watch("status")

  const onSubmit = async (data: Project) => {
    setIsSubmitting(true)
    try {
      const result = await createProject(data)

      if (result.error) {
        toast.error(result.error)
        return
      }

      toast.success("Project created successfully!")
      // Reset form after success
    } catch (error) {
      const message = error instanceof Error ? error.message : "An error occurred"
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Title Field */}
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Title
        </Label>
        <Input
          id="title"
          placeholder="Enter project title"
          {...register("title")}
          className={cn(
            "transition-colors",
            errors.title && "border-destructive focus-visible:ring-destructive"
          )}
          disabled={isSubmitting}
        />
        {errors.title && (
          <p className="text-xs text-destructive">{errors.title.message}</p>
        )}
      </div>

      {/* Description Field */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Enter project description"
          {...register("description")}
          className={cn(
            "min-h-[100px] transition-colors",
            errors.description && "border-destructive focus-visible:ring-destructive"
          )}
          disabled={isSubmitting}
        />
        {errors.description && (
          <p className="text-xs text-destructive">{errors.description.message}</p>
        )}
      </div>

      {/* Status Field */}
      <div className="space-y-2">
        <Label htmlFor="status" className="text-sm font-medium">
          Status
        </Label>
        <Select value={statusValue} onValueChange={(value) => setValue("status", value as any)}>
          <SelectTrigger
            id="status"
            className={cn(
              "transition-colors",
              errors.status && "border-destructive focus-visible:ring-destructive"
            )}
            disabled={isSubmitting}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
        {errors.status && (
          <p className="text-xs text-destructive">{errors.status.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full transition-opacity"
      >
        {isSubmitting ? "Creating..." : "Create Project"}
      </Button>
    </form>
  )
}
