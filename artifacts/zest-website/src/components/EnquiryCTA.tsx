import { Link } from "wouter";

interface EnquiryCTAProps {
  title?: string;
  text?: string;
  buttonText?: string;
  context?: string;
}

export function EnquiryCTA({ 
  title = "Ready to elevate your offering?", 
  text = "Whether you are looking to stock a new retail range, develop a signature spa treatment, or require bespoke amenities, our team is ready to assist.",
  buttonText = "Get in Touch",
  context
}: EnquiryCTAProps) {
  const queryParams = context ? `?subject=Enquiry about ${encodeURIComponent(context)}` : '';
  
  return (
    <section className="py-32 bg-zest-coral text-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">{title}</h2>
        <p className="text-foreground/80 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto font-serif italic">
          {text}
        </p>
        <Link 
          href={`/contact${queryParams}`}
          className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-foreground text-background text-lg font-medium hover:bg-primary hover:text-primary-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}