import { Link } from "wouter";
import { ArrowRight, Leaf, Shield, HeartHandshake, Zap } from "lucide-react";
import { brands } from "@/data/brands";
import { collections } from "@/data/collections";
import { testimonials } from "@/data/testimonials";
import { BrandCard, CollectionCard } from "@/components/Cards";
import { EnquiryCTA } from "@/components/EnquiryCTA";

const fallbackImage = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80';

export default function Home() {
  const featuredBrands = brands.filter(b => b.featured).slice(0, 6);
  const displayCollections = collections.slice(0, 6); 

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-primary/10 to-transparent z-0 hidden lg:block" />
        
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center py-20">
          <div className="max-w-2xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Est. 2002
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
              Natural beauty and wellness, <br/><span className="italic text-primary">curated with care.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 font-light">
              For 23 years, Zest has partnered with the world's most exceptional, conscious brands to elevate spas, hotels, and retail destinations.
            </p>
            <div className="flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <Link 
                href="/brand-partners"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Our Brands
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 rounded-full bg-transparent border-2 border-foreground text-foreground font-medium text-lg hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[600px] lg:h-[800px] animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
            <div className="flex flex-col gap-4 pt-12">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80" alt="Wellness aesthetic" className="rounded-3xl object-cover h-1/2 w-full shadow-lg" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }} />
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Botanical ingredients" className="rounded-3xl object-cover h-1/2 w-full shadow-lg" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }} />
            </div>
            <div className="flex flex-col gap-4 pb-12">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80" alt="Spa interior" className="rounded-3xl object-cover h-1/2 w-full shadow-lg" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }} />
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" alt="Natural textures" className="rounded-3xl object-cover h-1/2 w-full shadow-lg" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Philosophy (4 pillars) */}
      <section className="py-32 bg-zest-yellow">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Every relationship matters. Every product is chosen with purpose.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: HeartHandshake, color: "text-zest-coral", bg: "bg-zest-coral", title: "Personal & Dedicated", desc: "Warm, human service that puts our customers and partners first." },
              { icon: Shield, color: "text-zest-green", bg: "bg-zest-green", title: "Purposefully Curated", desc: "Every single brand is selected with absolute integrity and strict standards." },
              { icon: Leaf, color: "text-zest-teal", bg: "bg-zest-teal", title: "Trusted for 23 Years", desc: "Enduring, honest relationships built over decades in the wellness industry." },
              { icon: Zap, color: "text-zest-purple", bg: "bg-zest-purple", title: "Flexible & Solutions-Led", desc: "Adapting nimbly to every client's unique operational needs." }
            ].map((pillar, i) => (
              <div key={i} className="group">
                <div className={`w-16 h-16 rounded-2xl ${pillar.bg} flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-2 transition-transform duration-300`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-foreground">{pillar.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-lg">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Brands */}
      <section className="py-32 bg-card">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Our Portfolio</span>
              <h2 className="font-serif text-5xl md:text-6xl text-foreground">Brands we believe in</h2>
            </div>
            <Link href="/brand-partners" className="inline-flex items-center font-bold uppercase tracking-wider text-primary hover:text-foreground transition-colors pb-2 border-b-2 border-primary hover:border-foreground">
              Explore All Brands <ArrowRight size={20} className="ml-3" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredBrands.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Collections */}
      <section className="py-32 bg-zest-teal">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-zest-green font-bold tracking-widest uppercase text-sm mb-6 block">Product Worlds</span>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8">Explore our collections</h2>
            <p className="text-xl text-foreground/80 font-serif italic">
              Discover purposefully curated ranges tailored for specific rituals, treatments, and beautiful spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayCollections.map(collection => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Zest */}
      <section className="py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
             <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Why Zest</span>
             <h2 className="font-serif text-5xl md:text-6xl text-foreground">A different kind of distributor</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
            {[
              { num: "01", title: "Personal Service", desc: "You're never a number. We know our clients intimately and care about their success." },
              { num: "02", title: "Twenty-Three Years", desc: "Decades of deep industry knowledge shaping exceptional wellness spaces globally." },
              { num: "03", title: "Curated Partnerships", desc: "We only represent brands we completely believe in, rigorously vetted for efficacy." },
              { num: "04", title: "Flexible Approach", desc: "We adapt to your reality, from bespoke amenities to specialized professional support." },
              { num: "05", title: "Long-Term Thinking", desc: "We build enduring relationships based on trust, honesty, and mutual growth." }
            ].map((val, i) => (
              <div key={i} className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-shadow duration-300">
                <span className="font-serif text-6xl text-primary/20 block mb-6">{val.num}</span>
                <h3 className="font-serif text-2xl mb-4">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. B2B Preview */}
      <section className="py-32 bg-foreground text-background overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative z-10">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">For Business & Hospitality</span>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">Elevating wellness destinations</h2>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-12 text-background/80 text-lg">
                <div className="flex items-center gap-3 border-b border-background/10 pb-4"><div className="w-2 h-2 bg-primary rounded-full"/> Hotel Spas</div>
                <div className="flex items-center gap-3 border-b border-background/10 pb-4"><div className="w-2 h-2 bg-primary rounded-full"/> Independent Spas</div>
                <div className="flex items-center gap-3 border-b border-background/10 pb-4"><div className="w-2 h-2 bg-primary rounded-full"/> Guest Amenities</div>
                <div className="flex items-center gap-3 border-b border-background/10 pb-4"><div className="w-2 h-2 bg-primary rounded-full"/> Wellness Destinations</div>
                <div className="flex items-center gap-3 border-b border-background/10 pb-4"><div className="w-2 h-2 bg-primary rounded-full"/> Specialty Retail</div>
                <div className="flex items-center gap-3 border-b border-background/10 pb-4"><div className="w-2 h-2 bg-primary rounded-full"/> Purchasing Teams</div>
              </div>

              <Link 
                href="/b2b-hospitality"
                className="inline-flex items-center px-10 py-5 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
              >
                Explore B2B Solutions <ArrowRight className="ml-3" size={20} />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1000&q=80" 
                alt="Luxury spa interior"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                className="w-full h-[600px] lg:h-[800px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Curated Rituals */}
      <section className="py-32 bg-zest-pink">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Signature Experiences</span>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8">Curated rituals and treatment concepts</h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              We work with spa directors, wellness managers, and hospitality teams to develop meaningful treatment concepts rooted in exceptional natural products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80", title: "Signature Spa Rituals", desc: "Immersive multi-sensory experiences using raw earth elements and pure botanicals." },
              { img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", title: "Treatment Journey Design", desc: "End-to-end service protocols mapped out to deliver measurable results and profound relaxation." },
              { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80", title: "Bespoke Guest Experiences", desc: "Tailored amenity and retail solutions that carry the memory of your property." }
            ].map((card, i) => (
              <div key={i} className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={card.img} alt={card.title} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 border-t-4 border-zest-coral">
                  <h3 className="font-serif text-2xl mb-4 text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Our Story Snapshot */}
      <section className="py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-zest-coral translate-x-6 translate-y-6 rounded-3xl z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80" 
                alt="Zest founders"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                className="relative z-10 w-full aspect-[4/5] object-cover rounded-3xl shadow-xl border border-border"
              />
            </div>
            <div className="lg:pl-10">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Our Story</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                A family business built on trust, care, and a genuine love of wellness
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                Founded 23 years ago, Zest began with a singular vision: to bridge the gap between uncompromising natural formulations and the demanding requirements of professional spa environments. Today, we are still family-led, still deeply selective about the brands we partner with, and still dedicated to building enduring relationships one at a time.
              </p>
              <Link href="/our-story" className="inline-flex items-center text-lg font-bold text-foreground hover:text-primary transition-colors border-b-2 border-foreground hover:border-primary pb-1">
                Read Our Story <ArrowRight size={20} className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials & Trusted By */}
      <section className="py-32 bg-zest-purple">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-20">Trusted by wellness leaders across the industry</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-card p-10 rounded-3xl border border-border shadow-sm relative">
                <div className="text-6xl text-primary/20 font-serif absolute top-6 left-6">"</div>
                <p className="text-lg leading-relaxed mb-10 italic text-foreground relative z-10 pt-4">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-muted rounded-full overflow-hidden border border-border">
                     <img src={`https://i.pravatar.cc/150?u=${t.id}`} alt={t.author} className="w-full h-full object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}/>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-lg text-foreground">{t.author}</p>
                    <p className="text-sm text-foreground/70">{t.role}, <br/>{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            {["Five-Star Resort", "Luxury Spa Group", "Boutique Hotel", "Wellness Retreat", "Independent Salon", "Specialty Retailer"].map((partner, i) => (
              <div key={i} className="px-8 py-4 bg-foreground/5 rounded-2xl border border-foreground/10 text-foreground/70 font-semibold tracking-wider uppercase text-sm">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Newsletter + Contact CTA */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-8">Stay connected with Zest</h2>
          <p className="text-xl text-primary-foreground/80 mb-12">
            Join our mailing list for industry insights, new brand launches, and wellness news.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-20" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition-all"
            />
            <button className="px-8 py-4 rounded-full bg-background text-primary font-bold hover:bg-background/90 transition-colors shadow-lg">
              Subscribe
            </button>
          </form>

          <div className="border-t border-primary-foreground/20 pt-16">
            <h3 className="text-2xl font-serif mb-6">Trade, hospitality, or bespoke enquiry? We'd love to hear from you.</h3>
            <Link href="/contact" className="inline-flex items-center px-10 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground font-bold hover:bg-primary-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}