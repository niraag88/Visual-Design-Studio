import { EnquiryCTA } from "@/components/EnquiryCTA";
import { Link } from "wouter";
import { Building2, Sparkles, Gem, Building, ShoppingBag, Droplets } from "lucide-react";

const fallbackImage = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80';

export default function B2B() {
  return (
    <div className="pt-24 pb-0 bg-background">
      {/* Hero */}
      <section className="py-24 lg:py-40 px-6 lg:px-8 bg-foreground text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80" alt="Spa bg" className="w-full h-full object-cover mix-blend-overlay" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}/>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Professional Solutions</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-10 leading-tight">
            Exceptional product partnerships for exceptional wellness destinations
          </h1>
          <p className="text-xl md:text-2xl text-background/80 leading-relaxed font-light">
            We provide end-to-end operational support, ensuring your wellness offering is profitable, distinctive, and flawless.
          </p>
        </div>
      </section>

      {/* Section 1: Who we work with */}
      <section className="py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Who we work with</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Luxury Hotels", desc: "Elevating the guest experience with premium in-room amenities and VIP gifting." },
              { icon: Sparkles, title: "Hotel Spas", desc: "Comprehensive professional ranges, back-bar sizing, and signature treatment design." },
              { icon: Gem, title: "Independent Spas & Salons", desc: "Curated brands that differentiate your business and drive retail revenue." },
              { icon: Building, title: "Wellness Retreats", desc: "Holistic, pure products that align with deep healing and restorative programs." },
              { icon: ShoppingBag, title: "Specialty Retail Boutiques", desc: "Niche, high-performance beauty and lifestyle brands for discerning shoppers." },
              { icon: Droplets, title: "Hospitality Purchasing Teams", desc: "Reliable logistics, competitive pricing, and seamless supply chain management." }
            ].map((item, i) => (
              <div key={i} className="bg-card p-10 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-sm">
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: What we offer */}
      <section className="py-32 bg-zest-purple/30">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Comprehensive Support</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="bg-background rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&q=80" alt="Products" className="w-full h-64 object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}/>
              <div className="p-10">
                <h3 className="font-serif text-3xl mb-4">Product Solutions</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">Access our meticulously curated portfolio of professional and retail ranges.</p>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Curated brand selection</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Trial orders & sampling</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Category guidance</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Retail merchandising support</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-background rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1584305574647-0cc91866385a?w=600&q=80" alt="Amenities" className="w-full h-64 object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}/>
              <div className="p-10">
                <h3 className="font-serif text-3xl mb-4">Hospitality Amenities</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">Sustainable, luxurious in-room solutions that leave a lasting impression.</p>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Refillable dispenser programs</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Miniature development</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Bespoke presentation</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> VIP gifting curations</li>
                </ul>
              </div>
            </div>

            <div className="bg-background rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80" alt="Spa" className="w-full h-64 object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}/>
              <div className="p-10">
                <h3 className="font-serif text-3xl mb-4">Spa & Treatment</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">Operational excellence from the back-bar to the therapist's touch.</p>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Treatment menu design</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Signature ritual concepts</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Professional sizing & protocols</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Comprehensive staff training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Curated rituals */}
      <section className="py-32 bg-zest-pink text-foreground">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">Curated rituals and treatment concepts</h2>
              <p className="text-xl leading-relaxed mb-10 text-foreground/80">
                We help spa directors and wellness managers create distinctive guest experiences rooted in exceptional natural products. From signature rituals to full treatment menu development, we're here to make your offering remarkable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-background/40 p-6 rounded-2xl">
                  <h4 className="font-serif text-xl font-bold mb-2">Signature Rituals</h4>
                  <p className="text-sm">Unique treatments designed exclusively for your property.</p>
                </div>
                <div className="bg-background/40 p-6 rounded-2xl">
                  <h4 className="font-serif text-xl font-bold mb-2">Journey Design</h4>
                  <p className="text-sm">Mapping the complete sensory experience from arrival to departure.</p>
                </div>
                <div className="bg-background/40 p-6 rounded-2xl">
                  <h4 className="font-serif text-xl font-bold mb-2">Menu Concepts</h4>
                  <p className="text-sm">Product-led service menus that drive bookings and retail.</p>
                </div>
                <div className="bg-background/40 p-6 rounded-2xl">
                  <h4 className="font-serif text-xl font-bold mb-2">Bespoke Amenities</h4>
                  <p className="text-sm">In-room touches that reflect your signature spa scent.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" 
                alt="Ritual" 
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                className="w-full rounded-3xl shadow-2xl rotate-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why partners choose Zest */}
      <section className="py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-5xl md:text-6xl mb-20 text-center">Why partners choose Zest</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              { num: "01", title: "Uncompromising Quality", desc: "Every product is rigorously tested to ensure it performs beautifully in high-turnover professional environments." },
              { num: "02", title: "Nimble Operations", desc: "We are fast, responsive, and deeply flexible, adapting to your specific operational constraints." },
              { num: "03", title: "Education First", desc: "A great product needs great application. We provide extensive, continuous training for your therapists and retail staff." },
              { num: "04", title: "Dedicated Account Management", desc: "One point of contact who truly understands your business, your margins, and your goals." },
              { num: "05", title: "Reliable Logistics", desc: "Consistent stock availability and rapid fulfillment to ensure your operations never skip a beat." }
            ].map((val, i) => (
              <div key={i} className="flex gap-8 items-start group">
                <span className="font-serif text-6xl text-primary/30 group-hover:text-primary transition-colors">{val.num}</span>
                <div>
                  <h3 className="font-serif text-3xl mb-3">{val.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our approach */}
      <section className="py-32 bg-muted text-foreground">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-5xl md:text-6xl mb-20 text-center">Our approach to partnership</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-border z-0"></div>
            {[
              { title: "Understand", desc: "We start by deeply understanding your brand identity, guest demographics, and commercial goals." },
              { title: "Curate", desc: "We present a tailored portfolio of brands and products that align with your unique needs." },
              { title: "Deliver", desc: "Seamless implementation, from dispenser installation to creating bespoke treatment manuals." },
              { title: "Support", desc: "Continuous performance reviews, staff training, and nimble account management." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 bg-card border-4 border-muted rounded-full flex items-center justify-center text-3xl font-serif text-primary shadow-xl mx-auto mb-8">
                  {i + 1}
                </div>
                <h3 className="font-serif text-2xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA Block */}
      <section className="py-40 bg-foreground text-background text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Start a conversation</h2>
          <p className="text-xl md:text-2xl text-background/80 leading-relaxed font-serif italic mb-12">
            "Whether you're sourcing products for a new spa, developing a guest amenity program, or looking for a long-term wellness partner, we'd love to talk."
          </p>
          <Link 
            href="/contact?subject=B2B%20Enquiry"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-primary-foreground text-lg font-bold hover:bg-primary/90 transition-all hover:scale-105"
          >
            Enquire Now
          </Link>
        </div>
      </section>

    </div>
  );
}