import { collections } from "@/data/collections";
import { CollectionCard } from "@/components/Cards";
import { EnquiryCTA } from "@/components/EnquiryCTA";

export default function Collections() {
  return (
    <div className="pt-24 pb-0 bg-background">
      <section className="py-24 px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Product Worlds</span>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 text-foreground">Curated Worlds</h1>
          <p className="text-2xl text-muted-foreground leading-relaxed font-serif italic">
            Explore our offerings categorized by treatment type, ritual, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map(collection => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </section>

      <EnquiryCTA />
    </div>
  );
}