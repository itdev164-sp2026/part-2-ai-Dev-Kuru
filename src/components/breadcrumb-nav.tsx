"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const breadcrumbLabels: Record<string, string> = {
  "/": "Overview",
  "/projects": "Projects",
  "/settings": "Settings",
};

function getPageLabel(pathname: string) {
  return breadcrumbLabels[pathname] ?? "Overview";
}

export function BreadcrumbNav() {
  const pathname = usePathname();
  const currentLabel = getPageLabel(pathname);
  const isOverview = pathname === "/";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {isOverview ? (
          <BreadcrumbItem>
            <BreadcrumbPage className="inline-flex items-center gap-2">
              <Home className="size-4" />
              ITDEV-164
            </BreadcrumbPage>
          </BreadcrumbItem>
        ) : (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="inline-flex items-center gap-2">
                  <Home className="size-4" />
                  ITDEV-164
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
  );
}