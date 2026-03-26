import { useParams, Link } from "wouter";
import { products } from "@/data/products";
import { EnquiryCTA } from "@/components/EnquiryCTA";
import { Check } from "lucide-react";

const fallbackImage = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center pt-24 bg-background">
        <div className="text-center">
          <h1 className="font-serif text-5xl mb-6">Product not found</h1>
          <Link href="/brand-partners" className="text-primary font-bold tracking-widest uppercase text-sm hover:underline">Explore Brands</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-0 bg-background">
      {/* Product Top Section */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[4/5] bg-card rounded-3xl overflow-hidden border border-border shadow-sm">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                className="w-full h-full object-cover" 
              />
            </div>
            {product.galleryUrls && product.galleryUrls.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.galleryUrls.map((url, i) => (
                  <div key={i} className="aspect-square bg-card rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary hover:shadow-md transition-all">
                    <img 
                      src={url} 
                      alt={`${product.name} alternate view`} 
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center py-8">
            <Link 
              href={`/brands/${product.brandSlug}`} 
              className="inline-flex items-center text-sm font-bold tracking-widest text-primary uppercase mb-6 hover:text-foreground transition-colors"
            >
              {product.brandSlug.replace('-', ' ')}
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">{product.name}</h1>
            <p className="text-2xl text-muted-foreground mb-10 leading-relaxed font-serif italic">
              {product.shortDescription}
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              {product.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-muted rounded-full text-xs font-bold tracking-wider uppercase text-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mb-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">Available Formats</h3>
              <div className="flex flex-wrap gap-4">
                {product.sizes.map(size => (
                  <div key={size} className="px-6 py-3 border border-border rounded-xl text-base font-medium bg-card text-foreground shadow-sm">
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <Link 
              href={`/contact?subject=Wholesale Enquiry: ${encodeURIComponent(product.name)}`}
              className="w-full text-center px-10 py-5 rounded-full bg-primary text-primary-foreground text-lg font-bold hover:bg-primary/90 transition-all duration-300 mb-8 hover:-translate-y-1 hover:shadow-xl"
            >
              Enquire for Pricing
            </Link>
            
            <p className="text-sm text-muted-foreground text-center font-medium">
              Available exclusively for trade professionals and approved stockists.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Specs */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-8 py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          
          <div className="md:col-span-2">
            <h2 className="font-serif text-4xl mb-8">About this product</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-16">
              {product.description}
            </p>

            <h3 className="font-serif text-3xl mb-8">Key Benefits</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {product.keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start bg-muted/30 p-6 rounded-2xl border border-border/50">
                  <Check size={24} className="text-primary mr-4 shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-serif text-3xl mb-8">Professional Application</h3>
            <div className="text-lg text-muted-foreground leading-relaxed p-8 md:p-10 bg-zest-purple/20 rounded-3xl border border-primary/10">
              {product.howToUse}
            </div>
          </div>

          <div>
            <div className="bg-card border border-border rounded-3xl p-10 shadow-xl sticky top-32">
              <div className="mb-10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Key Ingredients</h4>
                <ul className="space-y-4">
                  {product.keyIngredients.map((ing, i) => (
                    <li key={i} className="text-base text-foreground font-medium border-b border-border/50 pb-3 last:border-0">{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Sensory Profile</h4>
                <p className="text-lg text-muted-foreground font-serif italic">
                  "{product.sensoryNotes}"
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Suitable For</h4>
                <p className="text-base text-foreground font-medium">
                  {product.suitableFor}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why We Love It */}
      <section className="bg-zest-yellow py-32">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-primary/20 text-8xl font-serif">"</div>
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block relative z-10">Our Verdict</span>
          <h2 className="font-serif text-5xl mb-10 text-foreground relative z-10">Why Zest Loves It</h2>
          <p className="text-3xl font-serif italic text-foreground/80 leading-relaxed relative z-10">
            {product.whyWeLoveIt}
          </p>
        </div>
      </section>

      <EnquiryCTA context={`Product: ${product.name}`} />
    </div>
  );
}