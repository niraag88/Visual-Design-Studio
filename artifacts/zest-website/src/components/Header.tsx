import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Our Story", href: "/our-story" },
  { name: "Brands", href: "/brand-partners" },
  { name: "Collections", href: "/collections" },
  { name: "B2B & Hospitality", href: "/b2b-hospitality" },
  { name: "Bespoke", href: "/bespoke" },
  { name: "Journal", href: "/journal" },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If we are on the home page, we want a transparent header initially
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled || !isHome
            ? "glass-nav py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <span className={cn(
              "font-serif text-3xl font-medium tracking-wide transition-colors duration-300",
              (!isScrolled && isHome) ? "text-foreground" : "text-foreground"
            )}>
              ZEST
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-out after:duration-300 after:bg-primary",
                  location === link.href ? "text-primary" : "text-foreground/80",
                  (!isScrolled && isHome) && "text-foreground/90 hover:text-foreground after:bg-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                (!isScrolled && isHome)
                  ? "bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg hover:-translate-y-0.5"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              )}
            >
              Enquire
            </Link>
            
            <button
              className="lg:hidden p-2 -mr-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 lg:hidden transition-transform duration-500 ease-in-out flex flex-col pt-24 px-6",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 text-xl font-serif mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors border-b border-border/50 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-sans font-medium bg-primary text-primary-foreground"
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </>
  );
}
