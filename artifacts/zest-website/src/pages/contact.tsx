import { useState } from "react";
import { useLocation } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [location] = useLocation();
  // Basic URL parsing to see if we have a subject pre-filled from an EnquiryCTA
  const searchParams = new URLSearchParams(window.location.search);
  const prefilledSubject = searchParams.get('subject') || "";

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Whether you're interested in becoming a stockist, need support with your current account, or want to discuss bespoke solutions, our team is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0 mr-6">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">Email Us</h3>
                  <p className="text-muted-foreground">General: hello@zestwellness.com</p>
                  <p className="text-muted-foreground">Orders: orders@zestwellness.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0 mr-6">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+44 (0) 20 7123 4567</p>
                  <p className="text-sm text-muted-foreground mt-1">Monday - Friday, 9am - 5pm GMT</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0 mr-6">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">Head Office</h3>
                  <p className="text-muted-foreground">
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
          <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-xl shadow-black/5">
            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-primary w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl mb-4">Message Received</h3>
                <p className="text-muted-foreground text-lg">
                  Thank you for reaching out. A member of the Zest team will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-primary font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-serif text-3xl mb-8">Send an Enquiry</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <input 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">Company</label>
                    <input 
                      id="company" 
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="The Grand Hotel"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <select 
                    id="subject"
                    defaultValue={prefilledSubject || "general"}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                  >
                    {prefilledSubject && <option value={prefilledSubject}>{prefilledSubject}</option>}
                    <option value="general">General Enquiry</option>
                    <option value="wholesale">Wholesale / Stockist Application</option>
                    <option value="b2b">Hotel / Spa Solutions</option>
                    <option value="bespoke">Bespoke Creation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea 
                    id="message" 
                    required 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg disabled:opacity-70 flex justify-center items-center"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
