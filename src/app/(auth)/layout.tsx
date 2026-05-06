import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | ITDEV-164",
  description: "Sign in to your ITDEV-164 Dashboard",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
