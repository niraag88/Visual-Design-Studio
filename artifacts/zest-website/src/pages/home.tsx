import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";
import { collections } from "@/data/collections";
import { testimonials } from "@/data/testimonials";
import { BrandCard, CollectionCard } from "@/components/Cards";
import { EnquiryCTA } from "@/components/EnquiryCTA";

export default function Home() {
  const featuredBrands = brands.filter(b => b.featured).slice(0, 6);
  const displayCollections = collections.slice(0, 6); // Just show top 6 on home

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-muted/30">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/zest-hero-abstract.png`}
            alt="Abstract natural texture"
            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
          />
          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Est. 2002
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
              Natural beauty and wellness, <span className="italic text-primary/80">curated with care.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              For 23 years, Zest has partnered with the world's most exceptional, conscious brands to elevate spas, hotels, and retail destinations.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <Link 
                href="/brand-partners"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Brands
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 rounded-full bg-white border border-border text-foreground font-medium hover:border-foreground transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Philosophy (Pillars) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Personal Relationships", desc: "A family-led approach means we know our partners intimately." },
              { title: "Purposeful Curation", desc: "Every brand we select must meet rigorous standards of efficacy and ethics." },
              { title: "Trusted Expertise", desc: "Over two decades of industry insight shaping wellness spaces." },
              { title: "Flexible Service", desc: "From nimble retail support to bespoke hotel amenities." }
            ].map((pillar, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <span className="font-serif text-xl text-primary">{i + 1}</span>
                </div>
                <h3 className="font-serif text-2xl mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Brands Grid */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Brand Partners</h2>
              <p className="text-lg text-muted-foreground">
                We represent a carefully curated portfolio of brands that share our values of purity, sustainability, and uncompromising quality.
              </p>
            </div>
            <Link href="/brand-partners" className="inline-flex items-center font-medium text-primary hover:text-foreground transition-colors pb-2">
              View All Brands <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBrands.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Categories/Collections Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Explore by Collection</h2>
            <p className="text-lg text-muted-foreground">
              Discover products tailored for specific rituals, treatments, and settings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCollections.map(collection => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/collections" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border hover:border-foreground transition-colors">
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* 6. B2B & Hospitality Preview */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* b2b spa interior */}
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury spa interior"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
            </div>
            <div>
              <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">Professional Partnerships</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Elevating the Guest Experience</h2>
              <p className="text-background/80 text-lg mb-8 leading-relaxed">
                From supplying 5-star hotel bathrooms with sustainable luxury amenities to designing signature spa treatment menus, we provide comprehensive support for the hospitality sector. Our dedicated team works alongside yours to ensure seamless operations and exceptional client satisfaction.
              </p>
              <ul className="space-y-4 mb-10">
                {["In-room premium amenities", "Professional spa & salon sizes", "Retail boutique merchandising", "Staff training and protocols"].map((item, i) => (
                  <li key={i} className="flex items-center text-background/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/b2b-hospitality"
                className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Learn About B2B Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Story Snapshot */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/3 opacity-40 mix-blend-multiply pointer-events-none hidden lg:block">
           <img src={`${import.meta.env.BASE_URL}images/zest-shape-accent.png`} alt="" className="w-full h-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">A Family Led Journey</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-serif italic mb-10">
            "We started Zest 23 years ago with a simple belief: that the products we use on our bodies should be as pure and potent as nature intended. Today, that passion remains the heartbeat of everything we do."
          </p>
          <Link href="/our-story" className="font-medium text-primary hover:text-foreground transition-colors inline-flex items-center uppercase tracking-widest text-sm">
            Read Our Story <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((t) => (
              <div key={t.id} className="bg-background p-10 rounded-2xl border border-border shadow-sm">
                <p className="text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Enquiry CTA */}
      <EnquiryCTA />
    </div>
  );
}
