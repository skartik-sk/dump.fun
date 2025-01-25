import Link from "next/link"
import { Button } from "@/components/ui/button"

// This would typically come from a database
const coins = [
  { id: 1, name: "Bitcoin", icon: "/placeholder.svg?height=50&width=50" },
  { id: 2, name: "Ethereum", icon: "/placeholder.svg?height=50&width=50" },
  { id: 3, name: "Dogecoin", icon: "/placeholder.svg?height=50&width=50" },
]

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Coin Platform</h1>
      <Link href="/add-coin">
        <Button className="mb-4">Add New Coin</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <Link key={coin.id} href={`/coin/${coin.id}`} className="block">
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <img src={coin.icon || "/placeholder.svg"} alt={coin.name} className="w-12 h-12 mb-2" />
              <h2 className="font-semibold">{coin.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

