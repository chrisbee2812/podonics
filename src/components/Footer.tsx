import Link from "next/link"


export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <img src="icon-small.png" className="h-8 w-auto text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Podonics. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-16 text-lg font-medium transition-colors text-muted-foreground">
            <Link className="hover:text-primary hover:underline" href="/product">Product</Link>
            <Link className="hover:text-primary hover:underline" href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
