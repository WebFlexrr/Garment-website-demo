import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Wedding Collection",
    image: "/placeholder.svg?height=400&width=300",
    price: "From ₹3,999",
  },
  {
    id: 2,
    name: "Party Wear",
    image: "/placeholder.svg?height=400&width=300",
    price: "From ₹2,499",
  },
  {
    id: 3,
    name: "Designer Collection",
    image: "/placeholder.svg?height=400&width=300",
    price: "From ₹4,999",
  },
  {
    id: 4,
    name: "Traditional Collection",
    image: "/placeholder.svg?height=400&width=300",
    price: "From ₹1,999",
  },
]

export function CategoryShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Card key={category.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[3/4]">
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-serif text-lg">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.price}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

