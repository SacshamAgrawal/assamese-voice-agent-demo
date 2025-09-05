import { headers } from "next/headers";
import { getAppConfig } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const hdrs = await headers();
  await getAppConfig(hdrs);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 hidden w-full flex-row justify-center p-6 md:flex">
        <span className="text-foreground font-mono text-lg font-bold tracking-wider uppercase">
          Pathnovo Solutions
        </span>
      </header>
      {children}
    </>
  );
}
