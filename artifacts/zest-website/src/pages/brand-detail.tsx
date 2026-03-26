import { useParams, Link } from "wouter";
import { brands } from "@/data/brands";
import { getProductsByBrand } from "@/data/products";
import { ProductCard } from "@/components/Cards";
import { EnquiryCTA } from "@/components/EnquiryCTA";

export default function BrandDetail() {
  const { slug } = useParams();
  const brand = brands.find(b => b.slug === slug);
  const brandProducts = brand ? getProductsByBrand(brand.slug) : [];

  if (!brand) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Brand not found</h1>
          <Link href="/brand-partners" className="text-primary hover:underline">Return to Brands</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-0">
      {/* Brand Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img src={brand.imageUrl} alt={brand.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pb-16 w-full">
          <div className="max-w-3xl">
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              {brand.category}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 text-foreground">{brand.name}</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              {brand.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story & Why Zest */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl mb-6">The Story</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {brand.story}
              </p>
            </div>
            <div className="bg-muted/30 p-10 rounded-2xl border border-border/50">
              <h2 className="font-serif text-3xl mb-6">Why Zest Chose {brand.name}</h2>
              <p className="text-foreground leading-relaxed text-lg italic">
                "{brand.whyZestChose}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Products Grid */}
      {brandProducts.length > 0 && (
        <section className="py-20 bg-muted/10 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-3xl mb-12">Discover the Range</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {brandProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <EnquiryCTA 
        context={`Brand: ${brand.name}`}
        title={`Interested in stocking ${brand.name}?`} 
        text="Contact us to discuss wholesale pricing, professional sizes, and retail display options." 
      />
    </div>
  );
}
