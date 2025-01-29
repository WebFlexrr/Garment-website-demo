import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface PromoBannerProps {
  image: string
  title: string
  subtitle: string
}

export function PromoBanner({ image, title, subtitle }: PromoBannerProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0 relative">
        <Image src={image || "/placeholder.svg"} alt={title} width={400} height={200} className="w-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm opacity-90">{subtitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

