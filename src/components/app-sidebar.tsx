"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderOpen, Home, Settings, BookOpen, LogOut } from "lucide-react";
import type { User } from "@supabase/supabase-js";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signOut } from "@/app/actions";

const navigationItems = [
  { title: "Overview", href: "/", icon: Home },
  { title: "Projects", href: "/projects", icon: FolderOpen },
  { title: "Settings", href: "/settings", icon: Settings },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AppSidebar({ user }: { user: User | null }) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/80 px-3 py-3 shadow-sm backdrop-blur">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <BookOpen className="size-5" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight">
              ITDEV-164
            </p>
            <p className="truncate text-xs text-muted-foreground">
              Dashboard workspace
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map(({ title, href, icon: Icon }) => {
                const active = isActivePath(pathname, href);

                return (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild isActive={active} tooltip={title}>
                      <Link href={href} className={cn(active && "font-medium")}>
                        <Icon />
                        <span>{title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter>
        {user ? (
          <div className="space-y-3">
            <div className="rounded-xl border border-border/60 bg-card/80 px-3 py-3 shadow-sm backdrop-blur">
              <p className="truncate text-xs font-medium text-foreground">
                {user.email}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                Signed in
              </p>
            </div>
            <form action={signOut} className="w-full">
              <Button
                type="submit"
                variant="outline"
                className="w-full justify-start gap-2"
                size="sm"
              >
                <LogOut className="size-4" />
                <span>Sign Out</span>
              </Button>
            </form>
          </div>
        ) : (
          <div className="rounded-xl border border-border/60 bg-card/80 px-3 py-3 text-xs text-muted-foreground shadow-sm backdrop-blur">
            Collapse the rail for a compact workspace.
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}