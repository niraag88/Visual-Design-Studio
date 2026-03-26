import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { Brand } from "@/data/brands";
import type { Product } from "@/data/products";
import type { Collection } from "@/data/collections";

const fallbackImage = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80';

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link href={`/brands/${brand.slug}`} className="group block h-full">
      <div className="bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 h-full flex flex-col">
        <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] overflow-hidden relative bg-muted">
          <img 
            src={brand.imageUrl} 
            alt={brand.name} 
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.src = fallbackImage;
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-semibold tracking-widest text-primary uppercase shadow-sm">
              {brand.category}
            </span>
          </div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="font-serif text-3xl mb-4 text-foreground group-hover:text-primary transition-colors">{brand.name}</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">
            {brand.shortDescription}
          </p>
          <div className="flex items-center text-sm font-semibold tracking-wider uppercase text-primary transition-colors">
            Explore Brand
            <ArrowRight size={18} className="ml-2 transform transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="flex flex-col gap-4 relative">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted relative border border-border/50">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.src = fallbackImage;
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Enquire
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-start mb-2 gap-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider block">
              {product.brandSlug.replace('-', ' ')}
            </span>
            {product.sizes && product.sizes.length > 0 && (
              <span className="text-[10px] font-medium px-2 py-1 bg-muted rounded text-muted-foreground shrink-0">
                {product.sizes[0]}
              </span>
            )}
          </div>
          <h4 className="font-serif text-xl leading-tight mb-2 text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link href={`/collections`} className="group block h-full">
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
        <img 
          src={collection.imageUrl} 
          alt={collection.name}
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.src = fallbackImage;
          }}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <h3 className="font-serif text-3xl text-white mb-3 tracking-wide">{collection.name}</h3>
          <p className="text-white/90 text-base leading-relaxed transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {collection.description}
          </p>
        </div>
      </div>
    </Link>
  );
}