"use server"

import { projectSchema, type Project } from "@/lib/schemas"
import { supabase } from "@/lib/supabase"

export async function createProject(data: unknown) {
  // Server-side validation with Zod — never trust client-side validation alone
  const validationResult = projectSchema.safeParse(data)

  if (!validationResult.success) {
    // Format Zod validation errors into a readable message
    const errors = validationResult.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("; ")
    
    return {
      error: `Validation failed: ${errors}`,
      data: null,
    }
  }

  const validatedData = validationResult.data

  try {
    // Insert into Supabase
    const { data: insertedData, error } = await supabase
      .from("projects")
      .insert([validatedData])
      .select()

    if (error) {
      return {
        error: `Failed to create project: ${error.message}`,
        data: null,
      }
    }

    return {
      error: null,
      data: insertedData,
    }
  } catch (error) {
    // Handle unexpected database errors
    const message = error instanceof Error ? error.message : "An unexpected error occurred"
    return {
      error: message,
      data: null,
    }
  }
}
