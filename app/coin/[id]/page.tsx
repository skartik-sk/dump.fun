import { Button } from "@/components/ui/button"

// This would typically come from a database based on the ID
const getCoin = (id: string) => ({
  id,
  name: "Example Coin",
  icon: "/placeholder.svg?height=100&width=100",
  totalSupply: 1000000,
  currentPrice: 100,
})

export default function CoinPage({ params }: { params: { id: string } }) {
  const coin = getCoin(params.id)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{coin.name}</h1>
      <img src={coin.icon || "/placeholder.svg"} alt={coin.name} className="w-24 h-24 mb-4" />
      <p className="mb-2">Total Supply: {coin.totalSupply}</p>
      <p className="mb-4">Current Price: ${coin.currentPrice}</p>
      <div className="space-x-4">
        <Button onClick={() => alert("Buy functionality not implemented")}>Buy</Button>
        <Button onClick={() => alert("Sell functionality not implemented")}>Sell</Button>
      </div>
    </div>
  )
}

