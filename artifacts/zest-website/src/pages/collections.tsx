import { collections } from "@/data/collections";
import { CollectionCard } from "@/components/Cards";
import { EnquiryCTA } from "@/components/EnquiryCTA";

export default function Collections() {
  return (
    <div className="pt-24 pb-0">
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Curated Worlds</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our offerings categorized by treatment type, ritual, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map(collection => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </section>

      <EnquiryCTA />
    </div>
  );
}
