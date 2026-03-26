import { EnquiryCTA } from "@/components/EnquiryCTA";

export default function B2B() {
  return (
    <div className="pt-24 pb-0 bg-background">
      <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-primary font-medium tracking-widest uppercase text-sm mb-6 block">Professional Solutions</span>
        <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight max-w-4xl mx-auto">
          Tailored for the World's Best Destinations
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          We understand the operational realities of spas and hotels. Zest provides end-to-end support to ensure your wellness offering is profitable, distinctive, and seamless.
        </p>
      </section>

      {/* Grid of services */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Spa Operations",
                desc: "From professional back-bar sizing to treatment menu design and therapist protocols.",
                img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Guest Amenities",
                desc: "Luxury refillable and eco-friendly in-room solutions that leave a lasting impression.",
                img: "https://images.unsplash.com/photo-1584305574647-0cc91866385a?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Retail Boutiques",
                desc: "Merchandising support, staff training, and fast fulfillment to drive retail revenue.",
                img: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=600"
              }
            ].map((service, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-12 text-center">The Partnership Process</h2>
        <div className="space-y-12">
          {[
            { step: "01", title: "Discovery", desc: "We start by understanding your brand identity, operational constraints, guest demographics, and commercial goals." },
            { step: "02", title: "Curation", desc: "We present a tailored portfolio of brands and products that align with your unique needs." },
            { step: "03", title: "Implementation", desc: "Assistance with integration, from dispenser installation to creating bespoke treatment manuals." },
            { step: "04", title: "Training", desc: "Comprehensive on-site or virtual training for your therapists and retail staff to ensure confidence." },
            { step: "05", title: "Ongoing Support", desc: "A dedicated account manager, swift order fulfillment, and continuous performance reviews." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="font-serif text-3xl text-primary/40 pt-1">{item.step}</span>
              <div>
                <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EnquiryCTA title="Let's build something exceptional" buttonText="Enquire Now" />
    </div>
  );
}
