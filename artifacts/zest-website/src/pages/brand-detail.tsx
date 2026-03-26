import { useParams, Link } from "wouter";
import { brands } from "@/data/brands";
import { getProductsByBrand } from "@/data/products";
import { ProductCard } from "@/components/Cards";
import { EnquiryCTA } from "@/components/EnquiryCTA";

const fallbackImage = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80';

export default function BrandDetail() {
  const { slug } = useParams();
  const brand = brands.find(b => b.slug === slug);
  const brandProducts = brand ? getProductsByBrand(brand.slug) : [];

  if (!brand) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center pt-24 bg-background">
        <div className="text-center">
          <h1 className="font-serif text-5xl mb-6">Brand not found</h1>
          <Link href="/brand-partners" className="text-primary font-bold tracking-widest uppercase text-sm hover:underline">Return to Brands</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-0 bg-background">
      {/* Brand Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={brand.imageUrl} 
            alt={brand.name} 
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10 pb-20 w-full">
          <div className="max-w-4xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 backdrop-blur text-primary text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
              {brand.category}
            </span>
            <h1 className="font-serif text-6xl md:text-8xl mb-8 text-foreground leading-tight">{brand.name}</h1>
            <p className="text-2xl text-foreground/90 leading-relaxed font-serif italic">
              {brand.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story & Why Zest */}
      <section className="py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">The Heritage</span>
              <h2 className="font-serif text-5xl mb-8">The Story</h2>
              <p className="text-muted-foreground leading-relaxed text-xl">
                {brand.story}
              </p>
            </div>
            <div className="bg-zest-yellow p-12 md:p-16 rounded-3xl border border-border relative">
              <div className="absolute top-8 right-8 text-primary/20 text-7xl font-serif">"</div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Our Curation</span>
              <h2 className="font-serif text-4xl mb-8">Why Zest Chose {brand.name}</h2>
              <p className="text-foreground leading-relaxed text-2xl font-serif italic relative z-10">
                {brand.whyZestChose}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Products Grid */}
      {brandProducts.length > 0 && (
        <section className="py-32 bg-muted/30 border-t border-border">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Product Range</span>
              <h2 className="font-serif text-5xl md:text-6xl mb-6">Discover the Collection</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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