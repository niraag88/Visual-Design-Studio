import { Link } from "wouter";
import { EnquiryCTA } from "@/components/EnquiryCTA";

const fallbackImage = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80';

const posts = [
  {
    id: 1,
    title: "The art of the signature spa ritual: Why treatment experiences matter more than ever",
    category: "Wellness",
    date: "October 12, 2023",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    excerpt: "In an increasingly digital world, luxury consumers are seeking profound physical experiences. We explore how customized rituals drive loyalty."
  },
  {
    id: 2,
    title: "Natural ingredients in professional skincare: What spa directors need to know",
    category: "Industry",
    date: "September 28, 2023",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
    excerpt: "Navigating the fine line between clinical efficacy and clean formulations in high-turnover treatment rooms."
  },
  {
    id: 3,
    title: "Building a wellness brand identity: How product selection shapes guest perception",
    category: "Hospitality",
    date: "August 15, 2023",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
    excerpt: "The subtle psychology behind the brands you choose to place in your bathrooms and on your retail shelves."
  },
  {
    id: 4,
    title: "Guest amenities reimagined: Moving beyond the standard toiletry kit",
    category: "Hospitality",
    date: "July 02, 2023",
    image: "https://images.unsplash.com/photo-1584305574647-0cc91866385a?w=800&q=80",
    excerpt: "Sustainability meets luxury. How the best properties are eliminating single-use plastics elegantly."
  },
  {
    id: 5,
    title: "Why we curate: The Zest philosophy behind every brand partnership",
    category: "Curation",
    date: "June 18, 2023",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    excerpt: "A look inside our rigorous vetting process and why saying 'no' is the most important part of curation."
  },
  {
    id: 6,
    title: "Sensory storytelling: Using aroma, texture, and ritual to differentiate your spa",
    category: "Wellness",
    date: "May 05, 2023",
    image: "https://images.unsplash.com/photo-1600014799818-c7b72adaed94?w=800&q=80",
    excerpt: "Scent is memory. How to utilize olfactory branding to ensure guests never forget their visit."
  }
];

export default function Journal() {
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="pt-24 pb-0 bg-background">
      <section className="py-24 px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-6xl md:text-8xl mb-8">The Journal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif italic">
            Thoughts on curation, hospitality trends, and the future of natural wellness.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {["All", "Industry", "Wellness", "Curation", "Hospitality"].map(cat => (
            <button key={cat} className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase transition-colors ${cat === 'All' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'}`}>
              {cat}
            </button>
          ))}
        </div>
        
        {/* Featured Post */}
        <div className="mb-24">
          <article className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
              <img src={featuredPost.image} alt={featuredPost.title} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs font-bold text-primary uppercase tracking-widest mb-6">
                <span>{featuredPost.category}</span>
                <span className="text-muted-foreground">{featuredPost.date}</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 group-hover:text-primary transition-colors leading-tight">{featuredPost.title}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              <span className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors border-b-2 border-transparent group-hover:border-primary pb-1">
                Read Article
              </span>
            </div>
          </article>
        </div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {remainingPosts.map(post => (
            <article key={post.id} className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 bg-muted relative">
                <img src={post.image} alt={post.title} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                <span>{post.category}</span>
                <span className="text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors leading-tight flex-grow">{post.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors mt-auto">
                Read More
              </span>
            </article>
          ))}
        </div>
      </section>

      <EnquiryCTA title="Join the conversation" text="Subscribe to our mailing list for industry insights, new brand launches, and wellness news." buttonText="Subscribe Now" />
    </div>
  );
}