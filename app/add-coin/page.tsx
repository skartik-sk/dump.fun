import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

async function addCoin(formData: FormData) {
  "use server"

  // In a real application, you would save this data to a database
  const name = formData.get("name")
  const icon = formData.get("icon")
  const totalSupply = formData.get("totalSupply")

  console.log("New coin added:", { name, icon, totalSupply })

  // Redirect to the homepage after adding the coin
  redirect("/")
}

export default function AddCoinPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Coin</h1>
      <form action={addCoin} className="space-y-4">
        <div>
          <Label htmlFor="name">Coin Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="icon">Icon URL</Label>
          <Input id="icon" name="icon" type="url" required />
        </div>
        <div>
          <Label htmlFor="totalSupply">Total Supply</Label>
          <Input id="totalSupply" name="totalSupply" type="number" required />
        </div>
        <Button type="submit">Add Coin</Button>
      </form>
    </div>
  )
}

