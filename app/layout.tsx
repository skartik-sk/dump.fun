import Link from "next/link"
import { Button } from "@/components/ui/button"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-100 p-4 mb-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Coin Platform
            </Link>
            <Link href="/add-coin">
              <Button>Add New Coin</Button>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

