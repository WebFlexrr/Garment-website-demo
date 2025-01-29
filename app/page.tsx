import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationMenu } from "./components/navigation-menu"
import { ProductGrid } from "./components/product-grid"
import { PromoBanner } from "./components/promo-banner"
import { CategoryShowcase } from "./components/category-showcase"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-black">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bolt%20versin-Ta5xiU8TRBPSNKTH2QjEZvKGq0BSf6.png"
          alt="Elegant traditional blouse"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-xl text-white space-y-6">
              <h1 className="text-5xl font-serif">Discover Timeless Elegance in Traditional Blouses</h1>
              <p className="text-lg opacity-90">Handcrafted pieces that blend heritage with contemporary style</p>
              <Button size="lg" className="bg-[#8B1B2C] hover:bg-[#6B1522] text-white">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <PromoBanner image="/placeholder.svg?height=200&width=300" title="FESTIVE SALE" subtitle="Up to 70% Off" />
        <PromoBanner
          image="/placeholder.svg?height=200&width=300"
          title="NEW ARRIVALS"
          subtitle="Designer Collection"
        />
        <PromoBanner image="/placeholder.svg?height=200&width=300" title="WEDDING SEASON" subtitle="Special Edition" />
      </section>

      {/* Navigation Categories */}
      <NavigationMenu />

      {/* Category Showcase */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Enhance Your Style</h2>
          <CategoryShowcase />
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Find Your Perfect Blouse</h2>
          <p className="text-muted-foreground">Discover our curated collection of traditional and designer blouses</p>
        </div>
        <ProductGrid />
      </section>
    </main>
  )
}

