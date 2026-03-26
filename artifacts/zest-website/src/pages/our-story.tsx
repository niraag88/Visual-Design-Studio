import { EnquiryCTA } from "@/components/EnquiryCTA";

export default function OurStory() {
  return (
    <div className="pt-24 pb-0">
      {/* Hero */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">Rooted in Nature,<br/>Driven by Passion.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            For over two decades, Zest has been the quiet force behind some of the most prestigious spas and wellness spaces. We are an independent, family-led company dedicated to sourcing the extraordinary.
          </p>
        </div>
      </section>

      {/* Full width image */}
      <section className="w-full h-[50vh] md:h-[70vh]">
        {/* team founders walking in nature */}
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Nature walk" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* Story Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg prose-neutral max-w-none">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Beginnings</h2>
            <p>
              Founded 23 years ago, Zest began with a singular vision: to bridge the gap between uncompromising natural formulations and the demanding requirements of professional spa environments.
            </p>
            <p>
              What started as a small, passionate endeavor seeking out independent botanical artisans has grown into a comprehensive distribution and brand partnership business. Yet, despite our growth, our core remains unchanged. We are still family-led, still incredibly selective about who we work with, and still deeply involved in the daily operations.
            </p>
            
            <div className="my-16 p-10 bg-muted/30 rounded-2xl border border-border/50 text-center">
              <p className="font-serif text-2xl italic leading-relaxed text-foreground m-0">
                "We don't just distribute products; we build relationships. With our brand partners, and with the clients who trust us to elevate their spaces."
              </p>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl mb-6">The Zest Difference</h2>
            <p>
              In an industry that often prioritizes scale over substance, we take a different path. We believe in <strong>slow beauty</strong> and <strong>intentional wellness</strong>.
            </p>
            <ul>
              <li><strong>Deep Vetting:</strong> We personally test, trial, and verify every single product line before offering it to our network. If we wouldn't use it on our own families, we don't carry it.</li>
              <li><strong>Education First:</strong> A great product is only as good as the hands applying it. We invest heavily in training for our partners.</li>
              <li><strong>Responsive Service:</strong> Because we are independent, we can be nimble. We adapt to the specific needs of an independent boutique just as well as a multi-site hotel group.</li>
            </ul>
          </div>
        </div>
      </section>

      <EnquiryCTA title="Partner with us" text="Join our community of exceptional wellness spaces." />
    </div>
  );
}
