import { EnquiryCTA } from "@/components/EnquiryCTA";

export default function Bespoke() {
  return (
    <div className="pt-24 pb-0 bg-background">
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0">
          {/* lab / mixing ingredients */}
          <img 
            src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=2000" 
            alt="Bespoke creation" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Bespoke Creations</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your brand, realized in physical form. We help prestigious properties design signature scents and custom product lines.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-6">A Signature Identity</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Scent and touch are the most powerful memory triggers. A bespoke product line or signature fragrance ensures that your guests carry the memory of your property long after they check out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card p-10 rounded-2xl border border-border">
            <h3 className="font-serif text-2xl mb-4">Signature Scents</h3>
            <p className="text-muted-foreground mb-6">
              Collaborate with our master aromatherapists to blend a fragrance profile that captures the landscape, history, and ethos of your location.
            </p>
            <ul className="text-sm space-y-2 text-foreground/80 list-disc list-inside">
              <li>Lobby diffusers & ambient scenting</li>
              <li>Signature massage oils</li>
              <li>Retail candles and room mists</li>
            </ul>
          </div>
          
          <div className="bg-card p-10 rounded-2xl border border-border">
            <h3 className="font-serif text-2xl mb-4">Private Label</h3>
            <p className="text-muted-foreground mb-6">
              Develop a complete range of amenities or retail products under your own brand name, utilizing our verified, high-performance natural bases.
            </p>
            <ul className="text-sm space-y-2 text-foreground/80 list-disc list-inside">
              <li>In-room amenities</li>
              <li>Bespoke packaging design</li>
              <li>Small minimum order quantities</li>
            </ul>
          </div>
        </div>
      </section>

      <EnquiryCTA title="Start your creation" text="Contact our bespoke development team to explore possibilities." />
    </div>
  );
}
