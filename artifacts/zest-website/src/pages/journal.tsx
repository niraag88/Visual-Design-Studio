import { Link } from "wouter";
import { EnquiryCTA } from "@/components/EnquiryCTA";

const posts = [
  {
    id: 1,
    title: "The Rise of Marine Actives in Luxury Spas",
    category: "Trends",
    date: "October 12, 2023",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
    excerpt: "Why top tier properties are turning to the ocean for the next generation of high-performance facials."
  },
  {
    id: 2,
    title: "Interview: The Artisans Behind Aura Botanica",
    category: "Brand Spotlight",
    date: "September 28, 2023",
    image: "https://images.unsplash.com/photo-1608248593842-8d76d4981881?auto=format&fit=crop&q=80&w=800",
    excerpt: "We sit down with the founders to discuss ethical wild-harvesting and the power of pure essential oils."
  },
  {
    id: 3,
    title: "Navigating the Shift to Refillable Amenities",
    category: "Hospitality",
    date: "August 15, 2023",
    image: "https://images.unsplash.com/photo-1584305574647-0cc91866385a?auto=format&fit=crop&q=80&w=800",
    excerpt: "A practical guide for hoteliers looking to eliminate single-use plastics without compromising on luxury."
  }
];

export default function Journal() {
  return (
    <div className="pt-24 pb-0 bg-background">
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl mb-12">The Journal</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-muted">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                <span className="text-primary">{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      <EnquiryCTA title="Subscribe to our Newsletter" text="Join our mailing list for industry insights, new brand launches, and wellness news." buttonText="Sign Up" />
    </div>
  );
}
