import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import "./globals.css"

import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Podonics Safe-T-Pen Hub",
  description: "The official hub for the Podonics Safe-T-Pen",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
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
