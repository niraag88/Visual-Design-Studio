import { EnquiryCTA } from "@/components/EnquiryCTA";
import { Link } from "wouter";

const fallbackImage = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80';

export default function Bespoke() {
  return (
    <div className="pt-24 pb-0 bg-background">
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1617897903246-719242758050?w=2000&q=80" 
            alt="Bespoke creation botanical" 
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
            className="w-full h-full object-cover mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-zest-green/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Bespoke Solutions</span>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight text-foreground">
            Where your vision<br/>meets our expertise
          </h1>
          <p className="text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-serif italic">
            Your brand, realized in physical form. We help prestigious properties design signature scents, exclusive rituals, and custom product lines.
          </p>
        </div>
      </section>

      <section className="py-32 bg-background text-center">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-5xl md:text-6xl mb-20">What bespoke means for you</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-card p-12 rounded-3xl border border-border hover:border-primary/30 transition-colors text-left">
              <div className="w-16 h-16 bg-zest-pink rounded-2xl mb-8"></div>
              <h3 className="font-serif text-3xl mb-4">Tailored Concepts</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Develop a complete range of amenities or retail products under your own brand name, utilizing our verified, high-performance natural bases and striking custom packaging.
              </p>
            </div>
            
            <div className="bg-card p-12 rounded-3xl border border-border hover:border-primary/30 transition-colors text-left">
              <div className="w-16 h-16 bg-zest-yellow rounded-2xl mb-8"></div>
              <h3 className="font-serif text-3xl mb-4">Signature Rituals</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Collaborate with our master aromatherapists to blend a fragrance profile that captures the landscape, history, and ethos of your specific location.
              </p>
            </div>

            <div className="bg-card p-12 rounded-3xl border border-border hover:border-primary/30 transition-colors text-left">
              <div className="w-16 h-16 bg-zest-teal rounded-2xl mb-8"></div>
              <h3 className="font-serif text-3xl mb-4">Bespoke Amenities</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Elevate the guest bathroom experience with tailored pump systems, exclusive miniatures, and sustainable luxury touches that bear your crest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-zest-purple/20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl mb-8">Who is it for?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                Bespoke creation is for visionaries who want to own every touchpoint of their brand experience.
              </p>
              <ul className="space-y-6 text-xl font-serif">
                <li className="flex items-center gap-4"><div className="w-3 h-3 bg-primary rounded-full"/> Luxury Hotels & Resorts</li>
                <li className="flex items-center gap-4"><div className="w-3 h-3 bg-primary rounded-full"/> Spa Brands Building Identity</li>
                <li className="flex items-center gap-4"><div className="w-3 h-3 bg-primary rounded-full"/> High-End Lifestyle Retailers</li>
                <li className="flex items-center gap-4"><div className="w-3 h-3 bg-primary rounded-full"/> Boutique Wellness Destinations</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600014799818-c7b72adaed94?w=800&q=80" 
                alt="Essential oils"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-5xl md:text-6xl mb-20 text-center">The bespoke process</h2>
          
          <div className="space-y-16">
            {[
              { title: "Discovery", desc: "We delve into your brand DNA, target audience, and operational requirements to outline the vision." },
              { title: "Curation", desc: "Our lab creates initial fragrance profiles and base formulations for your review." },
              { title: "Development", desc: "Refining the formula, selecting the perfect sustainable packaging, and designing the label artwork." },
              { title: "Refinement", desc: "Iterative testing to ensure texture, scent, and performance meet uncompromising standards." },
              { title: "Launch", desc: "Manufacturing, compliance, staff training, and the final rollout of your signature line." }
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start border-l-2 border-background/20 pl-8 pb-16 relative last:pb-0 last:border-transparent">
                <div className="absolute w-6 h-6 bg-primary rounded-full -left-[13px] top-1 border-4 border-foreground" />
                <div>
                  <h3 className="font-serif text-3xl mb-3 text-primary">Phase {i+1}: {step.title}</h3>
                  <p className="text-xl text-background/80 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA 
        title="Tailored for you" 
        text="Ready to create a lasting physical expression of your brand? Contact our bespoke development team." 
        buttonText="Start the Process" 
        context="Bespoke Creation Enquiry"
      />
    </div>
  );
}