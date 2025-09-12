import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import "./globals.css"

import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Podonics SafeTPen Hub",
  description: "The official hub for the Podonics SafeTPen",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased"
        )}
      >
        <ThemeProvider defaultTheme="system">
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <div className="container py-8">
                    {children}
                </div>
              </main>
              <Footer />
            </div>
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
