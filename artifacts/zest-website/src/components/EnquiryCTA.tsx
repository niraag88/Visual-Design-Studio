import { Link } from "wouter";

interface EnquiryCTAProps {
  title?: string;
  text?: string;
  buttonText?: string;
  context?: string; // e.g. "Product: Neroli Mist"
}

export function EnquiryCTA({ 
  title = "Ready to elevate your offering?", 
  text = "Whether you are looking to stock a new retail range, develop a signature spa treatment, or require bespoke amenities, our team is ready to assist.",
  buttonText = "Get in Touch",
  context
}: EnquiryCTAProps) {
  const queryParams = context ? `?subject=Enquiry about ${encodeURIComponent(context)}` : '';
  
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">{title}</h2>
        <p className="text-secondary-foreground/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          {text}
        </p>
        <Link 
          href={`/contact${queryParams}`}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium hover:bg-primary hover:text-primary-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
