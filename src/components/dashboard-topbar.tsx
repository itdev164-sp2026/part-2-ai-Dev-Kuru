"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardTopbar({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {

  return (
    <div className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6 lg:px-8">
        <SidebarTrigger className="shrink-0" />

        <div className="min-w-0 flex-1">{children}</div>

        <ModeToggle />
      </div>
    </div>
  );
}