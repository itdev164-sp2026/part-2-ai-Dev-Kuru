"use server"

import { redirect } from "next/navigation"
import { projectSchema, type Project } from "@/lib/schemas"
import { createSupabaseServerClient } from "@/lib/supabase"

export async function signIn({ email, password }: { email: string; password: string }) {
  const supabase = await createSupabaseServerClient()

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return {
        error: error.message,
      }
    }

    return { error: null }
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred"
    return {
      error: message,
    }
  }
}

export async function signUp({ email, password }: { email: string; password: string }) {
  const supabase = await createSupabaseServerClient()

  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      return {
        error: error.message,
      }
    }

    return { error: null }
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred"
    return {
      error: message,
    }
  }
}

export async function signOut() {
  const supabase = await createSupabaseServerClient()

  try {
    await supabase.auth.signOut()
  } catch (error) {
    console.error("Sign out error:", error)
  }

  redirect("/login")
}

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
  const supabase = await createSupabaseServerClient()

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
