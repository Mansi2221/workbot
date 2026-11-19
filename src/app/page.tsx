import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex max-w-xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">WorkBot</h1>
        <p className="text-lg text-muted-foreground">
          Your AI-powered workspace assistant. Automate tasks, track projects,
          and ship faster.
        </p>
        <div className="flex gap-4">
          <Link href="/settings" className={buttonVariants()}>
            Settings
          </Link>
          <Link
            href="/api/health"
            className={buttonVariants({ variant: "outline" })}
          >
            Health Check
          </Link>
        </div>
      </main>
    </div>
  );
}
