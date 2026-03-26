import { useState } from "react";
import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

function ZestLogoFooter() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-xl p-2 inline-block mb-6">
      {imgError ? (
        <span className="font-serif text-3xl font-bold tracking-[0.1em] text-foreground">
          ZEST
        </span>
      ) : (
        <img
          src="/images/zest-logo.jpg"
          alt="Zest"
          className="h-8 w-auto object-contain"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12 mb-20">
          
          {/* About Zest */}
          <div>
            <Link href="/">
              <ZestLogoFooter />
            </Link>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              Curating exceptional natural beauty, wellness, and lifestyle brands for 23 years. A family-led commitment to quality and service.
            </p>
            <span className="inline-block py-1 px-3 rounded-full bg-background/10 text-background/90 text-xs font-semibold tracking-widest uppercase">
              Est. 2002
            </span>
          </div>

          {/* Our Portfolio */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Our Portfolio</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li><Link href="/brand-partners" className="hover:text-primary transition-colors">All Brands</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Skincare & Facial</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Bath & Body Care</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Aromatherapy</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Wellness Accessories</Link></li>
            </ul>
          </div>

          {/* Working Together */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Working Together</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li><Link href="/b2b-hospitality" className="hover:text-primary transition-colors">Hotel & Spa Solutions</Link></li>
              <li><Link href="/b2b-hospitality" className="hover:text-primary transition-colors">Guest Amenities</Link></li>
              <li><Link href="/bespoke" className="hover:text-primary transition-colors">Bespoke Creations</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Retail Partnerships</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-background/80 mb-8">
              <li>London, United Kingdom</li>
              <li>hello@zestwellness.com</li>
              <li>+44 (0) 20 7123 4567</li>
            </ul>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            
            <div className="mt-8">
              <h5 className="text-sm font-medium mb-3 text-white">Subscribe</h5>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-b border-background/30 px-0 py-2 w-full text-sm focus:outline-none focus:border-primary transition-colors text-white"
                />
                <button 
                  type="submit"
                  className="text-sm font-medium uppercase tracking-wider text-primary hover:text-white transition-colors ml-4"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Zest. Family-led natural beauty and wellness.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
