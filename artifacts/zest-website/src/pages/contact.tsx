import { useState } from "react";
import { useLocation } from "wouter";
import { Mail, Phone, MapPin, CheckCircle2, MessageCircle } from "lucide-react";

export default function Contact() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const prefilledSubject = searchParams.get('subject') || "";

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="pt-24 pb-0 bg-background min-h-screen">
      
      {/* Hero */}
      <section className="py-24 bg-zest-yellow text-foreground text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-serif text-6xl md:text-8xl mb-8">Let's start a conversation</h1>
          <p className="text-2xl text-foreground/80 leading-relaxed font-serif italic">
            Whether you represent a hotel spa, a wellness destination, or a boutique retail brand — we'd love to hear from you. Every enquiry is handled personally.
          </p>
        </div>
      </section>

      {/* Enquiry Cards */}
      <section className="py-20 -mt-10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-card p-10 rounded-3xl shadow-xl border border-border">
              <h3 className="font-serif text-2xl mb-4 text-primary">Trade & Wholesale</h3>
              <p className="text-muted-foreground">Looking to stock our brands in your salon, spa, or boutique retail store? Apply for a trade account.</p>
            </div>
            <div className="bg-card p-10 rounded-3xl shadow-xl border border-border">
              <h3 className="font-serif text-2xl mb-4 text-primary">B2B & Hospitality</h3>
              <p className="text-muted-foreground">Developing a guest amenity program or outfitting a new hotel spa? Discuss volume pricing and logistics.</p>
            </div>
            <div className="bg-card p-10 rounded-3xl shadow-xl border border-border">
              <h3 className="font-serif text-2xl mb-4 text-primary">Bespoke Solutions</h3>
              <p className="text-muted-foreground">Ready to create a signature scent or custom product line for your property? Let's explore the possibilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            
            {/* Info Side */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-serif text-4xl mb-6">Contact Details</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team aims to respond to all enquiries within 1 business day. We pride ourselves on human, personal service.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center shrink-0 mr-6">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">Email Us</h3>
                    <p className="text-muted-foreground text-lg mb-1">hello@zestwellness.com</p>
                    <p className="text-muted-foreground text-lg">orders@zestwellness.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center shrink-0 mr-6">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">Call Us</h3>
                    <p className="text-muted-foreground text-lg mb-2">+44 (0) 20 7123 4567</p>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors">
                      <MessageCircle size={16} className="mr-2" /> Message on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center shrink-0 mr-6">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">Head Office</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Zest House<br/>
                      124 Wellness Way<br/>
                      London, W1D 4AS<br/>
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3">
              <div className="bg-card p-10 md:p-16 rounded-3xl border border-border shadow-2xl">
                {formStatus === "success" ? (
                  <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                    <CheckCircle2 className="text-zest-green w-24 h-24 mb-8" />
                    <h3 className="font-serif text-4xl mb-4">Message Received</h3>
                    <p className="text-muted-foreground text-xl max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. A member of the Zest team will review your enquiry and get back to you personally within 24 hours.
                    </p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="mt-12 text-primary font-bold uppercase tracking-widest hover:text-foreground transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
                    <h2 className="font-serif text-4xl mb-8">Send an Enquiry</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-foreground">Name</label>
                        <input 
                          id="name" 
                          required 
                          className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-lg"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="company" className="text-sm font-bold uppercase tracking-widest text-foreground">Company</label>
                        <input 
                          id="company" 
                          className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-lg"
                          placeholder="The Grand Hotel"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-foreground">Email</label>
                      <input 
                        id="email" 
                        type="email" 
                        required 
                        className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-lg"
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="subject" className="text-sm font-bold uppercase tracking-widest text-foreground">Type of Enquiry</label>
                      <select 
                        id="subject"
                        defaultValue={prefilledSubject || "general"}
                        className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none text-lg"
                      >
                        {prefilledSubject && <option value={prefilledSubject}>{prefilledSubject}</option>}
                        <option value="general">General Enquiry</option>
                        <option value="Trade">Trade / Wholesale Account</option>
                        <option value="B2B & Hospitality">B2B / Hotel / Spa Solutions</option>
                        <option value="Bespoke">Bespoke Creation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-foreground">Message</label>
                      <textarea 
                        id="message" 
                        required 
                        rows={6}
                        className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none text-lg"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === "submitting"}
                      className="w-full py-5 rounded-full bg-primary text-primary-foreground text-xl font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 flex justify-center items-center"
                    >
                      {formStatus === "submitting" ? "Sending..." : "Submit Enquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}