import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { Brand } from "@/data/brands";
import type { Product } from "@/data/products";
import type { Collection } from "@/data/collections";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link href={`/brands/${brand.slug}`} className="group block h-full">
      <div className="bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 h-full flex flex-col">
        <div className="aspect-[4/3] overflow-hidden relative bg-muted">
          <img 
            src={brand.imageUrl} 
            alt={brand.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block">
            {brand.category}
          </span>
          <h3 className="font-serif text-2xl mb-3 text-foreground">{brand.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
            {brand.shortDescription}
          </p>
          <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            Discover Brand
            <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="flex flex-col gap-4">
        <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1 block">
            {product.brandSlug.replace('-', ' ')}
          </span>
          <h4 className="font-serif text-lg leading-tight mb-2 text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link href={`/collections`} className="group block">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
        <img 
          src={collection.imageUrl} 
          alt={collection.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <h3 className="font-serif text-2xl text-white mb-2">{collection.name}</h3>
          <p className="text-white/80 text-sm line-clamp-2 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {collection.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
