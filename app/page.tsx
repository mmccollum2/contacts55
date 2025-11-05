import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-card flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-pretty">MyRolodex</h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
            Your contacts, synced privately across every device.
          </p>
        </div>

        <div className="pt-6">
          <Link href="/login">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Admin Login
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold text-foreground mb-2">Private & Secure</h3>
            <p className="text-sm text-muted-foreground">Your data stays encrypted and private</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-2xl mb-2">🔄</div>
            <h3 className="font-semibold text-foreground mb-2">Always Synced</h3>
            <p className="text-sm text-muted-foreground">Real-time synchronization across devices</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Instant search and organization</p>
          </div>
        </div>
      </div>
    </main>
  )
}
