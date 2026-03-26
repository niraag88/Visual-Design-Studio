import { useParams, Link } from "wouter";
import { products } from "@/data/products";
import { EnquiryCTA } from "@/components/EnquiryCTA";
import { Check } from "lucide-react";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Product not found</h1>
          <Link href="/brand-partners" className="text-primary hover:underline">Explore Brands</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-0 bg-background">
      {/* Product Top Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square bg-muted rounded-3xl overflow-hidden border border-border/50">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.galleryUrls && product.galleryUrls.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.galleryUrls.map((url, i) => (
                  <div key={i} className="aspect-square bg-muted rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary transition-colors">
                    <img src={url} alt={`${product.name} alternate view`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <Link 
              href={`/brands/${product.brandSlug}`} 
              className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 hover:underline block"
            >
              {product.brandSlug.replace('-', ' ')}
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">{product.name}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {product.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-medium uppercase tracking-wider text-foreground mb-3">Available Formats</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <div key={size} className="px-4 py-2 border border-border rounded-lg text-sm bg-card text-foreground">
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <Link 
              href={`/contact?subject=Wholesale Enquiry: ${encodeURIComponent(product.name)}`}
              className="w-full text-center px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-primary transition-colors duration-300 mb-6 block"
            >
              Enquire for Pricing
            </Link>
            
            <p className="text-xs text-muted-foreground text-center">
              Available exclusively for trade professionals and approved stockists.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Specs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl mb-6">About this product</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              {product.description}
            </p>

            <h3 className="font-serif text-2xl mb-6">Key Benefits</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {product.keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <Check size={20} className="text-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-serif text-2xl mb-6">How to Use</h3>
            <p className="text-muted-foreground leading-relaxed mb-10 p-6 bg-muted/30 rounded-xl">
              {product.howToUse}
            </p>
          </div>

          <div>
            <div className="bg-card border border-border rounded-2xl p-8 sticky top-32">
              <div className="mb-8">
                <h4 className="text-sm font-medium uppercase tracking-wider text-foreground mb-3">Key Ingredients</h4>
                <ul className="space-y-2">
                  {product.keyIngredients.map((ing, i) => (
                    <li key={i} className="text-sm text-muted-foreground border-b border-border/50 pb-2 last:border-0">{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-medium uppercase tracking-wider text-foreground mb-3">Sensory Profile</h4>
                <p className="text-sm text-muted-foreground italic">
                  "{product.sensoryNotes}"
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-foreground mb-3">Suitable For</h4>
                <p className="text-sm text-muted-foreground">
                  {product.suitableFor}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why We Love It */}
      <section className="bg-secondary/10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-6 text-foreground">Why Zest Loves It</h2>
          <p className="text-xl italic text-muted-foreground leading-relaxed">
            "{product.whyWeLoveIt}"
          </p>
        </div>
      </section>

      <EnquiryCTA context={`Product: ${product.name}`} />
    </div>
  );
}
