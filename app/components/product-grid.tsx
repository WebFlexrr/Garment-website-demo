import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Bridal Silk Blouse",
    price: "₹4,999",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "Designer Velvet Blouse",
    price: "₹3,499",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Embroidered Net Blouse",
    price: "₹2,999",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "Traditional Zari Work",
    price: "₹5,999",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group cursor-pointer overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[3/4]">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-lg font-semibold text-[#8B1B2C]">{product.price}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

