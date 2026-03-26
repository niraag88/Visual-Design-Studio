import { Link } from "wouter";
import { EnquiryCTA } from "@/components/EnquiryCTA";
import { testimonials } from "@/data/testimonials";

const fallbackImage = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80';

export default function OurStory() {
  return (
    <div className="pt-24 pb-0 bg-background">
      {/* Hero */}
      <section className="py-24 lg:py-40 px-6 lg:px-8 max-w-screen-xl mx-auto bg-background text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Our Story</span>
          <h1 className="font-serif text-6xl md:text-8xl mb-10 leading-[1.1] text-foreground">
            A family business built on trust
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-serif italic">
            For 23 years, we have been the quiet force behind some of the most prestigious spas and wellness spaces, sourcing the extraordinary.
          </p>
        </div>
      </section>

      {/* Section 1: Where it began */}
      <section className="w-full h-[60vh] md:h-[80vh] relative">
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=2000&q=80" 
          alt="Nature walk" 
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      <section className="py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-foreground">Where it began</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Founded in 2002, Zest began with a singular vision: to bridge the gap between uncompromising natural formulations and the demanding requirements of professional spa environments. 
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            What started as a small, passionate endeavor seeking out independent botanical artisans has grown into a comprehensive distribution business. Yet, our core remains unchanged. We are still family-led, still incredibly selective, and still deeply involved.
          </p>
        </div>
      </section>

      {/* Section 2: What we believe */}
      <section className="py-32 bg-zest-green text-foreground">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-5xl md:text-6xl mb-20 text-center">What we believe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            <div className="border-t-4 border-zest-coral pt-6">
              <h3 className="font-serif text-3xl mb-4">Every customer matters</h3>
              <p className="text-lg opacity-80 leading-relaxed">There are no small accounts. We treat the independent boutique with the same reverence as the five-star hotel group.</p>
            </div>
            <div className="border-t-4 border-zest-coral pt-6">
              <h3 className="font-serif text-3xl mb-4">Every conversation matters</h3>
              <p className="text-lg opacity-80 leading-relaxed">We pick up the phone. We visit your space. We build genuine human connections.</p>
            </div>
            <div className="border-t-4 border-zest-coral pt-6">
              <h3 className="font-serif text-3xl mb-4">Products chosen with purpose</h3>
              <p className="text-lg opacity-80 leading-relaxed">If we wouldn't use it on our own families, we don't carry it. Period.</p>
            </div>
            <div className="border-t-4 border-zest-coral pt-6 lg:col-start-1 lg:col-span-1">
              <h3 className="font-serif text-3xl mb-4">Relationships built for the long term</h3>
              <p className="text-lg opacity-80 leading-relaxed">We seek enduring partnerships, not quick wins. Your growth is our growth.</p>
            </div>
            <div className="border-t-4 border-zest-coral pt-6 lg:col-start-2 lg:col-span-1">
              <h3 className="font-serif text-3xl mb-4">Trust earned through service</h3>
              <p className="text-lg opacity-80 leading-relaxed">Reliability, speed, and honesty are the foundation of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How we curate */}
      <section className="py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-5xl md:text-6xl mb-8">The art of curation</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Finding exceptional brands requires time, patience, and uncompromising standards. We spend months—sometimes years—with suppliers before officially partnering.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We dive deep into formulations, visit producers, and understand the supply chain. We want to know the people behind the products and the intent behind every ingredient. This meticulous process ensures that when we bring a brand to you, it is guaranteed to perform beautifully in a professional setting.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80" 
                alt="Botanical curation" 
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The brands we choose */}
      <section className="py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-8">The brands we choose</h2>
          <p className="text-xl text-background/80 leading-relaxed font-serif italic mb-12">
            "We only distribute what we genuinely love."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-background/5 rounded-2xl">
              <h4 className="font-serif text-2xl mb-2 text-primary">Quality</h4>
              <p className="text-sm opacity-70">Professional-grade efficacy</p>
            </div>
            <div className="p-6 bg-background/5 rounded-2xl">
              <h4 className="font-serif text-2xl mb-2 text-primary">Purity</h4>
              <p className="text-sm opacity-70">Clean, safe ingredients</p>
            </div>
            <div className="p-6 bg-background/5 rounded-2xl">
              <h4 className="font-serif text-2xl mb-2 text-primary">Ethics</h4>
              <p className="text-sm opacity-70">Sustainable & kind</p>
            </div>
            <div className="p-6 bg-background/5 rounded-2xl">
              <h4 className="font-serif text-2xl mb-2 text-primary">Story</h4>
              <p className="text-sm opacity-70">Authentic heritage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Stats */}
      <section className="py-24 bg-zest-yellow text-foreground border-y border-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <span className="block font-serif text-6xl md:text-7xl mb-4 text-primary">23</span>
              <span className="font-bold tracking-widest uppercase text-sm">Years Experience</span>
            </div>
            <div>
              <span className="block font-serif text-6xl md:text-7xl mb-4 text-primary">15+</span>
              <span className="font-bold tracking-widest uppercase text-sm">Brand Partners</span>
            </div>
            <div>
              <span className="block font-serif text-6xl md:text-7xl mb-4 text-primary">300+</span>
              <span className="font-bold tracking-widest uppercase text-sm">Loyal Clients</span>
            </div>
            <div>
              <span className="block font-serif text-6xl md:text-7xl mb-4 text-primary">3</span>
              <span className="font-bold tracking-widest uppercase text-sm">Generations of Evolution</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why clients stay */}
      <section className="py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-5xl md:text-6xl mb-8">Why clients stay</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Distribution is ultimately a service business. We retain our clients for decades because we treat their business as an extension of our own.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-card p-10 rounded-3xl border border-border relative">
                 <div className="text-5xl text-primary/20 font-serif absolute top-6 left-6">"</div>
                 <p className="text-lg leading-relaxed mb-8 italic relative z-10 pt-4 text-foreground">
                   {t.quote}
                 </p>
                 <div className="font-serif font-bold text-lg">{t.author}</div>
                 <div className="text-sm text-muted-foreground">{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <EnquiryCTA title="Work with Zest" text="Join our community of exceptional wellness spaces and experience the difference of a true partnership." buttonText="Enquire Today" />
    </div>
  );
}