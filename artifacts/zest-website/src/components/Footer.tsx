import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <span className="font-serif text-3xl font-medium tracking-wide mb-6 block">ZEST</span>
            <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-xs">
              Curating exceptional natural beauty, wellness, and lifestyle brands for 23 years. A family-led commitment to quality and service.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-serif text-lg mb-6">Discover</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link href="/brand-partners" className="hover:text-primary transition-colors">Our Brands</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Collections</Link></li>
              <li><Link href="/b2b-hospitality" className="hover:text-primary transition-colors">B2B & Hospitality</Link></li>
              <li><Link href="/bespoke" className="hover:text-primary transition-colors">Bespoke Solutions</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link href="/our-story" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="font-serif text-lg mb-6">Stay Inspired</h4>
            <p className="text-sm text-background/70 mb-4">
              Join our mailing list for industry insights, new brand launches, and wellness news.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-background/30 px-0 py-2 w-full text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                type="submit"
                className="text-sm font-medium uppercase tracking-wider text-primary hover:text-primary-foreground transition-colors ml-4"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Zest. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Instagram</a>
            <a href="#" className="hover:text-background transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
