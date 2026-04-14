"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";

const breadcrumbLabels: Record<string, string> = {
  "/": "Overview",
  "/projects": "Projects",
  "/settings": "Settings",
};

function getCurrentLabel(pathname: string) {
  if (breadcrumbLabels[pathname]) {
    return breadcrumbLabels[pathname];
  }

  const firstSegment = pathname.split("/")[1];

  return firstSegment
    ? firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1)
    : "Overview";
}

export function DashboardTopbar() {
  const pathname = usePathname();
  const currentLabel = getCurrentLabel(pathname);
  const isOverview = pathname === "/";

  return (
    <div className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6 lg:px-8">
        <SidebarTrigger className="shrink-0" />

        <div className="min-w-0 flex-1">
          <Breadcrumb>
            <BreadcrumbList>
              {isOverview ? (
                <BreadcrumbItem>
                  <BreadcrumbPage className="inline-flex items-center gap-2">
                    <Home className="size-4" />
                    {currentLabel}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/" className="inline-flex items-center gap-2">
                        <Home className="size-4" />
                        Overview
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{currentLabel}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <ModeToggle />
      </div>
    </div>
  );
}